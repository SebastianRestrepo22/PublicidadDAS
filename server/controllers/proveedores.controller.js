import db from '../lib/db.js';

export const getAllProveedores = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Proveedores");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProveedorById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM Proveedores WHERE ProveedorId = ?", [id]);
        if (rows.length === 0) return res.status(404).json({ message: "Proveedor no encontrado" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createProveedor = async (req, res) => {
    const { nombre, telefono, correo, direccion } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO Proveedores (Nombre, Telefono, Correo, Direccion) VALUES (?, ?, ?, ?)",
            [nombre, telefono, correo, direccion]
        );
        res.status(201).json({ id: result.insertId, nombre, telefono, correo, direccion });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const deleteProveedor = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("DELETE FROM Proveedores WHERE ProveedorId = ?", [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Proveedor no encontrado" });
        res.json({ message: "Proveedor eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
  