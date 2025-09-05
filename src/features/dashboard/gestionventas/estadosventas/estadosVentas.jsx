import React from "react";
import { Link } from "react-router-dom";

export const EstadosVentas = () => {
    return (
        <>
            <div>
                <div className="flex m-10">

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">ID</option>
                            <option value="Nombre del Insumo">Nombre del estado</option>
                        </select>

                    </div>

                    <div className="relative m-3">
                        <img src="/public/multimedia/lupa.png" alt="Buscar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                        <input type="text" placeholder="Buscar" className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                {/* tabla */}
                <div className="overflow-x-auto flex justify-center items-center">
                    <table className=" border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Nombre del estado</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">PENDIENTE</td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">2</td>
                                <td className="py-3 px-6">CONFIRMADA</td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">3</td>
                                <td className="py-3 px-6">EN PROCESO</td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">4</td>
                                <td className="py-3 px-6">ENVIADA</td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">5</td>
                                <td className="py-3 px-6">CANCELADA</td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">6</td>
                                <td className="py-3 px-6">RECHAZADA</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}