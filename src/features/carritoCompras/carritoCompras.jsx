import React from "react";
import { Navbar } from "../landing/components/Navbar";
import { Footer } from "../landing/components/footer";
import { Link } from "react-router-dom";

export const CarritoCompras = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="from-slate-50 to-blue-50 pt-6 sm:pt-12 m-4 sm:m-10 p-4 sm:p-10 flex-1">
                    <div className="pt-10">
                        <h1 className="font-bold text-lg sm:text-2xl">Todos los productos y servicios</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-10">
                        {/* Resumen del pedido */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg ring-1 ring-gray-200 h-fit">
                            <h1 className="font-bold text-base sm:text-lg mb-4 border-b pb-2">Resumen del pedido</h1>

                            {/* Precio */}
                            <div className="flex justify-between mb-4 text-sm sm:text-base">
                                <h3 className="font-bold">Precio aproximado:</h3>
                                <h3 className="text-green-700 font-semibold">$180.000</h3>
                            </div>

                            {/* Métodos de pago */}
                            <h3 className="font-bold mb-2 text-sm sm:text-base">Seleccione el método de pago:</h3>

                            {/* Opción Nequi */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-sm sm:text-base">Nequi</h3>
                                    <input type="radio" name="metodo-pago" className="w-4 h-4 accent-green-700" />
                                </div>
                                <div className="bg-gray-100 w-full sm:w-[200px] h-40 sm:h-[200px] mx-auto flex items-center justify-center rounded-lg border border-dashed">
                                    <span className="text-gray-500 text-sm sm:text-base">Código QR</span>
                                </div>
                            </div>

                            {/* Opción Efectivo */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-sm sm:text-base">Efectivo</h3>
                                <input type="radio" name="metodo-pago" className="w-4 h-4 accent-green-700" />
                            </div>

                            {/* Botón de compra */}
                            <div className="flex justify-center">
                                <Link to='/carritodecompras' className="bg-black text-white w-full py-3 rounded-xl hover:bg-gray-900 font-bold transition duration-300 text-center text-sm sm:text-base">
                                    Hacer compra
                                </Link>
                            </div>
                        </div>
                        {/* Cards con scroll */}
                        <div className="flex flex-col gap-6 overflow-y-auto pr-1 sm:pr-2 max-h-[70vh]">
                            {/*Card 1*/}
                            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl ring-1 ring-gray-200 transition duration-300">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-40 sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                                            src="https://assets.freelogoservices.com/sites/all/themes/freelogoservices/images/bcworkflow/bc_lp_grey_top_bkg.png"
                                            alt="Producto"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                            <b>Producto:</b> Papelería corporativa
                                        </h3>
                                        <h3 className="text-gray-700 mb-2 text-sm sm:text-base">
                                            <b>Precio:</b> $60.000
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <h3 className="text-gray-700 text-sm sm:text-base"><b>Cantidad:</b></h3>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">remove</button>
                                            <span className="text-gray-700 px-2">10</span>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">add</button>
                                        </div>

                                        <div className="flex flex-col justify-end mt-6 sm:mt-10">
                                            <Link to='/editarcarritoproducto' className="bg-green-700 text-white py-2 px-4 rounded-xl hover:bg-green-900 font-bold transition duration-300 text-center w-full sm:w-auto">
                                                Editar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Card 2*/}
                            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl ring-1 ring-gray-200 transition duration-300">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-40 sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                                            src="https://alsurestudio.es/wp-content/uploads/2024/01/papeleria-corporativa-alsurestudio-01.jpg"
                                            alt="Producto"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                            <b>Producto:</b> Tarjetas de presentación
                                        </h3>
                                        <h3 className="text-gray-700 mb-2 text-sm sm:text-base">
                                            <b>Precio:</b> $60.000
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <h3 className="text-gray-700 text-sm sm:text-base"><b>Cantidad:</b></h3>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">remove</button>
                                            <span className="text-gray-700 px-2">5</span>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">add</button>
                                        </div>

                                        <div className="flex flex-col justify-end mt-6 sm:mt-10">
                                            <Link to='/editarcarritoproducto' className="bg-green-700 text-white py-2 px-4 rounded-xl hover:bg-green-900 font-bold transition duration-300 text-center w-full sm:w-auto">
                                                Editar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Card 3*/}
                            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl ring-1 ring-gray-200 transition duration-300">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-40 sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                                            src="https://impresosrichard.com/wp-content/uploads/2018/11/producto_afiches_5.jpg"
                                            alt="Producto"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                            <b>Producto:</b> Volantes y afiches
                                        </h3>
                                        <h3 className="text-gray-700 mb-2 text-sm sm:text-base">
                                            <b>Precio:</b> $60.000
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <h3 className="text-gray-700 text-sm sm:text-base"><b>Cantidad:</b></h3>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">remove</button>
                                            <span className="text-gray-700 px-2">5</span>
                                            <button className="material-icons bg-gray-200 rounded px-1 hover:bg-gray-300 text-xs sm:text-sm">add</button>
                                        </div>

                                        <div className="flex flex-col justify-end mt-6 sm:mt-10">
                                            <Link to='/editarcarritoproducto' className="bg-green-700 text-white py-2 px-4 rounded-xl hover:bg-green-900 font-bold transition duration-300 text-center w-full sm:w-auto">
                                                Editar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
