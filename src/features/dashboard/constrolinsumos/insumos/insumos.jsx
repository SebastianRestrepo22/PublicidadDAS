import React from "react";
import { Link } from "react-router-dom";

export const Insumos = () => {
    return (
        <>
            <div>
                <div className="flex m-10">
                    <div className="m-5">
                        <Link className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            Nuevo insumo
                        </Link>
                    </div>

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">ID</option>
                            <option value="Nombre del Insumo">Nombre del insumo</option>
                            <option value="Stock">Stock</option>
                        </select>

                    </div>

                    <div className="relative m-3">
                        <img src="/public/multimedia/lupa.png" alt="Buscar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>

                        <input type="text" placeholder="Buscar" className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                {/* tabla */}
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead class="bg-black text-white">
                            <tr>
                                <th class="py-3 px-6 text-left">ID</th>
                                <th class="py-3 px-6 text-left">Nombre del insumo</th>
                                <th class="py-3 px-6 text-left">Stock</th>
                                <th class="py-3 px-6 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">1</td>
                                <td class="py-3 px-6">Tintas</td>
                                <td class="py-3 px-6">50</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link>
                                        <img src="/public/multimedia/edit.png" alt="" />
                                    </Link>
                                    <Link>
                                        <img src="/public/multimedia/ver.png" alt="" />
                                    </Link>
                                    <Link>
                                        <img src="/public/multimedia/delete.png" alt="" />
                                    </Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">2</td>
                                <td class="py-3 px-6">Papel Couché</td>
                                <td class="py-3 px-6">200</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">3</td>
                                <td class="py-3 px-6">Barniz UV</td>
                                <td class="py-3 px-6">75</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">4</td>
                                <td class="py-3 px-6">Planchas de aluminio</td>
                                <td class="py-3 px-6">30</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">5</td>
                                <td class="py-3 px-6">Cauchos offset</td>
                                <td class="py-3 px-6">40</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-100 transition-colors">
                                <td class="py-3 px-6">6</td>
                                <td class="py-3 px-6">Pegamento en spray</td>
                                <td class="py-3 px-6">60</td>
                                <td class="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}