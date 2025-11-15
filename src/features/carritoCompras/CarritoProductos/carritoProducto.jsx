import React from "react";
import { Navbar } from "../../landing/components/Navbar";
import { Footer } from "../../landing/components/footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CarritoProducto = () => {
    const location = useLocation();
    const item = location.state?.item;
    const from = location.state?.from || "/productos"; 

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />

            {/* Contenido principal */}
            <div className="mx-auto px-4 pt-[70px] flex-1">

                {/* Header con botón regresar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <h1 className="font-serif text-4xl font-bold text-gray-900">
                        Detalles del producto
                    </h1>
                    <Link
                        to={from}
                        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-600 transition duration-300"
                    >
                        Regresar
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Imagen del producto */}
                    <div className="flex flex-col justify-center items-center md:items-start gap-6">
                        <h2 className="font-serif text-2xl font-bold">
                            {item?.Nombre}
                        </h2>

                        <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <img
                                className="w-full h-[500px] object-cover"
                                src={item?.UrlImagen}
                                alt={item?.Nombre}
                            />

                        </div>
                    </div>

                    {/* Formulario */}
                    <form className="bg-white text-gray-900 border border-gray-200 p-8 rounded-3xl w-full max-w-md flex flex-col gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="cantidad" className="font-semibold text-gray-700">
                                Cantidad
                            </label>
                            <input
                                id="cantidad"
                                type="number"
                                placeholder="Ingresa la cantidad"
                                className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1 md:flex-row md:gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <label htmlFor="alto" className="font-semibold text-gray-700">Alto</label>
                                <input
                                    id="alto"
                                    type="number"
                                    placeholder="cm"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label htmlFor="ancho" className="font-semibold text-gray-700">Ancho</label>
                                <input
                                    id="ancho"
                                    type="number"
                                    placeholder="cm"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="descripcion" className="font-semibold text-gray-700">Descripción</label>
                            <textarea
                                id="descripcion"
                                rows={4}
                                placeholder="Escribe una descripción del producto"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            ></textarea>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="urlImagen" className="font-semibold text-gray-700">URL Imagen</label>
                            <input
                                id="urlImagen"
                                type="text"
                                placeholder="Ingresa la URL de la imagen"
                                className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            />
                        </div>

                        <Link
                            to='/carritodecompras'
                            className="mt-4 bg-gradient-to-r from-black to-gray-800 text-white p-4 rounded-2xl hover:from-gray-900 hover:to-gray-700 font-bold text-center shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                        >
                            Añadir al carrito
                        </Link>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>

    )
}
