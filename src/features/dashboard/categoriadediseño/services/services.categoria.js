import { data } from 'react-router-dom';
import * as categoriaModel from "../models/categoria.models.js";

export const getAllCategorias = async () => {
    return await categoriaModel.getAllCategorias();
};

export const getAllCategoriasById = async (id) => {
    return await categoriaModel.getAllCategoriasById(id);
}

export const createCategoria = async (data) => {
    return await categoriaModel.createCategoria(data);
};

export const updateCategoria = async (id, data) => {
    const result = await categoriaModel.updateCategoria(id. data);
    if (result.affectedRows === 0) throw new Error(" Categoria no encontrada");
    return result;
};

export const deleteCategoria = async (data) => {
    const result = await categoriaModel.deleteCategoria(id);
    if (result.affectedRows === 0 ) throw new Error("Categoria no encontrada");
    return result;
    
};