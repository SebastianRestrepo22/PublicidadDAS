import Role from '../models/role.model.js';

// Crear rol
export const createRole = async (req, res) => {
  try {
    const { Nombre, Estado } = req.body; // Usa los nombres correctos
    const role = await Role.create({ Nombre, Estado });
    res.status(201).json({
      message: 'Rol creado correctamente',
      role
    });
  } catch (error) {
    console.error(error); // Para ver el error real en la terminal
    res.status(500).json({ message: 'Error al crear el rol', error: error.message });
  }
};


// Listar todos los roles
export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles', error: error.message });
  }
};

// Obtener rol por ID
export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el rol', error: error.message });
  }
};

// Actualizar rol

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params; // id aquí es el RoleId
    const { Nombre, Estado } = req.body; // los nombres según tu modelo
    // Buscamos el rol por su PK
    const role = await Role.findByPk(id);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });
    // Actualizamos los campos permitidos
    await role.update({ Nombre, Estado });
    res.status(200).json({ message: 'Rol actualizado correctamente', role });
  } catch (error) {
    console.error('Error actualizando rol:', error);
    res.status(500).json({ message: 'Error al actualizar el rol', error: error.message });
  }
};


// Eliminar rol
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });

    await role.destroy();
    res.status(200).json({ message: 'Rol eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando rol:', error);
    res.status(500).json({ message: 'Error al eliminar el rol', error: error.message });
  }
};

// Cambiar estado de un rol
export const changeState = async (req, res) => {
  const { estado } = req.body;

  try {
    await Role.update({ Estado: estado }, { where: { RoleId: req.params.id } });
    res.status(200).json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar estado del rol:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
