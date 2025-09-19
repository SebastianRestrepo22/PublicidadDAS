import express from 'express'
import bcrypt from 'bcrypt'
import { connectionToDatabase } from '../lib/db.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', async (req, res) => {
    const { CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, Contrasena } = req.body
    try {
        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM Usuarios WHERE CorreoElectronico  = ?', [CorreoElectronico])

        if (rows.length > 0) {
            return res.status(409).json({ message: "Usuario ya existe" })
        }

        const [roleRows] = await db.query(
            "SELECT RoleId FROM Roles WHERE Nombre = ?",
            ['Administrador']
        );

        if (roleRows.length === 0) {
            return res.status(400).json({ message: "Rol 'administrador' no encontrado" });
        }

        const RoleId = roleRows[0].RoleId;

        const hashPassword = await bcrypt.hash(Contrasena, 10)
        await db.query(
            "INSERT INTO Usuarios (CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, Contrasena, RoleId) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, hashPassword, RoleId]
        )

        res.status(201).json({ message: "Usuario creado exitosamente" })
    } catch (error) {
        console.error("Error en /register:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
})

router.post('/login', async (req, res) => {
    const { CorreoElectronico, Contrasena } = req.body
    try {
        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM Usuarios WHERE CorreoElectronico  = ?', [CorreoElectronico])

        if (rows.length === 0) {
            return res.status(404).json({ message: "Usuario no existe" })
        }
        const isMatch = await bcrypt.compare(Contrasena, rows[0].Contrasena)

        if (!isMatch) {
            return res.status(401).json({ message: "Credenciales inválidas" })
        }

        const token = jwt.sign({
            CedulaId: rows[0].CedulaId,
            RoleId: rows[0].RoleId
        }, process.env.JWT_KEY, { expiresIn: '1m' })

        res.status(201).json({ token: token })
    } catch (error) {
        console.error("Error en /login:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
})

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: "No hay token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.CedulaId;
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

router.get('/dashboard', verifyToken, async (req, res) => {
    try {
        console.log("CedulaId recibido desde token:", req.userId);

        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM Usuarios WHERE CedulaId = ?', [req.userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "Usuario no existe" })
        }

        console.log("Usuario encontrado:", rows[0]);

        return res.status(200).json({ user: rows[0] })
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" })
    }
})

// const verifyAdmin = (req, res, next) => {
//   try {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) {
//       return res.status(403).json({ message: "No hay token" });
//     }
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     if (decoded.RoleId !== '01') {
//       return res.status(403).json({ message: "Acceso denegado: no eres administrador" });
//     }
//     req.userId = decoded.CedulaId;
//     next();
//   } catch (error) {
//     console.error("Error al verificar token:", error);
//     return res.status(401).json({ message: "Token inválido o expirado" });
//   }
// };

// router.get('/dashboard', verifyAdmin, async (req, res) => { ... });


export default router;