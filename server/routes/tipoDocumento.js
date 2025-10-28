import express from 'express';
import { connectDB } from '../lib/db.js';

const router = express.Router();

// Obtener todos los tipos de documento
router.get('/', async (req, res) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT TipoDocumentoId, Nombre FROM tipodocumento');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error obteniendo tipos de documento:', error);
    res.status(500).json({ message: 'Error al obtener tipos de documento' });
  }
});

export default router;
