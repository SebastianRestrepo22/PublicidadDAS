import React from "react";

export const EstadosVentas = () => {
  const estados = [
    { id: 1, nombre: "PENDIENTE" },
    { id: 2, nombre: "CONFIRMADA" },
    { id: 3, nombre: "EN PROCESO" },
    { id: 4, nombre: "ENVIADA" },
    { id: 5, nombre: "CANCELADA" },
    { id: 6, nombre: "RECHAZADA" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Estados de ventas</h1>

        {/* Barra de búsqueda */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <select className="border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[180px]">
            <option value="">Filtrar por campo</option>
            <option value="id">ID</option>
            <option value="nombre">Nombre del estado</option>
          </select>

          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar estado"
              className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
            />
            <img
              src="/public/multimedia/lupa.png"
              alt="Buscar"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">ID</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Nombre del estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {estados.map((estado) => (
                <tr key={estado.id} className="hover:bg-slate-50 transition-colors duration-150">
                  <td className="py-4 px-6 text-sm font-medium text-slate-900">{estado.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-900">{estado.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
