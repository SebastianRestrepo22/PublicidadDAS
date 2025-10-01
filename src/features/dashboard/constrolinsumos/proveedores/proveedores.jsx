import { Link } from "react-router-dom";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "../../components/modals/modal";
import axios from "axios";

export const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [estadoActivos, setEstadoActivo] = useState({});
  const [selectedProveedor, setSelectedProveedor] = useState(null);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openVer, setOpenVer] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);

  const [formCrear, setFormCrear] = useState({
    nombreProveedor: "",
    telefono: "",
    correo: "",
    direccion: "",
    estado: 1,
  });

  const [formEditar, setFormEditar] = useState({
    nombreProveedor: "",
    telefono: "",
    correo: "",
    direccion: "",
    estado: 1,
  });

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/proveedores");
      setProveedores(data);
      const estados = {};
      data.forEach((p) => (estados[p.ProveedorId] = p.Estado));
      setEstadoActivo(estados);
    } catch (err) {
      console.error("Error al cargar proveedores:", err);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:3000/api/proveedores", formCrear);
      setOpenCreate(false);
      setFormCrear({
        nombreProveedor: "",
        telefono: "",
        correo: "",
        direccion: "",
        estado: 1,
      });
      fetchProveedores();
    } catch (err) {
      console.log("Error al crear proveedor:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/proveedores/${selectedProveedor.ProveedorId}`,
        formEditar
      );
      setOpenEditar(false);
      fetchProveedores();
    } catch (err) {
      console.error("Error al actualizar proveedor:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/proveedores/${selectedProveedor.ProveedorId}`
      );
      setOpenEliminar(false);
      fetchProveedores();
    } catch (err) {
      console.error("Error al eliminar el proveedor:", err);
    }
  };

  const openEditarModal = (p) => {
    setSelectedProveedor(p);
    setFormEditar({
      nombreProveedor: p.NombreProveedor,
      telefono: p.Telefono,
      correo: p.Correo,
      direccion: p.Direccion,
      estado: p.Estado,
    });
    setOpenEditar(true);
  };

  const toggleEstado = async (idProveedor, estadoNuevo) => {
    try {
      await axios.put(`http://localhost:3000/api/proveedores/${idProveedor}`, {
        estado: estadoNuevo ? 1 : 0, 
      });

      setEstadoActivo((prev) => ({
        ...prev,
        [idProveedor]: estadoNuevo,
      }));
    } catch (error) {
      alert("Error al actualizar estado:", err)

      
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Gestión de proveedores
          </h1>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 ">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                onClick={() => setOpenCreate(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald"
              >
                <Plus size={18} /> Nuevo proveedor
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
                  placeholder="Buscar proveedor"
                  className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* tabla */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                <tr>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Nombre Empresa
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Telefono
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Correo Electrónico
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider">
                    Direccion
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
                {proveedores.map((p) => (
                  <tr
                    key={p.ProveedorId}
                    className="hover:bg-slate-50 transition-colors duration-150 "
                  >
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {p.ProveedorId}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {p.NombreProveedor}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {p.Telefono}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {p.Correo}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      {p.Direccion}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">
                      <label className="inline-flex items-center cursor-pointer select-none">
                        <div className="relative">
                          <input
                            id={`switch-${p.ProveedorId}`}
                            type="checkbox"
                            className="sr-only peer"
                            checked={Boolean(estadoActivos[p.ProveedorId])}
                            onChange={(e) => toggleEstado(p.ProveedorId, e.target.checked)}
                            aia-checked={Boolean(estadoActivos[p.ProveedorId])}
                          />
                          <div className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-green-500 transition-colors pointer-events-none"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-5 pointer-events-none"></div>
                        </div>
                        <span className="ml-3 text-sm text-slate-700 ">
                          {estadoActivos[p.ProveedorId]}
                        </span>
                      </label>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link
                          onClick={() => openEditarModal(p)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                        >
                          <Edit size={16} />
                        </Link>
                        <Link
                          onClick={() => {
                            setSelectedProveedor(p);
                            setOpenVer(true);
                          }}
                          className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-150"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          onClick={() => {
                            setSelectedProveedor(p);
                            setOpenEliminar(true);
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
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

          <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Nuevo proveedor
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex flex-col">
                  <label>Nombre</label>
                  <input
                  placeholder="Ingrese su nombre"
                  value={formCrear.nombreProveedor}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormCrear({ ...formCrear, nombreProveedor: e.target.value })
                  }   
                />
                </div>
                <div className="flex flex-col">
                  <label>Telefono</label>
                  <input
                  placeholder="Ingrese su telefono"
                  value={formCrear.telefono}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormCrear({ ...formCrear, telefono: e.target.value })
                  }
                />
                </div>
                <div className="flex flex-col">
                  <label>Correo</label>
                  <input
                  placeholder="Ingrese su correo"
                  value={formCrear.correo}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormCrear({ ...formCrear, correo: e.target.value })
                  }
                />
                </div>
                <div className="flex flex-col">
                  <label>Direccion</label>
                  <input
                  placeholder="Ingrese su direccion"
                  value={formCrear.direccion}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormCrear({ ...formCrear, direccion: e.target.value })
                  }
                />
                </div>
                <div className="col-span-2 flex gap-4 mt-4">
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Crear
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenCreate(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </Modal>

          <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Editar proveedor
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex flex-col">
                  <label>Nombre</label>
                  <input
                  placeholder="Ingrese su nombre"
                  value={formEditar.nombreProveedor}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormEditar({ ...formEditar, nombreProveedor: e.target.value })
                  }
                />
                </div>
                <div className="flex flex-col">
                  <label>Telefono</label>
                  <input
                  placeholder="Ingrese su telefono"
                  value={formEditar.telefono}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormEditar({ ...formEditar, telefono: e.target.value })
                  }
                />
                </div>
                <div className="flex flex-col">
                  <label>Correo</label>
                  <input
                  placeholder="Ingrese su correo"
                  value={formEditar.correo}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormEditar({ ...formEditar, correo: e.target.value })
                  }
                />
                </div>
                <div className="flex flex-col">
                  <label>Direccion</label>
                  <input
                  placeholder="Ingrese su direccion"
                  value={formEditar.direccion}
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg bg-[#EEECEC focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormEditar({ ...formEditar, direccion: e.target.value })
                  }
                />
                </div>
                <div className="col-span-2 flex gap-4 mt-4">
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Guardar cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenEditar(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </Modal>

          <Modal open={openVer} onClose={() => setOpenVer(false)}>
            <div className="w-[450px] p-6 mx-auto text-center">
              <h3 className="text-lg font-black text-gray-800 mb-6">
                Ver proveedor
              </h3>
              {selectedProveedor && (
                <div className="text-left space-y-2">
                  <p>ID: {selectedProveedor.ProveedorId}</p>
                  <p>Nombre: {selectedProveedor.NombreProveedor}</p>
                  <p>Telefono: {selectedProveedor.Telefono}</p>
                  <p>Correo: {selectedProveedor.Correo}</p>
                  <p>Direccion: {selectedProveedor.Direccion}</p>
                </div>
              )}
              <button
                onClick={() => setOpenVer(false)}
                className="mt-4 bg-gray-200 px-4 py-2 rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </Modal>

          <Modal open={openEliminar} onClose={() => setOpenEliminar(false)}>
            <div className="w-[400px] p-6 mx-auto text-center ">
              <h3 className="text-lg font-black text-gray-800 mb-4">
                Eliminar proveedor
              </h3>
              <p className="mb-6">¿Estás seguro de eliminar este proveedor?</p>
              <div className="flex gap-4">
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
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
        </div>
      </div>
    </div>
  );
};
