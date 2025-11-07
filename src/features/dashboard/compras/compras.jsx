import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Eye, Trash2, ChevronDown } from "lucide-react";
import Modal from "../components/modals/modal";

export const Compras = () => {
  // Estados de modales y filas expandidas
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);
  const [expandeRow, setExpandedRow] = useState(null);

  // Datos de ejemplo
  const compras = [
    {
      id: 1,
      cedula: "1001",
      fecha: "2025-09-01",
      total: 250,
      estado: "Activo",
      detalle: [
        {
          id: "P001",
          tipoDetalle: "Producto",
          insumo: 100,
          cantidad: "9 cm",
          unidadMedida: "5 cm",
          precioUnitario: "5 cm",
          subtotal: "5 cm",
          estado: "Activo",
        },
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedRow(expandeRow === id ? null : id);
  };

  const renderModalForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel =
      type === "create" ? "Crear" : type === "editar" ? "Editar" : "Cerrar";

    return (
      <form className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md">
        {/* Datos principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Compra ID</label>
            <input
              type="text"
              placeholder="1"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Proveedor ID</label>
            <input
              type="text"
              placeholder="1001"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Fecha y total */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Fecha de registro</label>
            <input
              type="date"
              readOnly={isReadOnly}
              defaultValue="2025-09-01"
              className="w-full h-10 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Total</label>
            <input
              type="text"
              placeholder="$250.00"
              readOnly={isReadOnly}
              className="w-full h-10 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Botón agregar item */}
        <div className="flex justify-end">
          <Link className="inline-flex h-10 items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
            <Plus size={15} /> Añadir item
          </Link>
        </div>

        {/* Campos detalle */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {[
            "id",
            "tipoDetalle",
            "insumo",
            "cantidad",
            "unidadMedida",
            "precioUnitario",
            "total",
            "estado",
          ].map((label, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="font-medium">{label}</label>
              <input
                type="text"
                placeholder={`Ingrese ${label.toLowerCase()}`}
                readOnly={isReadOnly}
                className="w-full h-10 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Botones del modal */}
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
          <h1 className="font-bold text-lg">Total: $30,000</h1>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Gestión de compras
        </h1>

        {/* Barra de acciones */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            onClick={() => setOpenCreate(true)}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <Plus size={18} /> Nueva compra
          </Link>

          <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px] transition-all duration-200">
            <option value="">Filtrar por campo</option>
            <option value="id">CompraID</option>
            <option value="cedula">ProveedorID</option>
            <option value="fecha">Fecha</option>
          </select>

          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar compra"
              className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700"
            />
            <img
              src="/public/multimedia/lupa.png"
              alt="Buscar"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
        </div>

        {/* Modales */}
        <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
          <div className="w-[750px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">
              Nueva compra
            </h3>
            {renderModalForm("create")}
          </div>
        </Modal>

        <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
          <div className="w-[750px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">
              Editar compra
            </h3>
            {renderModalForm("editar")}
          </div>
        </Modal>

        <Modal open={openVer} onClose={() => setOpenVer(false)}>
          <div className="w-[750px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-6">Ver compra</h3>
            {renderModalForm("ver")}
          </div>
        </Modal>

        <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
          <div className="w-[400px] p-6 mx-auto text-center">
            <h3 className="text-lg font-black text-gray-800 mb-4">
              Eliminar compra
            </h3>
            <p className="mb-6">¿Está seguro de eliminar esta compra?</p>
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

        {/* Tabla principal */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto overflow-y-auto max-h-[600px] w-full">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gradient-to-r from-slate-800 to-slate-700 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 w-10"></th>
                <th className="px-4 py-3 text-left text-white font-semibold">
                  Compra ID
                </th>
                <th className="px-4 py-3 text-left text-white font-semibold">
                  Proveedor ID
                </th>
                <th className="px-4 py-3 text-left text-white font-semibold">
                  Fecha Registro
                </th>
                <th className="px-4 py-3 text-center text-white font-semibold">
                  Total
                </th>
                <th className="px-4 py-3 text-center text-white font-semibold">
                  Estado
                </th>
                <th className="px-4 py-3 text-center text-white font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {compras.map((compra) => (
                <React.Fragment key={compra.id}>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-center">
                      <button onClick={() => toggleExpand(compra.id)}>
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform ${
                            expandeRow === compra.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </td>
                    <td className="py-4 px-6">{compra.id}</td>
                    <td className="py-4 px-6">{compra.cedula}</td>
                    <td className="py-4 px-6">{compra.fecha}</td>
                    <td className="py-4 px-6 text-center">
                      ${compra.total.toFixed(2)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          compra.estado === "Activo"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {compra.estado}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center gap-3">
                        <Link onClick={() => setOpenEditar(true)}>
                          <Edit
                            size={16}
                            className="text-blue-600 hover:text-blue-800"
                          />
                        </Link>
                        <Link onClick={() => setOpenVer(true)}>
                          <Eye
                            size={16}
                            className="text-emerald-600 hover:text-emerald-800"
                          />
                        </Link>
                        <Link onClick={() => setOpenEliminar(true)}>
                          <Trash2
                            size={16}
                            className="text-red-600 hover:text-red-800"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>

                  {/* Fila expandida */}
                  {expandeRow === compra.id && (
                    <tr className="bg-gray-50">
                      <td colSpan={7} className="py-3 px-6">
                        <div className="overflow-x-auto w-full">
                          <table className="min-w-full text-sm border border-gray-200">
                            <thead className="bg-gray-200">
                              <tr>
                                <th className="py-2 px-4">ID</th>
                                <th className="py-2 px-4">TipoDetalle</th>
                                <th className="py-2 px-4">Insumo</th>
                                <th className="py-2 px-4">Cantidad</th>
                                <th className="py-2 px-4">Unidadmedida</th>
                                <th className="py-2 px-4">PrecioUnitario</th>
                                <th className="py-2 px-4">Subtotal</th>
                                <th className="py-2 px-4">Estado</th>
                                <th className="py-2 px-4 text-center">
                                  Acciones
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {compra.detalle.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-100">
                                  <td className="py-2 px-4">{item.id}</td>
                                  <td className="py-2 px-4">{item.tipo}</td>
                                  <td className="py-2 px-4 truncate max-w-[200px]">
                                    {item.descripcion}
                                  </td>
                                  <td className="py-2 px-4">{item.ProductoServicio}</td>
                                  <td className="py-2 px-4">{item.insumo}</td>
                                  <td className="py-2 px-4">{item.cantidad}</td>
                                  <td className="py-2 px-4">{item.descripcion}</td>
                                  <td className="py-2 px-4 text-center">
                                    <div className="flex justify-center gap-2">
                                      <Link onClick={() => setOpenEditar(true)}>
                                        <Edit
                                          size={14}
                                          className="text-blue-600 hover:text-blue-800"
                                        />
                                      </Link>
                                      <Link onClick={() => setOpenVer(true)}>
                                        <Eye
                                          size={14}
                                          className="text-emerald-600 hover:text-emerald-800"
                                        />
                                      </Link>
                                      <Link
                                        onClick={() => setOpenEliminar(true)}
                                      >
                                        <Trash2
                                          size={14}
                                          className="text-red-600 hover:text-red-800"
                                        />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
