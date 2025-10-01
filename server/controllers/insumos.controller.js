import {
  getAllInsumos as getAllInsumosModel,
  getInsumoById as getInsumoByIdModel,
  createInsumo as createInsumoModel,
  deleteInsumo as deleteInsumoModel,
  updateInsumo as updateInsumoModel
} from '../models/insumos.models.js';
import { v4 as uuidv4 } from 'uuid';

// Obtener todas los insumos 
export const getAllInsumos = async (req, res) => {
  try {
    const insumos = await getAllInsumosModel();
    res.json(insumos);
  } catch (err) {
    console.error("Error al obtener categorias:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Obtener insumo por ID
export const getInsumoById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "ID inválido" });

  try {
    const insumo = await getInsumoByIdModel(id);
    if (!insumo) return res.status(404).json({ message: "Insumo no encontrado" });
    res.json(insumo);
  } catch (err) {
    console.error("Error al obtener el insumo por ID:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Crear nuevo insumo
export const createInsumo = async (req, res) => {
  const { nombreInsumo, stock } = req.body;

  if (!nombreInsumo || !stock) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const result = await createInsumoModel({ nombreInsumo, stock });
    res.status(201).json(result);
  } catch (err) {
    console.error("Error al crear insumo:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Eliminar insumo
export const deleteInsumo = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "ID inválido" });

  try {
    const result = await deleteInsumoModel(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Insumo no encontrado" });
    }
    res.json({ message: "Insumo eliminado correctamente" });
  } catch (err) {
    console.error("Error al eliminar insumo:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Actualizar insumo
export const updateInsumo = async (req, res) => {
  const id = req.params.id;
  const { nombreInsumo, stock } = req.body;

  if (!nombreInsumo || !stock) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const result = await updateInsumoModel(id, { nombreInsumo, stock });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Insumo no encontrado" });
    }
    res.json({ message: "Insumo actualizado correctamente" });
  } catch (err) {
    console.error("Error al actualizar el insumo:", err.message);
    res.status(500).json({ error: err.message });
  }
};
