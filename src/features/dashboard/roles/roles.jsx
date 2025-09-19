import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import Modal from "../components/modals/modal";

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
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          isOn ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export const Roles = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const roles = [
    { id: 1, nombre: "Administrador", usuarios: 1, estado: true },
    { id: 2, nombre: "Soporte", usuarios: 2, estado: false },
    { id: 3, nombre: "Empleado", usuarios: 3, estado: true },
  ];

  const renderForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel =
      type === "create" ? "Crear" : type === "editar" ? "Guardar" : "Cerrar";

    return (
      <form className="grid grid-cols-1 gap-6 text-left">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Nombre del Rol
          </label>
          <input
            type="text"
            placeholder="Ej: Administrador"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Usuarios asignados
          </label>
          <input
            type="number"
            placeholder="0"
            readOnly
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC]"
          />
        </div>

        <div className="col-span-1 flex gap-4 mt-4">
          {type !== "ver" && (
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
              {buttonLabel}
            </button>
          )}
          <button
            type="button"
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => {
              if (type === "create") setOpenCreate(false);
              else if (type === "editar") setOpenEditar(false);
              else setOpenVer(false);
            }}
          >
            {type === "ver" ? "Cerrar" : "Cancelar"}
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
              <Link
                onClick={() => setOpenCreate(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald"
              >
                <Plus size={18} /> Nuevo rol
              </Link>

              <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[140px]">
                <option value="">Filtrar por campo</option>
                <option value="id">ID</option>
                <option value="nombre">Nombre</option>
              </select>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar roles"
                  className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                />
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
                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Eliminar
                </button>
                <button
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  onClick={() => setOpenEliminar(false)}
                >
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
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Usuarios
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roles.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-4 px-6 text-sm text-slate-900">
                      {String(r.id).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-900">{r.nombre}</td>
                    <td className="py-4 px-6 text-sm text-slate-900">{r.usuarios}</td>
                    <td className="py-4 px-6 text-sm text-slate-900">
                      <Toggle checked={r.estado} onChange={(v) => console.log("Estado cambiado:", v)} />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link onClick={() => setOpenEditar(true)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit size={16} />
                        </Link>
                        <Link onClick={() => setOpenVer(true)} className="p-2 text-green-600 hover:bg-emerald-50 rounded-lg">
                          <Eye size={16} />
                        </Link>
                        <Link onClick={() => setOpenEliminar(true)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
