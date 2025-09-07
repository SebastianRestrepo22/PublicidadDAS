import { Link } from "react-router-dom"
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react"

export const CategoriaDeDiseño = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Categoria de Diseño</h1>
          </div>

          {/* Barra de acciones */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500
                  to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700
                  transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                <Plus size={18} />
                Nueva Categoria
              </Link>

              <select
                className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                  duration-200 min-w-[140px]"
              >
                <option value="">Filtrar por campo</option>
                <option value="">ID</option>
                <option value="">Nombre</option>
              </select>

              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Buscar categoria"
                  className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                    bg-white text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      ID
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Nombre de la categoria
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Descripción
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="py-4 px-6 text-sm font-medium text-slate-900">1</td>
                    <td className="py-4 px-6 text-sm text-slate-900">Gran formato</td>
                    <td className="py-4 px-6 text-sm text-slate-900">Vallas publicitarias</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150">
                          <Edit size={16} />
                        </Link>
                        <Link className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-150">
                          <Eye size={16} />
                        </Link>
                        <Link className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150">
                          <Trash2 size={16} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
