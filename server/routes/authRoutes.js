import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDB } from '../lib/db.js';

const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
    const {
        CedulaId,
        NombreCompleto,
        Telefono,
        CorreoElectronico,
        Direccion,
        Contrasena
    } = req.body;

    try {
        const connection = await connectDB();

        // Verifica si el correo ya existe
        const [existente] = await connection.execute(
            'SELECT * FROM usuarios WHERE CorreoElectronico = ?',
            [CorreoElectronico]
        );
        if (existente.length > 0) {
            return res.status(409).json({ message: 'Usuario ya existe' });
        }

        // Busca el rol cliente
        const [roles] = await connection.execute(
            'SELECT * FROM roles WHERE Nombre = ?',
            ['cliente']
        );
        if (roles.length === 0) {
            return res.status(400).json({ message: "Rol 'cliente' no encontrado en BD" });
        }

        const rol = roles[0];

        // Hashea contraseña
        const hash = await bcrypt.hash(Contrasena, 10);

        // Crea el usuario
        await connection.execute(
            `INSERT INTO usuarios 
        (CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, Contrasena, RoleId) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, hash, rol.RoleId]
        );

        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error en /register:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { CorreoElectronico, Contrasena } = req.body;

    try {
        const connection = await connectDB();

        const [users] = await connection.execute(
            `SELECT u.*, r.Nombre AS RoleNombre 
       FROM usuarios u 
       JOIN roles r ON u.RoleId = r.RoleId 
       WHERE u.CorreoElectronico = ?`,
            [CorreoElectronico]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario no existe' });
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(Contrasena, user.Contrasena);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            {
                CedulaId: user.CedulaId,
                RoleId: user.RoleId,
                Role: user.RoleNombre
            },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en /login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Middleware para verificar token
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No hay token' });

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userId = decoded.CedulaId;
        req.userRole = decoded.RoleId;
        req.userRoleName = decoded.Role;
        next();
    } catch (err) {
        console.error('Error al verificar token:', err);
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

// Dashboard
router.get('/dashboard', verifyToken, async (req, res) => {
    try {
        const connection = await connectDB();

        const [users] = await connection.execute(
            `SELECT u.*, r.Nombre AS RoleNombre 
       FROM usuarios u 
       JOIN roles r ON u.RoleId = r.RoleId 
       WHERE u.CedulaId = ?`,
            [req.userId]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario no existe' });
        }

        res.status(200).json({ user: users[0] });
    } catch (error) {
        console.error('Error en /dashboard:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Validar si el correo ya existe
router.get('/validar-correo', async (req, res) => {
    const { correo } = req.query;

    try {
        const connection = await connectDB();
        const [usuarios] = await connection.execute(
            'SELECT * FROM usuarios WHERE CorreoElectronico = ?',
            [correo]
        );

        res.status(200).json({ exists: usuarios.length > 0 });
    } catch (error) {
        console.error('Error en /validar-correo:', error);
        res.status(500).json({ message: 'Error al validar correo' });
    }
});

// Validar si la cedula ya existe
router.get('/validar-cedula', async (req, res) => {
    const { cedula } = req.query;

    try {
        const connection = await connectDB();
        const [usuarios] = await connection.execute(
            'SELECT * FROM usuarios WHERE CedulaId = ?',
            [cedula]
        );

        res.status(200).json({ exists: usuarios.length > 0 });
    } catch (error) {
        console.error('Error en /validar-cedula:', error);
        res.status(500).json({ message: 'Error al validar la cedula' });
    }
});

// Validar si el telefono ya existe
router.get('/validar-telefono', async (req, res) => {
    const { telefono } = req.query;

    try {
        const connection = await connectDB();
        const [usuarios] = await connection.execute(
            'SELECT * FROM usuarios WHERE Telefono = ?',
            [telefono]
        );

        res.status(200).json({ exists: usuarios.length > 0 });
    } catch (error) {
        console.error('Error en /validar-telefono:', error);
        res.status(500).json({ message: 'Error al validar el telefono' });
    }
});


export default router;
