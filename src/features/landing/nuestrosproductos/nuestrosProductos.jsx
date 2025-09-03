import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export const NuestrosProductos = () => {
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-center font-bold text-4xl mb-2">Productos</h1>
        <p className="text-gray-400 text-center mb-12">Descubra nuestros productos</p>

        <div className="relative">
          <button onClick={() => slide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-left text-3xl w9"></i></button>
          <button onClick={() => slide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"><i className="bx bx-chevron-right text-3xl w9"></i></button>

          <div className="overflow-hidden">
            <div ref={carouselRef} className="carousel-container flex gap-6 overflow-x-auto py-8 px-8 justify-start scroll-smooth">
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
      <Footer />
    </>
  );
};
