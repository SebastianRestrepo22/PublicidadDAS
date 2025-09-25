import { connectionToDatabase } from '../lib/db.js';

// Obtener todos los proveedores
export const getAllProveedores = async () => {
  const db = await connectionToDatabase();
  const [rows] = await db.query('SELECT * FROM Proveedores');
  return rows;
};

// Obtener proveedor por ID
export const getProveedorById = async (id) => {
  const db = await connectionToDatabase();
  const [rows] = await db.query('SELECT * FROM Proveedores WHERE ProveedorId = ?', [id]);
  return rows[0];
};

// Crear nuevo proveedor
export const createProveedor = async ({ nombreProveedor, telefono, correo, direccion, estado }) => {
  const db = await connectionToDatabase();
  const [result] = await db.query(
    'INSERT INTO Proveedores (NombreProveedor, Telefono, Correo, Direccion, Estado) VALUES (?, ?, ?, ?, ?)',
    [nombreProveedor, telefono, correo, direccion, estado]
  );
  return result;
};

// Eliminar proveedor por ID
export const deleteProveedor = async (id) => {
  const db = await connectionToDatabase();
  const [result] = await db.query('DELETE FROM Proveedores WHERE ProveedorId = ?', [id]);
  return result;
};
