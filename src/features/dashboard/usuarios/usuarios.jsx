import React from "react";
import { Outlet } from "react-router-dom";

export const Usuarios = () => {
    return (
        <>
        <Outlet/>
            <div class="overflow-x-auto">
                <table class="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead class="bg-black text-white">
                        <tr>
                            <th class="py-3 px-6 text-left">Nombre</th>
                            <th class="py-3 px-6 text-left">Edad</th>
                            <th class="py-3 px-6 text-left">Ciudad</th>
                            <th class="py-3 px-6 text-left">Acción</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-100 transition-colors">
                            <td class="py-3 px-6">Juan Pérez</td>
                            <td class="py-3 px-6">28</td>
                            <td class="py-3 px-6">Madrid</td>
                            <td class="py-3 px-6">
                                <button class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors">Editar</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-100 transition-colors">
                            <td class="py-3 px-6">Ana Gómez</td>
                            <td class="py-3 px-6">34</td>
                            <td class="py-3 px-6">Barcelona</td>
                            <td class="py-3 px-6">
                                <button class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}