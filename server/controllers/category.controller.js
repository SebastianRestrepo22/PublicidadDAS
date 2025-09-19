import db from '../lib/db.js'; 

exports.getAllCategorias = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Categorias");
        res.json(rows);
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
};

exports.getAllCategoriaById = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM Categorias WHERE CategoriaId = ? ", [id]);
        if (rows.length === 0) return res.status(404).json({ message: "No encontrada"});
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message})
        
    }
}

export const createCategoria = async (req, res) => {
    const {nombre, descripcion} = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO Categorias  (nombre, descripcion) VALUES (?, ?, ?,)",
            [nombre, descripcion]
        );
        res.status(201).json({ id: result.insertId, nombre, descripcion});
    } catch (err) {
        res.status(500).json({ error: err.message});
        
    }
};

export const deleteCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("DELETE FROM Categorias WHERE categoriaId = ?" , [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "categoria no encontrada"})
        res.json({ message: "categoria eliminada correctamente "});
    } catch (err) {
        res.status(500).json({ error: err.message});
        
    }
};






