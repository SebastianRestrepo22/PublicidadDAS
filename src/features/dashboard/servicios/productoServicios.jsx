import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import Modal from "../components/modals/modal";

export const ProductoServicios = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const productos = [
    { id: 1, tipo: "producto", nombre: "Tintas", descripcion: "Tinta negra para impresora", url: "img", precio: 10, descuento: 0, stock: 50, esPersonalizado: false, categoriaId: 1 },
    { id: 2, tipo: "producto", nombre: "Papel Couché", descripcion: "Papel de alta calidad", url: "img", precio: 5, descuento: 0, stock: 200, esPersonalizado: false, categoriaId: 2 },
    { id: 3, tipo: "producto", nombre: "Barniz UV", descripcion: "Barniz protector", url: "img", precio: 15, descuento: 0, stock: 75, esPersonalizado: false, categoriaId: 3 },
  ];

  // NUEVA FUNCIÓN PARA RENDERIZAR EL FORM
  const renderModalForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel =
      type === "create" ? "Crear" : type === "editar" ? "Editar" : "Cerrar";

    return (
      <form className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">ID</label>
            <input
              type="text"
              placeholder="Ingrese el ID"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Tipo</label>
            <input
              type="text"
              placeholder="producto o servicio"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Nombre</label>
            <input
              type="text"
              placeholder="Ingrese el nombre"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Descripción</label>
            <input
              type="text"
              placeholder="Ingrese la descripción"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Precio</label>
            <input
              type="number"
              placeholder="Ingrese el precio"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Descuento</label>
            <input
              type="number"
              placeholder="0"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Stock</label>
            <input
              type="number"
              placeholder="Cantidad"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Es personalizado</label>
            <input
              type="checkbox"
              readOnly={isReadOnly}
              className="w-5 h-5 border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Categoría ID</label>
            <input
              type="number"
              placeholder="Ingrese la categoría"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
          {type !== "ver" && (
            <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
              {buttonLabel}
            </button>
          )}
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
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Gestión de productos/servicios
        </h1>

        {/* Barra de acciones */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            onClick={() => setOpenCreate(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <Plus size={18} /> Nuevo producto/servicio
          </Link>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar producto/servicio"
              className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
            />
          </div>
        </div>

        {/* MODALES */}
        <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
          {renderModalForm("create")}
        </Modal>

        <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
          {renderModalForm("editar")}
        </Modal>

        <Modal open={openVer} onClose={() => setOpenVer(false)}>
          {renderModalForm("ver")}
        </Modal>

        <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
          <div className="max-w-md w-full p-6 mx-auto bg-white rounded-xl shadow-lg">
            <h3 className="text-lg font-black text-gray-800 mb-4 text-center">
              Eliminar producto/servicio
            </h3>
            <p className="mb-6 text-center">
              ¿Está seguro de eliminar este producto/servicio?
            </p>
            <div className="flex gap-4">
              <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
                Eliminar
              </button>
              <button
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setOpenEliminar(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>

        {/* TABLA */}
        <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  ID
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Tipo
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Nombre
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Descripción
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  URL
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Precio
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Descuento
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Stock
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Personalizado
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Categoría
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {productos.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-slate-50 transition-colors duration-150"
                >
                  <td className="py-4 px-6 text-sm">{p.id}</td>
                  <td className="py-4 px-6 text-sm">{p.tipo}</td>
                  <td className="py-4 px-6 text-sm">{p.nombre}</td>
                  <td className="py-4 px-6 text-sm">{p.descripcion}</td>
                  <td className="py-4 px-6 text-sm">{p.url}</td>
                  <td className="py-4 px-6 text-sm">{p.precio}</td>
                  <td className="py-4 px-6 text-sm">{p.descuento}</td>
                  <td className="py-4 px-6 text-sm">{p.stock}</td>
                  <td className="py-4 px-6 text-sm">
                    {p.esPersonalizado ? "Sí" : "No"}
                  </td>
                  <td className="py-4 px-6 text-sm">{p.categoriaId}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <Link
                        onClick={() => setOpenEditar(true)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit size={16} />
                      </Link>
                      <Link
                        onClick={() => setOpenVer(true)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <Eye size={16} />
                      </Link>
                      <Link
                        onClick={() => setOpenEliminar(true)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
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
  );
};
