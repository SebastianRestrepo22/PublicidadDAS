import { data } from "react-router-dom";
import * as proveedoresModel from "../models/"

export const getAllProveedores = async () => {
    return await proveedoresModel.getAllProveedores();
};

export const getAllProveedoresById = async () => {
    return await proveedoresModel.getAllProveedoresById(id);
};

export const createProveedores = async () => {
    return await proveedoresModel.createProveedores(data);
};

export const updateProveedores = async () => {
    const result = await proveedoresModel.updateProveedores(id, data)
    if (result.affectedRows === 0) throw new Error(" Proveedor no encontrado");
    return result;  
};

export const deleteProveedores = async () => {
    const result = await proveedoresModel.deleteProveedores(id);
    if (result.affectedRows === 0) throw new Error("Proveedor no encontrado");
    return result;
};
