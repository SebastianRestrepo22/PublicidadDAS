import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export const Inicio = () => {
    const handleNext = () => {
        let items = document.querySelectorAll(".item");
        document.querySelector(".slide").appendChild(items[0]);
    };

    const handlePrev = () => {
        let items = document.querySelectorAll(".item");
        document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    return (
        <>
            <Navbar />
            <main className="transition-all pt-20">

                {/* Carrusel */}
                <div className="container">
                    <div className="slide">
                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia1.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 1</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>

                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia2.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 2</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>

                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia3.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 3</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>

                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia4.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 4</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>

                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia5.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 5</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>

                        <div className="item" style={{ backgroundImage: `url(/multimedia/litografia6.png)` }}>
                            <div className="content">
                                <div className="name">Imágen 6</div>
                                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit corporis nam! Illo architecto similique veritatis ad dolore magni nisi, eveniet, voluptatum dicta id repudiandae earum dolorum excepturi tempore placeat?</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="prev" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
                </div>

                <div className="border-t-2 border-gray-300 my-10">
                    <div>
                        <h1 className="p-5 text-2xl md:text-3xl font-bold text-center mb-6">Servicios</h1>
                    </div>
                    <section className="p-5 min-h-screen flex justify-center items-center text-white">
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                            {/* Tarjeta 1 */}
                            <div className="w-64 sm:w-72 md:w-72 lg:w-72 h-80 sm:h-96 cursor-pointer group perspective">
                                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                                    {/* Cara frontal */}
                                    <div className="absolute backface-hidden border-2 w-full h-full">
                                        <img src="/multimedia/tarjeta1.png" className="w-full h-full object-cover" />
                                    </div>
                                    {/* Cara trasera */}
                                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                                        <img src="/multimedia/tarjeta1.png" className="w-full h-full object-cover opacity-40" />
                                        <div className="absolute inset-0 bg-black/30"></div>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pb-10">
                                            <h1 className="text-2xl font-semibold">Título 1</h1>
                                            <p className="mt-2 text-sm">
                                                Distinctio quo fugit totam architecto voluptatibus, quisquam ea neque?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="w-64 sm:w-72 md:w-72 lg:w-72 h-80 sm:h-96 cursor-pointer group perspective">
                                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                                    <div className="absolute backface-hidden border-2 w-full h-full">
                                        <img src="/multimedia/tarjeta2.png" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                                        <img src="/multimedia/tarjeta2.png" className="w-full h-full object-cover opacity-40" />
                                        <div className="absolute inset-0 bg-black/30"></div>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pb-10">
                                            <h1 className="text-2xl font-semibold">Título 2</h1>
                                            <p className="mt-2 text-sm">
                                                Distinctio quo fugit totam architecto voluptatibus, quisquam ea neque?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 3 */}
                            <div className="w-64 sm:w-72 md:w-72 lg:w-72 h-80 sm:h-96 cursor-pointer group perspective">
                                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                                    <div className="absolute backface-hidden border-2 w-full h-full">
                                        <img src="/multimedia/tarjeta3.png" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                                        <img src="/multimedia/tarjeta3.png" className="w-full h-full object-cover opacity-40" />
                                        <div className="absolute inset-0 bg-black/30"></div>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pb-10">
                                            <h1 className="text-2xl font-semibold">Título 3</h1>
                                            <p className="mt-2 text-sm">
                                                Distinctio quo fugit totam architecto voluptatibus, quisquam ea neque?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Recomendaciones*/}

                <div className="border-t-2 border-gray-300 my-10">
                    <h1 className="p-5 text-2xl md:text-3xl font-bold text-center mb-6">
                        Opiniones de nuestros clientes
                    </h1>

                    {/* Contenedor grid para cards */}
                    <div className="inline-grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-8 justify-center">

                        {/* Card 1 */}
                        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 m-10">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg"
                                    alt="Sebastián Restrepo"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Sebastián Restrepo</h2>
                                    <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?”
                            </p>
                            <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition">
                                Leer más
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 m-10">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg"
                                    alt="Sebastián Restrepo"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Vanessa Sánchez</h2>
                                    <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?”
                            </p>
                            <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition">
                                Leer más
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 m-10">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg"
                                    alt="Sebastián Restrepo"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Sebastián Restrepo</h2>
                                    <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?”
                            </p>
                            <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition">
                                Leer más
                            </a>
                        </div>

                        {/* Card 4 */}
                        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 m-10">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg"
                                    alt="Sebastián Restrepo"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Sebastián Restrepo</h2>
                                    <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?”
                            </p>
                            <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition">
                                Leer más
                            </a>
                        </div>


                    </div>
                </div>


                {/* Seccion del mapa */}
                <div className="border-t-2 border-gray-300 my-10">
                    <div className="mapa w-full px-4 py-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Design & Style</h1>

                        {/* Contenedor en dos columnas */}
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            {/* Columna de direcciones */}
                            <div className="flex-1 p-4">
                                <p>Dirección:</p>
                                <div className="flex items-start mb-2">
                                    <span className="material-symbols-outlined text-red-500 mr-2">
                                        location_on
                                    </span>
                                    <p>
                                        Carrera 10 #55 366 int(150). <br />
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <span className="material-symbols-outlined text-red-500 mr-2">
                                        location_on
                                    </span>
                                    <p>
                                        Carrera 15 #55 360 int(135).
                                    </p>
                                </div>
                            </div>

                            {/* Columna del mapa */}
                            <div className="flex-1 p-4">
                                <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.8159235080193!2d-75.61079942635264!3d6.171504527156471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682321a79aea7%3A0x1bf85f1b567ce732!2sCra.%2049%20%2351-28%2C%20Los%20Naranjos%2C%20Itag%C3%BCi%2C%20Antioquia!5e1!3m2!1ses-419!2sco!4v1756600255780!5m2!1ses-419!2sco"
                                        className="w-full h-full border-0"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
            <Footer />
        </>
    )
}