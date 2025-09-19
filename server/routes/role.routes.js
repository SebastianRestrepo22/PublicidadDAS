    import express from 'express';
    import { 
    createRole, 
    getAllRoles, 
    getRoleById, 
    updateRole, 
    deleteRole,
    changeState 
    } from '../controllers/role.controller.js';

    const router = express.Router();

    // Crear rol
    router.post('/', createRole);

    // Obtener todos los roles
    router.get('/', getAllRoles);

    // Obtener rol por ID
    router.get('/:id', getRoleById);

    // Actualizar rol
    router.put('/:id', updateRole);

    // Eliminar rol
    router.delete('/:id', deleteRole);

    //Cambiar el estado del rol

    router.put('/:id/estado', changeState);

    export default router;
