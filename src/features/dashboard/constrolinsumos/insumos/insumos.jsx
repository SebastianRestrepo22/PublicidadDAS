import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalInsumoCreate from "./modals/modalInsumoCreate";

export const Insumos = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <div className="flex m-10">
                    <div className="m-5">
                        <Link onClick={() => setOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            Nuevo insumo
                        </Link>
                    </div>

                    <ModalInsumoCreate open={open} onClose={() => setOpen(false)}>
                        <div className="text-center" style={{ width: "300px", height: "340px" }}>
                            <div className="mx-auto my-4 w-48">
                                <h3 className="text-lg font-black text-gray-800">Nuevo insumo</h3>
                                <div>
                                    <form action="" className="flex flex-col gap-4">
                                        <div className="flex flex-col text-left">
                                            <label  htmlFor="">ID</label>
                                            <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
                                        </div>

                                        <div>
                                            <label className="flex flex-col text-left" htmlFor="">Nombre del insumo</label>
                                            <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
                                        </div>

                                        <div>
                                            <label className="flex flex-col text-left" htmlFor="">Stock</label>
                                            <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  type="number" />
                                        </div>

                                        <div className="flex gap-4">
                                            <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Crear</button>
                                            <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors" onClick={() => setOpen(false)}>Cancelar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </ModalInsumoCreate>

                    <div className="m-3">
                        <select className="border border-gray-300 rounded-lg px-3 py-2">
                            <option value="">Campo</option>
                            <option value="id">ID</option>
                            <option value="Nombre del Insumo">Nombre del insumo</option>
                            <option value="Stock">Stock</option>
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
                                <th className="py-3 px-6 text-left">Nombre del insumo</th>
                                <th className="py-3 px-6 text-left">Stock</th>
                                <th className="py-3 px-6 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">Tintas</td>
                                <td className="py-3 px-6">50</td>
                                <td className="py-3 px-6 flex gap-3">
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

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">2</td>
                                <td className="py-3 px-6">Papel Couché</td>
                                <td className="py-3 px-6">200</td>
                                <td className="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">3</td>
                                <td className="py-3 px-6">Barniz UV</td>
                                <td className="py-3 px-6">75</td>
                                <td className="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">4</td>
                                <td className="py-3 px-6">Planchas de aluminio</td>
                                <td className="py-3 px-6">30</td>
                                <td className="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">5</td>
                                <td className="py-3 px-6">Cauchos offset</td>
                                <td className="py-3 px-6">40</td>
                                <td className="py-3 px-6 flex gap-3">
                                    <Link><img src="/public/multimedia/edit.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/ver.png" alt="" /></Link>
                                    <Link><img src="/public/multimedia/delete.png" alt="" /></Link>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-6">6</td>
                                <td className="py-3 px-6">Pegamento en spray</td>
                                <td className="py-3 px-6">60</td>
                                <td className="py-3 px-6 flex gap-3">
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