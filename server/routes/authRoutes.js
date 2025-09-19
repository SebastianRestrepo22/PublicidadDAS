import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Role from '../models/role.model.js';
import Usuario from '../models/user.model.js';

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
        // Verifica si el correo ya existe
        const existente = await Usuario.findOne({ where: { CorreoElectronico } });
        if (existente) {
            return res.status(409).json({ message: 'Usuario ya existe' });
        }

        // Busca el rol cliente
        const rol = await Role.findOne({ where: { Nombre: 'cliente' } });
        if (!rol) {
            return res
                .status(400)
                .json({ message: "Rol 'cliente' no encontrado en BD" });
        }

        // Hashea contraseña
        const hash = await bcrypt.hash(Contrasena, 10);

        // Crea el usuario
        await Usuario.create({
            CedulaId,
            NombreCompleto,
            Telefono,
            CorreoElectronico,
            Direccion,
            Contrasena: hash,
            RoleId: rol.RoleId
        });

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
        const user = await Usuario.findOne({
            where: { CorreoElectronico },
            include: [{ model: Role }]
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no existe' });
        }

        const isMatch = await bcrypt.compare(Contrasena, user.Contrasena);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        console.log(user.Role)

        const token = jwt.sign(
            {
                CedulaId: user.CedulaId,
                RoleId: user.RoleId,
                Role: user.Role.Nombre
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
        const user = await Usuario.findByPk(req.userId, {
            include: [{ model: Role }]
        });
        if (!user) return res.status(404).json({ message: 'Usuario no existe' });

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error en /dashboard:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

export default router;
