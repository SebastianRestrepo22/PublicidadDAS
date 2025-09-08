import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import Modal from "../../components/modals/modal";

export const Insumos = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const insumos = [
    { id: 1, nombre: "Tintas", stock: 50 },
    { id: 2, nombre: "Papel Couché", stock: 200 },
    { id: 3, nombre: "Barniz UV", stock: 75 },
    { id: 4, nombre: "Planchas de aluminio", stock: 30 },
    { id: 5, nombre: "Cauchos offset", stock: 40 },
    { id: 6, nombre: "Pegamento en spray", stock: 60 }
  ];

  const renderModalForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel = type === "create" ? "Crear" : type === "editar" ? "Editar" : "Cerrar";

    return (
      <form className="flex flex-col gap-4">
        <div className="flex flex-col text-left">
          <label>ID</label>
          <input
            type="text"
            placeholder="1"
            readOnly={isReadOnly}
            className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col text-left">
          <label>Nombre del insumo</label>
          <input
            type="text"
            placeholder="Tintas"
            readOnly={isReadOnly}
            className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col text-left">
          <label>Stock</label>
          <input
            type="number"
            placeholder="50"
            readOnly={isReadOnly}
            className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4 mt-4">
          {type !== "ver" && <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">{buttonLabel}</button>}
          <button
            type="button"
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors"
            onClick={() => {
              if (type === "create") setOpenCreate(false);
              else if (type === "editar") setOpenEditar(false);
              else if (type === "ver") setOpenVer(false);
            }}
          >
            {type === "ver" ? "Cerrar" : "Cancelar"}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Gestión de insumos</h1>
        </div>

        {/* Barra de acciones */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              onClick={() => setOpenCreate(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <Plus size={18} /> Nuevo insumo
            </Link>

            <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[140px]">
              <option value="">Filtrar por campo</option>
              <option value="id">ID</option>
              <option value="nombre">Nombre del insumo</option>
              <option value="stock">Stock</option>
            </select>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar insumo"
                className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Modales */}
        <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
          <div className="w-[400px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">Nuevo insumo</h3>
            {renderModalForm("create")}
          </div>
        </Modal>

        <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
          <div className="w-[400px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">Editar insumo</h3>
            {renderModalForm("editar")}
          </div>
        </Modal>

        <Modal open={openVer} onClose={() => setOpenVer(false)}>
          <div className="w-[400px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">Ver insumo</h3>
            {renderModalForm("ver")}
          </div>
        </Modal>

        <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
          <div className="w-[400px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-4">Eliminar insumo</h3>
            <p className="mb-6">¿Está seguro de eliminar este insumo?</p>
            <div className="flex gap-4">
              <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">Eliminar</button>
              <button
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setOpenEliminar(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>

        {/* Tabla */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">ID</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Nombre del insumo</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Stock</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {insumos.map((i) => (
                  <tr key={i.id} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">{i.id}</td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">{i.nombre}</td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">{i.stock}</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link onClick={() => setOpenEditar(true)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"><Edit size={16} /></Link>
                        <Link onClick={() => setOpenVer(true)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-150"><Eye size={16} /></Link>
                        <Link onClick={() => setOpenEliminar(true)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"><Trash2 size={16} /></Link>
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
