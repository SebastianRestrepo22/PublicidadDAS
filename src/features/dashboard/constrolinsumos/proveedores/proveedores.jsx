import React from "react";
import { Link } from "react-router-dom";

export const Proveedores = () => {
    return (
        <>
            <div>
                <div className="flex m-10">
                    <div className="m-5">
                        <Link className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            Nuevo proveedor
                        </Link>
                    </div>

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">Nombre</option>
                            <option value="Nombre del Insumo">Teléfono</option>
                            <option value="Stock">Correo</option>
                            <option value="Stock">Dirección</option>
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
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">Teléfono</th>
                                <th className="py-3 px-6 text-left">Correo</th>
                                <th className="py-3 px-6 text-left">Dirección</th>
                                <th className="py-3 px-6 text-left">Estado</th>
                                <th className="py-3 px-6 text-center w-40">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">Litografía Central</td>
                                <td className="py-3 px-6">555-1234</td>
                                <td className="py-3 px-6">contacto@litocentral.com</td>
                                <td className="py-3 px-6">Av. Siempre Viva 123</td>
                                <td className="py-3 px-6">Activo</td>
                                <td className="py-3 px-6">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">2</td>
                                <td className="py-3 px-6">Gráficas del Norte</td>
                                <td className="py-3 px-6">555-5678</td>
                                <td className="py-3 px-6">ventas@graficasnorte.com</td>
                                <td className="py-3 px-6">Calle Luna 45</td>
                                <td className="py-3 px-6">Activo</td>
                                <td className="py-3 px-6">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">3</td>
                                <td className="py-3 px-6">Publicidad Express</td>
                                <td className="py-3 px-6">555-8765</td>
                                <td className="py-3 px-6">info@publicidadexpress.com</td>
                                <td className="py-3 px-6">Carrera 7 #12-34</td>
                                <td className="py-3 px-6">Inactivo</td>
                                <td className="py-3 px-6">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">4</td>
                                <td className="py-3 px-6">ColorPrint</td>
                                <td className="py-3 px-6">555-3344</td>
                                <td className="py-3 px-6">soporte@colorprint.com</td>
                                <td className="py-3 px-6">Zona Industrial Bodega 10</td>
                                <td className="py-3 px-6">Activo</td>
                                <td className="py-3 px-6">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">5</td>
                                <td className="py-3 px-6">Diseños Creativos</td>
                                <td className="py-3 px-6">555-4455</td>
                                <td className="py-3 px-6">hola@disenoscreativos.com</td>
                                <td className="py-3 px-6">Calle Arte #89</td>
                                <td className="py-3 px-6">Activo</td>
                                <td className="py-3 px-6">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
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