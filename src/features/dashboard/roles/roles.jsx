import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import Modal from "../components/modals/modal.jsx";
import { deleteDataRol, GetDataRoles, postDataRoles, updateDataRol } from './services/services.role';
import axios from "axios";

function Toggle({ checked = false, onChange }) {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${isOn ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${isOn ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

export const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({ Nombre: "", Estado: true, description: "" });
  const [erroresUnicos, setErroresUnicos] = useState({ Nombre: false });
  const [editData, setEditData] = useState(null);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await GetDataRoles();
      if (data?.data) setRoles(data.data);
    };
    fetchRoles();
  }, []);

  const changeData = (e) => {
    const { name, value } = e.target;

    // Validación de nombres únicos
    if (name === "Nombre") {
      const existe = roles.some(
        (rol) => rol.Nombre.toLowerCase().trim() === value.toLowerCase().trim() && (!editData || rol.RoleId !== editData.RoleId)
      );
      setErroresUnicos({ Nombre: existe });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleToggleEstado = async (roleId, nuevoEstado) => {
    try {
      await axios.put(`http://localhost:3000/roles/${roleId}/estado`, { estado: nuevoEstado });
      // Opcional: recargar roles o actualizar estado local
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      alert("No se pudo actualizar el estado del rol.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(erroresUnicos).some(Boolean)) {
      alert("Corrige los errores antes de guardar.");
      return;
    }

    if (editData) {
      // Actualizar
      const response = await updateDataRol(editData.RoleId, formData);
      if (response.status === 200 || response.status === 201) {
        const updatedList = await GetDataRoles();
        setRoles(updatedList.data);
        setOpenEditar(false);
        alert("Rol actualizado correctamente");
      }
    } else {
      // Crear
      const response = await postDataRoles(formData);
      if (response.status === 200 || response.status === 201) {
        const updatedList = await GetDataRoles();
        setRoles(updatedList.data);
        setOpenCreate(false);
        alert("Rol creado correctamente");
      }
    }

    setFormData({ Nombre: "", description: "", Estado: true });
    setEditData(null);
  };

  const handleEditClick = (rol) => {
    setEditData(rol);
    setFormData({ ...rol, Estado: rol.Estado === "Activo" });
    setOpenEditar(true);
  };

  const handleViewClick = (rol) => {
    setEditData(rol);
    setFormData({ ...rol, Estado: rol.Estado === "Activo" });
    setOpenVer(true);
  };

  const handleDeleteClick = (rol) => {
    setEditData(rol);
    setOpenEliminar(true);
  };

  const handleDelete = async () => {
    const response = await deleteDataRol(editData.RoleId);
    if (response.status === 200) {
      setRoles(roles.filter((rol) => rol.RoleId !== editData.RoleId));
      setOpenEliminar(false);
      alert("Rol eliminado correctamente");
    }
  };

  const renderForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel = type === "create" ? "Crear" : type === "editar" ? "Guardar" : "Cerrar";

    return (
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 text-left">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Nombre del Rol</label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ej: Administrador"
            value={formData.Nombre}
            onChange={changeData}
            readOnly={isReadOnly}
            className={`w-full h-11 px-4 border rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${erroresUnicos.Nombre ? "is-invalid" : ""}`}
          />
          {erroresUnicos.Nombre && (
            <div className="text-red-500 text-sm mt-1">
              Ya existe un rol con este nombre.
            </div>
          )}
        </div>

        <div className="col-span-1 flex gap-4 mt-4">
          {!isReadOnly && (
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
              {buttonLabel}
            </button>
          )}
          <button
            type="button"
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => {
              setOpenCreate(false);
              setOpenEditar(false);
              setOpenVer(false);
              setFormData({ Nombre: "", description: "" });
              setEditData(null);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Gestión de roles</h1>

          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link onClick={() => setOpenCreate(true)} className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald">
                <Plus size={18} /> Nuevo rol
              </Link>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" placeholder="Buscar roles" className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700" />
              </div>
            </div>
          </div>

          {/* Modales */}
          <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">Nuevo rol</h3>
              {renderForm("create")}
            </div>
          </Modal>

          <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">Editar rol</h3>
              {renderForm("editar")}
            </div>
          </Modal>

          <Modal open={openVer} onClose={() => setOpenVer(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">Ver rol</h3>
              {renderForm("ver")}
            </div>
          </Modal>

          <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
            <div className="w-[400px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-4">Eliminar rol</h3>
              <p className="mb-6">¿Estás seguro de eliminar este rol?</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors" onClick={handleDelete}>
                  Eliminar
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors" onClick={() => setOpenEliminar(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          </Modal>

          {/* Tabla */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">ID</th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Nombre</th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Estado</th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roles.map((rol) => (
                  <tr key={rol.RoleId} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-4 px-6 text-sm text-slate-900">{String(rol.RoleId).slice(0, 8)}</td>
                    <td className="py-4 px-6 text-sm text-slate-900">{rol.Nombre}</td>
                    <td className="py-4 px-6 text-sm text-slate-900">
                      <Toggle
                        checked={rol.Estado === "Activo"}
                        onChange={(value) => handleToggleEstado(rol.RoleId, value ? "Activo" : "Inactivo")}
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link onClick={() => handleEditClick(rol)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit size={16} />
                        </Link>
                        <Link onClick={() => handleViewClick(rol)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                          <Eye size={16} />
                        </Link>
                        <Link onClick={() => handleDeleteClick(rol)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 size={16} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
