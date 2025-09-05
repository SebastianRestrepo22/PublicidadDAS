import React from "react";
import { Link } from "react-router-dom";

export const Ventas = () => {
    return (
        <>
            <div>
                <div className="flex m-10">
                    <div className="m-5">
                        <Link className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            Nueva venta
                        </Link>
                    </div>

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">VentaID</option>
                            <option value="Nombre del Insumo">Cedula ID</option>
                            <option value="Stock">Nombre</option>
                            <option value="Stock">Fecha de registro venta</option>
                            <option value="Stock">Metodo de pago</option>
                            <option value="Stock">Total</option>
                            <option value="Stock">Estado</option>
                        </select>
                    </div>

                    <div className="relative m-3">
                        <img src="/public/multimedia/lupa.png" alt="Buscar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                        <input type="text" placeholder="Buscar" className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                {/* tabla */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">VentaID</th>
                                <th className="py-3 px-6 text-left">Cedula ID</th>
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">Fecha de registro venta </th>
                                <th className="py-3 px-6 text-left">Metodo de pago</th>
                                <th className="py-3 px-6 text-center w-40">Total</th>
                                <th className="py-3 px-6 text-center w-40">Estado</th>
                                <th className="py-3 px-6 text-center w-40">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">1001</td>
                                <td className="py-3 px-6">Litografía Central</td>
                                <td className="py-3 px-6">2025-09-01</td>
                                <td className="py-3 px-6">Efectivo</td>
                                <td className="py-3 px-6 text-center">$250.00</td>
                                <td className="py-3 px-6 text-center">Activo</td>
                                <td className="py-3 px-6">
                                    <div className="flex justify-center items-center gap-3">
                                        <Link>
                                            <img src="/public/multimedia/delete.png" alt="Eliminar" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>

                            {/* Detalle de la Venta */}
                            <tr className="bg-gray-50">
                                <td colSpan="8" className="py-3 px-6">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-200">
                                                <tr>
                                                    <th className="py-2 px-4 text-left">VentaID</th>
                                                    <th className="py-2 px-4 text-left">ProductoServicio ID</th>
                                                    <th className="py-2 px-4 text-left">Nombre Producto/Servicios</th>
                                                    <th className="py-2 px-4 text-left">Tipo</th>
                                                    <th className="py-2 px-4 text-left">Descripción</th>
                                                    <th className="py-2 px-4 text-left">Cantidad</th>
                                                    <th className="py-2 px-4 text-left">Alto</th>
                                                    <th className="py-2 px-4 text-left">Ancho</th>
                                                    <th className="py-2 px-4 text-left">Descuento</th>
                                                    <th className="py-2 px-4 text-left">URL imagen</th>
                                                    <th className="py-2 px-4 text-left">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-100">
                                                    <td className="py-2 px-4">1</td>
                                                    <td className="py-2 px-4">P001</td>
                                                    <td className="py-2 px-4">Tarjetas de presentación</td>
                                                    <td className="py-2 px-4">Producto</td>
                                                    <td className="py-2 px-4">Impresas full color</td>
                                                    <td className="py-2 px-4">100</td>
                                                    <td className="py-2 px-4">9 cm</td>
                                                    <td className="py-2 px-4">5 cm</td>
                                                    <td className="py-2 px-4">0%</td>
                                                    <td className="py-2 px-4">/public/img/tarjetas.png</td>
                                                    <td className="py-3 px-6">
                                                        <div className="w-full flex justify-center items-center gap-3">
                                                            <Link>
                                                                <img src="/public/multimedia/edit.png" alt="Editar" />
                                                            </Link>
                                                            <Link>
                                                                <img src="/public/multimedia/ver.png" alt="Ver" />
                                                            </Link>
                                                            <Link>
                                                                <img src="/public/multimedia/delete.png" alt="Eliminar" />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100">
                                                    <td className="py-2 px-4">1</td>
                                                    <td className="py-2 px-4">P002</td>
                                                    <td className="py-2 px-4">Afiches A3</td>
                                                    <td className="py-2 px-4">Producto</td>
                                                    <td className="py-2 px-4">Papel couché brillante</td>
                                                    <td className="py-2 px-4">50</td>
                                                    <td className="py-2 px-4">42 cm</td>
                                                    <td className="py-2 px-4">29.7 cm</td>
                                                    <td className="py-2 px-4">5%</td>
                                                    <td className="py-2 px-4">/public/img/afiche.png</td>
                                                    <td className="py-3 px-6">
                                                        <div className="w-full flex justify-center items-center gap-3">
                                                            <Link>
                                                                <img src="/public/multimedia/edit.png" alt="Editar" />
                                                            </Link>
                                                            <Link>
                                                                <img src="/public/multimedia/ver.png" alt="Ver" />
                                                            </Link>
                                                            <Link>
                                                                <img src="/public/multimedia/delete.png" alt="Eliminar" />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}