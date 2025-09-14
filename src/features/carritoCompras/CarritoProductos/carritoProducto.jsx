import React from "react";
import { Navbar } from "../../landing/components/Navbar";
import { Footer } from "../../landing/components/footer";

export const CarritoProducto = () => {
    return (
        <>
            <Navbar />
            <div>
                <section className="min-h-screen flex justify-center items-center text-white">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
                        <h1>Hola</h1>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}