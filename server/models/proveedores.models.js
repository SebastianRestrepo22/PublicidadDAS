import { connectionToDatabase } from '../lib/db.js';
import { v4 as uuidv4 } from 'uuid';

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

// Crear un nuevo proveedor
export const createProveedor = async ({ nombre, telefono, correo, direccion, estado }) => {
  const db = await connectionToDatabase();
  const proveedorId = uuidv4();
  await db.query(
    'INSERT INTO Proveedores (ProveedorId, Nombre, Telefono, Correo, Direccion, Estado) VALUES (?, ?, ?, ?, ?, ?)',
    [proveedorId, nombre, telefono, correo, direccion, estado]
  );
  return { proveedorId, nombre, telefono, correo, direccion, estado };
};

// Eliminar un proveedor
export const deleteProveedor = async (id) => {
  const db = await connectionToDatabase();
  const [result] = await db.query('DELETE FROM Proveedores WHERE ProveedorId = ?', [id]);
  return result;
};

// Actualizar un proveedor
export const updateProveedor = async (id, { nombre, telefono, correo, direccion, estado }) => {
  const db = await connectionToDatabase();
  const [result] = await db.query(
    'UPDATE Proveedores SET Nombre = ?, Telefono = ?, Correo = ?, Direccion = ?, Estado = ? WHERE ProveedorId = ?',
    [nombre, telefono, correo, direccion, estado, id]
  );
  return result;
};
