import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Search } from "lucide-react";
import { GetDataServices } from "../../dashboard/servicios/services/services.servicios";
import { Link } from "react-router-dom";
import { getAllCategorias } from "../../dashboard/categoriadediseño/services/services.categoria";

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

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [busqueda, setBusqueda] = useState("");

    //Para traer los servicios del backend

    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const fetchServicio = async () => {
            const response = await GetDataServices();
            // Filtramos solo los registros cuyo Tipo es 'producto'
            const serviciosSolo = response.data.filter(s => s.Tipo === 'servicio');
            setServicios(serviciosSolo);
        };

        fetchServicio();
    }, []);

    // Filtrar solo productos con descuento
    const serviciosConDescuento = servicios.filter(servicio => servicio.Descuento > 0);

    // Seleccionamos aleatoriamente 3 productos
    const servicioDescuentoRandom = serviciosConDescuento
        .sort(() => 0.5 - Math.random()) // mezcla aleatoriamente
        .slice(0, 3);

    //Traer las categorias

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategoria = async () => {
            const data = await getAllCategorias();
            if (data?.data) setCategorias(data.data);
        };
        fetchCategoria();
    }, []);

    //Filtrar el producto antes de mostralo

    const servicioFiltrados = servicios.filter((servicio) => {
        // Filtrado por categoría
        const coincideCategoria = categoriaSeleccionada
            ? String(servicio.CategoriaId) === categoriaSeleccionada
            : true;
        // Filtrado por búsqueda (nombre)
        const coincideBusqueda = servicio.Nombre.toLowerCase().includes(busqueda.toLowerCase());

        return coincideCategoria && coincideBusqueda;
    });

    return (
        <>
            <Navbar />
            {/*Carrusel */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-center font-bold text-4xl mb-2 py-12">Servicios que no puedes perder</h1>
                <p className="text-gray-400 text-center mb-12">Descubra nuestros productos y transforma tus ideas en impresiones únicas.</p>

                <div className="relative">
                    <button onClick={() => slide(-1)} className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-left text-3xl w9"></i></button>
                    <button onClick={() => slide(1)} className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-right text-3xl w9"></i></button>

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

            <section className="bg-yellow-100 py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">¡Aprovecha nuestras ofertas!</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Descuentos especiales en servicios seleccionados, solo por tiempo limitado.
                    </p>

                    <div className="flex justify-center flex-wrap gap-6">
                        {serviciosConDescuento.length === 0 ? (
                            <div className="no-products">
                                <p>No hay servicios con descuento disponibles.</p>
                            </div>
                        ) : (
                            servicioDescuentoRandom.map(servicio => (
                                <div key={servicio.ProductoServicioId} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-72 flex-shrink-0">
                                    <h3 className="text-xl font-semibold mb-2">{servicio.Nombre}</h3>
                                    <p className="text-gray-500 mb-4">Antes: <span className="line-through">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(servicio.Precio)}</span></p>
                                    <p className="text-green-600 font-bold text-2xl mb-4">
                                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(
                                            servicio.Precio - (servicio.Precio * servicio.Descuento / 100)
                                        )}
                                    </p>
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                                        Comprar
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Sección de categoria y la barra de busqueda */}

            <div className="bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="flex justify-center bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <select
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                        name="CategoriaId"
                    >
                        <option value="">Seleccione la categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.CategoriaId} value={categoria.CategoriaId}>
                                {categoria.Nombre}
                            </option>
                        ))}
                    </select>
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Buscar servicio"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="border border-slate-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Nuestros servicios</h1>
            <div className="card-container">
                {servicioFiltrados.length === 0 ? (
                    <div className="no-products">
                        <h2>No hay productos disponibles</h2>
                        <p>Vuelve más tarde o revisa nuestras categorías.</p>
                    </div>
                ) : (
                    servicioFiltrados.map((servicio) => (
                        <div key={servicio.ProductoServicioId} className="card">
                            <div className="image-container">
                                <img src={servicio.UrlImagen} alt={servicio.Nombre} />
                            </div>

                            <div className="card-content">
                                <h3>{servicio.Nombre}</h3>
                                <p className="description">{servicio.Descripcion}</p>

                                <div className="card-actions">
                                    <Link className="btn" to="/carritoproducto">Añadir</Link>

                                    <div className="price-section">
                                        {servicio.Descuento > 0 && (
                                            <span className="old-price">
                                                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(servicio.Precio)}
                                            </span>
                                        )}
                                        <span className="new-price">
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(
                                                servicio.Descuento > 0
                                                    ? servicio.Precio - (servicio.Precio * servicio.Descuento / 100)
                                                    : servicio.Precio
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
};