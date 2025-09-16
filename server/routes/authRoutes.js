import express from 'express'
import bcrypt from 'bcrypt'
import { connectionToDatabase } from '../lib/db.js'

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
            ['cliente']
        );

        if (roleRows.length === 0) {
            return res.status(400).json({ message: "Rol 'cliente' no encontrado" });
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

        const [roleRows] = await db.query(
            "SELECT RoleId FROM Roles WHERE Nombre = ?",
            ['cliente']
        );

        if (roleRows.length === 0) {
            return res.status(400).json({ message: "Rol 'cliente' no encontrado" });
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

export default router;