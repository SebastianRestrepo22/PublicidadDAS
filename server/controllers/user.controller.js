import { connectDB } from '../lib/db.js';
import bcrypt from 'bcrypt';
import { sendWelcomeEmail } from '../utils/email.js';

// Crear usuario
export const createUser = async (req, res) => {
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

        // Busca el rol "cliente"
        const [roles] = await connection.execute(
            'SELECT * FROM roles WHERE Nombre = ?',
            ['cliente']
        );
        if (roles.length === 0) {
            return res.status(400).json({ message: "Rol 'cliente' no encontrado en BD" });
        }

        const rol = roles[0];

        //Si viene contraseña desde el body (registro), la usamos
        let passwordToUse = Contrasena;
        //Si NO viene, usamos una predeterminada
        if (!passwordToUse) {
            passwordToUse = "Cliente123"; // Contraseña predeterminada
        }

        /*
        // O si quieres generar una aleatoria más adelante:
        import crypto from "crypto";
        passwordToUse = crypto.randomBytes(6).toString("base64"); // Ej: "aB9dXz!"
        */

        const hash = await bcrypt.hash(passwordToUse, 10);

        await connection.execute(
            `INSERT INTO usuarios 
       (CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, Contrasena, RoleId) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [CedulaId, NombreCompleto, Telefono, CorreoElectronico, Direccion, hash, rol.RoleId]
        );

        // Enviar correo con la contraseña generada/predeterminada
        const correoEnviado = await sendWelcomeEmail(CorreoElectronico, passwordToUse);
        if (!correoEnviado) {
            console.warn("Usuario creado, pero el correo no se envió");
        }


        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Listar todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const connection = await connectDB();
        const [users] = await connection.execute(
            `SELECT u.*, r.Nombre AS RolNombre 
       FROM usuarios u 
       JOIN roles r ON u.RoleId = r.RoleId`
        );
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connectDB();
        const [users] = await connection.execute(
            `SELECT u.*, r.Nombre AS RolNombre 
       FROM usuarios u 
       JOIN roles r ON u.RoleId = r.RoleId 
       WHERE u.CedulaId = ?`,
            [id]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(users[0]);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        NombreCompleto,
        Telefono,
        CorreoElectronico,
        Direccion,
        RoleId
    } = req.body;

    try {
        const connection = await connectDB();
        const [result] = await connection.execute(
            `UPDATE usuarios 
       SET NombreCompleto = ?, Telefono = ?, CorreoElectronico = ?, Direccion = ?, RoleId = ? 
       WHERE CedulaId = ?`,
            [NombreCompleto, Telefono, CorreoElectronico, Direccion, RoleId, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connectDB();
        const [result] = await connection.execute(
            'DELETE FROM usuarios WHERE CedulaId = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Validar si correo ya existe
export const validarCorreo = async (req, res) => {
    const { correo } = req.query;
    try {
        const connection = await connectDB();
        const [usuarios] = await connection.execute(
            'SELECT * FROM usuarios WHERE CorreoElectronico = ?',
            [correo]
        );

        res.status(200).json({ exists: usuarios.length > 0 });
    } catch (error) {
        console.error('Error al validar correo:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Validar si la cedula ya existe
export const validarCedula = async (req, res) => {
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
};

// Validar si el telefono ya existe
export const validarTelefono = async (req, res) => {
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
};

//Buscar usuarios

export const buscarUsuarios = async (req, res) => {
    const { campo, valor } = req.query;

    const columnasPermitidas = {
        id: 'CedulaId',
        cedula: 'CedulaId',
        nombre: 'NombreCompleto',
        direccion: 'Direccion',
        correo: 'CorreoElectronico',
        telefono: 'Telefono',
        rol: 'r.Nombre'
    };


    const columna = columnasPermitidas[campo];
    if (!columna) {
        return res.status(400).json({ message: 'Campo de búsqueda inválido' });
    }

    try {
        const connection = await connectDB();
        const [usuarios] = await connection.execute(
            `SELECT u.*, r.Nombre AS RolNombre
       FROM usuarios u
       JOIN roles r ON u.RoleId = r.RoleId
       WHERE u.${columna} LIKE ?`,
            [`%${valor}%`]
        );

        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al buscar usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
