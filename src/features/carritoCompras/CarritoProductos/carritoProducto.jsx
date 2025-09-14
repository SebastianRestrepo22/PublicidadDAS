import React from "react";
import { Navbar } from "../../landing/components/Navbar";
import { Footer } from "../../landing/components/footer";

export const CarritoProducto = () => {
    return (
        <>
            <Navbar />
            
            {/* Contenido principal  */}
            <div className="container mx-auto px-4 pt-20 flex-1">
                <Link to='/productos' className="bg-gray-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-700 transition duration-300">
                    Regresar
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* Imagen */}
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <h2 className="font-bold text-2xl mb-4">Tarjetas de presentación</h2>
                        <img className="max-w-sm w-[500px] h-[500px] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" src="https://assets.freelogoservices.com/sites/all/themes/freelogoservices/images/bcworkflow/bc_lp_grey_top_bkg.png" alt="Producto" />

                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}