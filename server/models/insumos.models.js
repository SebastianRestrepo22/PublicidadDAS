import { connectionToDatabase } from '../lib/db.js';

export const getAllInsumos = async () => {
  const db = await connectionToDatabase();
  const [rows] = await db.query('SELECT * FROM Insumos');
  return rows;
};

export const getInsumoById = async (id) => {
  const db = await connectionToDatabase();
  const [rows] = await db.query('SELECT * FROM Insumos WHERE InsumoId = ?', [id]);
  return rows[0];
};

// models/insumos.models.js
export const createInsumo = async ({ nombreInsumo, stock }) => {
  const db = await connectionToDatabase();
  const [result] = await db.query(
    'INSERT INTO Insumos (Nombre, Stock) VALUES (?, ?)',
    [nombreInsumo, stock] 
  );
  return result;
};


export const deleteInsumo = async (id) => {
  const db = await connectionToDatabase();
  const [result] = await db.query('DELETE FROM Insumos WHERE InsumoId = ?', [id]);
  return result;
};
