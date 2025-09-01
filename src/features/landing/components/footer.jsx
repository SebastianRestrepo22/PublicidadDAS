import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-400">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:px-12 px-6 py-16">

                    {/* Columna 1 */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Acerca de Design and Style</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </div>

                    {/* Columna 2 */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Atención al cliente</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Política de envíos</a></li>
                            <li><a href="#">Soporte</a></li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank" className="hover:opacity-80 transition">
                                <img className="w-8 h-8" src="/multimedia/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="https://www.facebook.com/?locale=es_LA" target="_blank" className="hover:opacity-80 transition">
                                <img className="w-8 h-8" src="/multimedia/facebook.png" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="hover:opacity-80 transition">
                                <img className="w-8 h-8" src="/multimedia/social.png" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 text-center py-6">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Design and Style. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </>

    );
};
