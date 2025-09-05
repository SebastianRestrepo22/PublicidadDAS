import React from "react";
import { Link } from "react-router-dom";

export const ProductoServicios = () => {
    return (
        <>
            <div>
                <div className="flex m-10">
                    <div className="m-5">
                        <Link className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            Nuevo Producto/servicio
                        </Link>
                    </div>

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">ID</option>
                            <option value="Nombre del Insumo">Tipo</option>
                            <option value="Stock">Nombre</option>
                            <option value="Stock">Descripción</option>
                            <option value="Stock">URL imagen</option>
                            <option value="Stock">Descuento</option>
                            <option value="Stock">Stock</option>
                            <option value="Stock">EsPersonalizado</option>
                            <option value="Stock">CatgoriaId</option>
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
                                <th className="py-3 px-6 text-left">Tipo</th>
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">Descripción</th>
                                <th className="py-3 px-6 text-left">URL imagen</th>
                                <th className="py-3 px-6 text-left">Precio</th>
                                <th className="py-3 px-6 text-left">Descuento</th>
                                <th className="py-3 px-6 text-left">Stock</th>
                                <th className="py-3 px-6 text-left">EsPersonalizado</th>
                                <th className="py-3 px-6 text-left">CatgoriaId</th>
                                <th className="py-3 px-6 text-left w-15">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">Producto</td>
                                <td className="py-3 px-6">Tarjetas de presentación</td>
                                <td className="py-3 px-6">Impresión a color en papel couché 300gr, plastificado mate.</td>
                                <td className="py-3 px-6">/public/multimedia/tarjetas.png</td>
                                <td className="py-3 px-6">$50.00</td>
                                <td className="py-3 px-6">10%</td>
                                <td className="py-3 px-6">200</td>
                                <td className="py-3 px-6">Sí</td>
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6 w-40">
                                    <div className="w-full flex justify-center items-center gap-3">
                                        <Link><img src="/public/multimedia/edit.png" alt="Editar" /></Link>
                                        <Link><img src="/public/multimedia/ver.png" alt="Ver" /></Link>
                                        <Link><img src="/public/multimedia/delete.png" alt="Eliminar" /></Link>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">2</td>
                                <td className="py-3 px-6">Servicio</td>
                                <td className="py-3 px-6">Impresión offset</td>
                                <td className="py-3 px-6">Servicio de impresión offset en tirajes medianos y grandes.</td>
                                <td className="py-3 px-6">/public/multimedia/offset.png</td>
                                <td className="py-3 px-6">$120.00</td>
                                <td className="py-3 px-6">0%</td>
                                <td className="py-3 px-6">N/A</td>
                                <td className="py-3 px-6">No</td>
                                <td className="py-3 px-6">2</td>
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
                                <td className="py-3 px-6">Producto</td>
                                <td className="py-3 px-6">Afiches publicitarios</td>
                                <td className="py-3 px-6">Afiches tamaño A3 impresos en papel couché brillante.</td>
                                <td className="py-3 px-6">/public/multimedia/afiches.png</td>
                                <td className="py-3 px-6">$35.00</td>
                                <td className="py-3 px-6">5%</td>
                                <td className="py-3 px-6">100</td>
                                <td className="py-3 px-6">Sí</td>
                                <td className="py-3 px-6">3</td>
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
                                <td className="py-3 px-6">Servicio</td>
                                <td className="py-3 px-6">Diseño gráfico</td>
                                <td className="py-3 px-6">Servicio de diseño para logotipos, flyers, tarjetas y catálogos.</td>
                                <td className="py-3 px-6">/public/multimedia/diseno.png</td>
                                <td className="py-3 px-6">$80.00</td>
                                <td className="py-3 px-6">0%</td>
                                <td className="py-3 px-6">N/A</td>
                                <td className="py-3 px-6">Sí</td>
                                <td className="py-3 px-6">4</td>
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
                                <td className="py-3 px-6">Producto</td>
                                <td className="py-3 px-6">Catálogos</td>
                                <td className="py-3 px-6">Catálogos corporativos a color, grapados o empastados.</td>
                                <td className="py-3 px-6">/public/multimedia/catalogos.png</td>
                                <td className="py-3 px-6">$150.00</td>
                                <td className="py-3 px-6">15%</td>
                                <td className="py-3 px-6">50</td>
                                <td className="py-3 px-6">Sí</td>
                                <td className="py-3 px-6">5</td>
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