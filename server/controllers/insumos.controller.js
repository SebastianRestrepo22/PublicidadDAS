import db from '../lib/db.js'; 


exports.getAllInsumos = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Insumos");
        res.json(rows);
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
};

exports.getAllInsumoById = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM Insumos WHERE InsumoId = ?", [id]);
        if (rows.length === 0) return res.status(404).json({ message: "No encontrado"});
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message})
        
    }
}

export const createInsumo = async (req, res) => {
    const {nombre, stock} = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO Insumo  (nombre, stock) VALUES (?, ?, ?, ?)",
            [nombre, stock]
        );
        res.status(201).json({ id: result.insertId, nombre, stock});
    } catch (err) {
        res.status(500).json({ error: err.message});
        
    }
};

export const deleteInsumo = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("DELETE FROM Insumos WHERE InsumoId = ?  " , [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Insumo no encontrado"})
        res.json({ message: "Insumo eliminado correctamente "});
    } catch (err) {
        res.status(500).json({ error: err.message});
        
    }
};