import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import Modal from "../components/modals/Modal";

export const Pedidos = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const usuarios = [
    {
      id: 1,
      cedula: "12345678",
      nombre: "Juan Pérez",
      direccion: "Calle 1 carrera 10",
      correo: "juan@mail.com",
      telefono: "123456789",
      rol: "Admin",
    },
    {
      id: 2,
      cedula: "87654321",
      nombre: "María Gómez",
      direccion: "Calle 2",
      correo: "maria@mail.com",
      telefono: "987654321",
      rol: "Usuario",
    },
  ];

  const renderModalForm = (type = "create") => {
    const isReadOnly = type === "ver";
    const buttonLabel =
      type === "create" ? "Crear" : type === "editar" ? "Editar" : "Cerrar";

    return (
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="flex flex-col">
          <label>Cédula</label>
          <input
            type="text"
            placeholder="Ingrese su cédula"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Dirección</label>
          <input
            type="text"
            placeholder="Ingrese su dirección"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Teléfono</label>
          <input
            type="text"
            placeholder="Ingrese su teléfono"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Rol</label>
          <input
            type="text"
            placeholder="Rol"
            readOnly={isReadOnly}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex gap-4 mt-4">
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
              if (type === "editar") setOpenEditar(false);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Gestión de pedidos
          </h1>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 ">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                onClick={() => setOpenCreate(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald"
              >
                <Plus size={18} /> Nuevo pedido
              </Link>

              <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[140px]">
                <option value="">Filtrar por campo</option>
                <option value="id">ID</option>
                <option value="cedula">Cédula</option>
                <option value="nombre">Nombre</option>
              </select>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar usuarios"
                  className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                />
              </div>
            </div>
          </div>

          <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Nuevo pedido
              </h3>
              {renderModalForm("create")}
            </div>
          </Modal>

          <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Editar pedido
              </h3>
              {renderModalForm("editar")}
            </div>
          </Modal>

          <Modal open={openVer} onClose={() => setOpenVer(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Ver pedido
              </h3>
              {renderModalForm("ver")}
            </div>
          </Modal>

          <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
            <div className="w-[400px] p-6 mx-auto text-center ">
              <h3 className="text-lg font-black text-gray-800 mb-4">
                Eliminar pedido
              </h3>
              <p className="mb-6">¿Estás seguro de eliminar este pedido?</p>
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

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Cédula
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Nombre Completo
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Dirección
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Correo Electrónico
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {usuarios.map((u) => (
                  <tr
                    key={u.id}
                    className="hover:bg-slate-50 transition-colors duration-150 "
                  >
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.cedula}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.nombre}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.direccion}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.correo}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.telefono}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {u.rol}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link
                          onClick={() => setOpenEditar(true)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                        >
                          <Edit size={16} />
                        </Link>
                        <Link
                          onClick={() => setOpenVer(true)}
                          className="p-2 text-blue-600 hover:bg-emerald-50 rounded-lg transition-colors duration-150"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          onClick={() => setOpenEliminar(true)}
                          className="p-2 text-blue-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
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
    </div>
  );
};
