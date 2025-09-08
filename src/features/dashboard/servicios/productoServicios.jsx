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
    { id: 1, tipo: "producto", nombre: "Tintas", descripcion: "Tinta negra para impresora", url: "https://example.com/tintas.jpg", precio: 10, descuento: 0, stock: 50, esPersonalizado: false, categoriaId: 1 },
    { id: 2, tipo: "producto", nombre: "Papel Couché", descripcion: "Papel de alta calidad", url: "https://example.com/papel.jpg", precio: 5, descuento: 0, stock: 200, esPersonalizado: false, categoriaId: 2 },
    { id: 3, tipo: "producto", nombre: "Barniz UV", descripcion: "Barniz protector", url: "https://example.com/barniz.jpg", precio: 15, descuento: 0, stock: 75, esPersonalizado: false, categoriaId: 3 },
  ];

  const formFields = [
    { label: "ID", type: "text", key: "id" },
    { label: "Tipo", type: "text", key: "tipo" },
    { label: "Nombre", type: "text", key: "nombre" },
    { label: "Descripción", type: "text", key: "descripcion" },
    { label: "URL imagen", type: "text", key: "url" },
    { label: "Precio", type: "number", key: "precio" },
    { label: "Descuento", type: "number", key: "descuento" },
    { label: "Stock", type: "number", key: "stock" },
    { label: "EsPersonalizado", type: "checkbox", key: "esPersonalizado" },
    { label: "CategoriaId", type: "number", key: "categoriaId" },
  ];

  const renderFormFields = (values = {}) =>
    formFields.map((f, idx) => (
      <div key={idx} className="flex flex-col text-left">
        <label className="mb-1 font-medium">{f.label}</label>
        {f.type === "checkbox" ? (
          <input type="checkbox" className="w-5 h-5 border-gray-300 focus:ring-2 focus:ring-blue-500" defaultChecked={values[f.key] || false} />
        ) : (
          <input
            type={f.type}
            defaultValue={values[f.key] || ""}
            className="w-full h-10 px-3 border border-gray-300 rounded bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>
    ));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Gestión de productos/servicios</h1>

          {/* Barra de acciones */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              onClick={() => setOpenCreate(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <Plus size={18} /> Nuevo producto/servicio
            </Link>
            <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[140px]">
              <option value="">Filtrar por campo</option>
              {formFields.map((f, idx) => (
                <option key={idx} value={f.key}>{f.label}</option>
              ))}
            </select>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar producto/servicio"
                className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
              />
            </div>
          </div>

          {/* Modal Crear */}
          <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
            <div className="max-w-xl w-full p-6 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
              <h3 className="text-lg font-black text-gray-800 mb-6 text-center">Nuevo producto/servicio</h3>
              <form className="flex flex-col gap-4">
                {renderFormFields()}
                <div className="flex gap-4 mt-4">
                  <button type="submit" className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">Crear</button>
                  <button type="button" className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpenCreate(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </Modal>

          {/* Modal Editar */}
          <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
            <div className="max-w-xl w-full p-6 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
              <h3 className="text-lg font-black text-gray-800 mb-6 text-center">Editar producto/servicio</h3>
              <form className="flex flex-col gap-4">
                {renderFormFields(productos[0])}
                <div className="flex gap-4 mt-4">
                  <button type="submit" className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">Editar</button>
                  <button type="button" className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpenEditar(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </Modal>

          {/* Modal Ver */}
          <Modal open={openVer} onClose={() => setOpenVer(false)}>
            <div className="max-w-xl w-full p-6 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
              <h3 className="text-lg font-black text-gray-800 mb-6 text-center">Ver producto/servicio</h3>
              <form className="flex flex-col gap-4">
                {renderFormFields(productos[0]).map((field, idx) =>
                  React.cloneElement(field, { children: field.props.children, key: idx, children: field.props.children, readOnly: true })
                )}
                <div className="flex gap-4 mt-4">
                  <button type="button" className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpenVer(false)}>Cerrar</button>
                </div>
              </form>
            </div>
          </Modal>

          {/* Modal Eliminar */}
          <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
            <div className="max-w-md w-full p-6 mx-auto bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-black text-gray-800 mb-4 text-center">Eliminar producto/servicio</h3>
              <p className="mb-6 text-center">¿Está seguro de eliminar este producto/servicio?</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">Eliminar</button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpenEliminar(false)}>Cancelar</button>
              </div>
            </div>
          </Modal>

          {/* Tabla */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  {formFields.map((f, idx) => (
                    <th key={idx} className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">{f.label}</th>
                  ))}
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {productos.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors duration-150">
                    {formFields.map((f, idx) => (
                      <td key={idx} className="py-4 px-6 text-sm font-medium text-slate-900">
                        {f.type === "checkbox" ? (p[f.key] ? "Sí" : "No") : p[f.key]}
                      </td>
                    ))}
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
    </>
  );
};
