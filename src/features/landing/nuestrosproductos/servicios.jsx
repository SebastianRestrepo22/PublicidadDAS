import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export const Servicios = () => {
    const products = [
        { name: "Tarjetas de Presentación", price: "$49", image: "https://images.unsplash.com/photo-1581092588429-14f0d3f8df8e?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.8 },
        { name: "Volantes Publicitarios", price: "$79", image: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.6 },
        { name: "Afiches Promocionales", price: "$129", image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.7 },
        { name: "Catálogos Empresariales", price: "$199", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.9 },
        { name: "Calendarios Personalizados", price: "$59", image: "https://images.unsplash.com/photo-1581090700227-4c4b6a5a5cfb?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.5 },
        { name: "Stickers Adhesivos", price: "$39", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.4 },
        { name: "Carpetas Corporativas", price: "$149", image: "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 4.8 },
        { name: "Revistas", price: "$299", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400", rating: 5.0 }
    ];

    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);

    const cardWidth = 312; // ancho de cada card

    const slide = (direction) => {
        let newIndex = index + direction;
        if (newIndex >= products.length) newIndex = 0;
        if (newIndex < 0) newIndex = products.length - 1;
        setIndex(newIndex);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
        }
    };

    // autoplay cada 3s
    useEffect(() => {
        const interval = setInterval(() => slide(1), 10000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <Navbar />
            {/* Sección de categoria y la barra de busqueda */}
            <div className="flex bg-[#B1B8C0] justify-center pt-20">
                <div className="m-3">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option value="">Categorias</option>
                        <option value="id">Gran formato</option>
                        <option value="Nombre del Insumo">Stickers / Etiquetas</option>
                        <option value="Stock">Folletos / Trípticos</option>
                        <option value="Stock">Posters / Pósters</option>
                    </select>
                </div>

                <div className="relative m-3">
                    <img src="/public/multimedia/lupa.png" alt="Buscar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                    <input type="text" placeholder="Buscar" className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>

            {/*Carrusel */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-center font-bold text-4xl mb-2">Servicios que no puedes perder</h1>
                <p className="text-gray-400 text-center mb-12">Descubra nuestros productos y transforma tus ideas en impresiones únicas.</p>

                <div className="relative">
                    <button onClick={() => slide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-left text-3xl w9"></i></button>
                    <button onClick={() => slide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-right text-3xl w9"></i></button>

                    <div className="overflow-hidden">
                        <div ref={carouselRef} className="carousel-container flex gap-6 overflow-hidden py-8 px-8 scroll-smooth">
                            {products.map((product, idx) => (
                                <div key={idx} className="product-card flex-none w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                        <div className="absolute top-2 right-2 flex gap-2">
                                            <button className="icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg transition-transform"><i className="bx bx-heart text-xl"></i></button>
                                            <button className="icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg transition-transform"><i className="bx bx-cart-add text-xl"></i></button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <a href="#" className="text-white text-lg font-semibold block">{product.name}</a>
                                        <span className="text-indigo-400 font-bold">{product.price}</span>
                                        <div className="flex items-center mt-2 text-yellow-400">
                                            {"★".repeat(Math.floor(product.rating))}{product.rating % 1 >= 0.5 ? "★" : ""}
                                            <span className="text-gray-400 text-xs ml-2">({product.rating.toFixed(1)})</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Descuentos */}

            <section class="bg-yellow-100 py-12">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-4">¡Aprovecha nuestras ofertas!</h2>
                    <p class="text-lg text-gray-700 mb-8">
                        Descuentos especiales en productos seleccionados, solo por tiempo limitado.
                    </p>

                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 class="text-xl font-semibold mb-2">Servicio A</h3>
                            <p class="text-gray-500 mb-4">Antes: <span class="line-through">$50</span></p>
                            <p class="text-green-600 font-bold text-2xl mb-4">$35</p>
                            <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                                Comprar
                            </button>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 class="text-xl font-semibold mb-2">Servicio B</h3>
                            <p class="text-gray-500 mb-4">Antes: <span class="line-through">$80</span></p>
                            <p class="text-green-600 font-bold text-2xl mb-4">$60</p>
                            <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                                Comprar
                            </button>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 class="text-xl font-semibold mb-2">Servicio C</h3>
                            <p class="text-gray-500 mb-4">Antes: <span class="line-through">$100</span></p>
                            <p class="text-green-600 font-bold text-2xl mb-4">$75</p>
                            <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Nuestros servicios</h1>
            <div className="card-container">
                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://litocreativos.co/wp-content/uploads/2021/04/papeleria-de-oficina-medellin.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid nemo non eligendi odio temporibus corporis excepturi, error deleniti, ipsum accusamus ea nisi voluptatem assumenda numquam commodi iusto quia?
                        </p>
                        <a href="" className="btn">Read More</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};