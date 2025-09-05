
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer"

export const QuienesSomos = () => {
    return (
        <>

            <Navbar />
            <section className="w-full">
                <div className="relative w-full h-[420px] ">
                    <img src="public/multimedia/quienessomos2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </section>

            <section className="bg-white py-16 px-8 lg:px-20">
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-6xl font-bold text-pink-600 mb-4">
                            PublicidadDAS
                        </h3>
                        <p className="text-gray-800 mb-4">
                            Somos una empresa experta en darte lo mejor para cada una de tus necesidades
                            estamos dispuesto a que estes siempre agusto con nosotros y mejores la calidad
                            y la experiencia al trabajar con nosotros .
                        </p>
                        <p className="text-gray-900 mb-4">
                            Calidad es la que buscas ,siempre estamos disponibles para ti para que podamos
                            complacer cada necesidad que te haga falta en todo lo necesario , haremos una realidad
                            virtual , en realidad tangible .
                        </p>
                    </div>

                    <div className="relative w-full h-[400px]">
                        <img
                            src="public/multimedia/image2.jpg"
                            alt="imagen2"
                            className="absolute top-0 right-0 w-[80%] h-[500px] object-cover rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl "
                        />
                        <img
                            src="public/multimedia/image3.jpg"
                            alt="imagen3"
                            className="absolute bottom-0 left-0 w-[70%] h-[300px] object-cover   rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-50 py-16 px-8 lg:px-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Conocenos un poco mas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <svg
                                className="w-12 h-12 text-pink-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"

                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            HISTORIA
                        </h3>
                        <p className="text-gray-600">
                            Nosotros tenemos chacha chacha chacha nb jblkugkuvuj
                            <span className="font-semibold">TENDENCIA</span> de tu mejor negocio
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <svg
                                className="w-12 h-12 text-pink-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            MISION
                        </h3>
                        <p className="text-gray-900">
                            Nuestra mision es hacer que tus necesidades sean menos
                            no sean una realidad virtual si no una realidad tangible.
                            <span className="font-semibold">Confianza</span>
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <svg
                                className="w-12 h-12 text-pink-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            VISION
                        </h3>
                        <p className="text-gray-600">
                            Nuestra vision es mejorar y darte lo mejor
                            <span className="font-semibold">FUNDAMNTALES</span> para nuestra volutad
                            eficientemente
                        </p>
                    </div>
                </div>

            </section>

<Footer/>
        </>
    );
};
