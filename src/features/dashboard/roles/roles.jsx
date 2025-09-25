import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import Modal from "../components/modals/modal.jsx";
import { buscarRoles, deleteDataRol, GetDataRoles, postDataRoles, updateDataRol } from './services/services.role';
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
  const [editData, setEditData] = useState(null);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const [filtroCampo, setFiltroCampo] = useState('');
  const [filtroValor, setFiltroValor] = useState('');

  useEffect(() => {
    if (filtroCampo && filtroValor) {
      buscarRoles(filtroCampo, filtroValor).then(setRoles);
    }
  }, [filtroCampo, filtroValor]);

  useEffect(() => {
    const buscar = async () => {
      if (filtroCampo && filtroValor) {
        const resultados = await buscarRoles(filtroCampo, filtroValor);
        setRoles(resultados);
      }
    };
    buscar();
  }, [filtroCampo, filtroValor]);

  useEffect(() => {
    const cargarRoles = async () => {
      try {
        let resultados;
        if (filtroCampo && filtroValor) {
          resultados = await buscarRoles(filtroCampo, filtroValor);
        } else {
          const todos = await GetDataRoles();
          resultados = todos?.data || [];
        }
        setRoles(Array.isArray(resultados) ? resultados : []);
      } catch (error) {
        console.error(error);
        setRoles([]);
      }
    };
    cargarRoles();
  }, [filtroCampo, filtroValor]);

  const [rolError, setRolError] = useState('');
  const [originalNombre, setOriginalNombre] = useState("");

  const handleRolBlur = async () => {
    if (formData.Nombre === originalNombre) return;

    try {
      const response = await axios.get(`http://localhost:3000/roles/validar-rol?rol=${formData.Nombre}`);
      if (response.data.exists) {
        setRolError('Este rol ya está registrado');
      } else {
        setRolError('');
      }
    } catch (error) {
      console.error('Error validando el rol:', error);
      setRolError('No se pudo validar el rol');
    }
  };

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await GetDataRoles();
      if (Array.isArray(data?.data)) {
        setRoles(data.data);
      } else {
        setRoles([]);
      }
    };
    fetchRoles();
  }, []);

  const changeData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleEstado = async (roleId, nuevoEstado) => {
    try {
      const response = await axios.put(`http://localhost:3000/roles/${roleId}/estado`, {
        estado: nuevoEstado
      });
      alert(response.data.message);
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("No se pudo actualizar el estado del rol.");
      }
      console.error("Error al cambiar estado:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rolError) return;

    if (editData) {
      const response = await updateDataRol(editData.RoleId, formData);
      if (response.status === 200 || response.status === 201) {
        const updatedList = await GetDataRoles();
        setRoles(updatedList.data);
        setOpenEditar(false);
        alert("Rol actualizado correctamente");
      }
    } else {
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
    setOriginalNombre(rol.Nombre);
    setRolError('');
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/roles/${id}`);
      alert(response.data.message);
      const updatedList = await GetDataRoles();
      if (updatedList?.data) setRoles(updatedList.data);
      setOpenEliminar(false);
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Error al eliminar el rol');
      }
    }
  };

  const renderForm = (type = "create") => {
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
            onBlur={handleRolBlur}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {rolError && <p className="text-red-500 text-sm">{rolError}</p>}
        </div>

        <div className="col-span-1 flex gap-4 mt-4">
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
            {buttonLabel}
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => {
              setOpenCreate(false);
              setOpenEditar(false);
              setOpenVer(false);
              setFormData({ Nombre: "", description: "" });
              setEditData(null);
              setRolError('');
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  };

  const renderView = () => {
    if (!editData) return null;

    return (
      <div className="text-left space-y-2">
        <p><strong>ID:</strong> {editData.RoleId}</p>
        <p><strong>Nombre:</strong> {editData.Nombre}</p>
        <p><strong>Estado:</strong> {editData.Estado}</p>
        <div className="mt-4 text-center">
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 w-[400px]"
            onClick={() => setOpenVer(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
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

              <select
                value={filtroCampo}
                onChange={(e) => setFiltroCampo(e.target.value)}
                className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[140px]">
                <option value="">Filtrar por campo</option>
                <option value="nombre">Nombre</option>
                <option value="estado">Estado</option>
              </select>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  value={filtroValor}
                  onChange={(e) => setFiltroValor(e.target.value)}
                  type="text" placeholder="Buscar roles" className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700" />
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
              {renderView()}
            </div>
          </Modal>

          <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
            <div className="w-[400px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-4">Eliminar rol</h3>
              <p className="mb-6">¿Estás seguro de eliminar este rol?</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors" onClick={() => handleDelete(editData.RoleId)}>
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
                {roles.length > 0 ? (
                  roles.map((rol) => (
                    <tr key={rol.RoleId} className="hover:bg-slate-50 transition-colors duration-150">
                      <td className="py-4 px-6 text-sm text-slate-900">{String(rol.RoleId).slice(0, 8)}</td>
                      <td className="py-4 px-6 text-sm text-slate-900">{rol.Nombre}</td>
                      <td className="flex justify-center py-4 px-6 text-sm text-slate-900">
                        <Toggle
                          checked={rol.Estado === "Activo"}
                          onChange={(value) => handleToggleEstado(rol.RoleId, value ? "Activo" : "Inactivo")}
                        />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center gap-2">
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No se encontraron roles
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
