import { Navbar } from "../components/Navbar"

export const Login = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
                <div className="bg-white px-10 py-12 rounded-3xl shadow-2xl w-full max-w-md">
                    <h1 className="text-5xl font-semibold text-center">Bienvenidos</h1>
                    <p className="font-medium text-lg text-gray-500 mt-4 text-center">
                        Bienvenidos a litografia <span className="font-bold">PublicidadDAS</span>
                    </p>

                    <div className="mt-8 space-y-6">
                        <div>
                            <label className="text-lg font-medium block">Correo Electronico</label>
                            <input
                                className="w-full border-2 border-gray-200 rounded-xl p-4 mt-2 bg-transparent focus:border-violet-500 focus:outline-none"
                                placeholder="Ingrese su correo electronico"
                                type="email" 
                                />
                        </div>

                        <div>
                            <label className="text-lg font-medium block">Contraseña</label>
                            <input 
                            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-2 bg-tramsparent focus:border-violet-500 focus:outline-none"
                            placeholder="Ingrese su contraseña"
                            type="password" 
                            />
                        </div>

                        <div className="flex items-center justify-center justify-between">
                            <div className="flex items-center">
                                <input id="remember" type="checkbox" className="mr-2" />
                                <label htmlFor="remember" className="font-medium text-base text-gray-700">
                                    recordar
                                </label>
                            </div>
                        </div>
                        <button className="font-medium text-base text-violet-600 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    <div className="flex flex-col gap-y-4 mt-6">
                        <button className="py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-md hover:bg-violet-700 transition">
                            Iniciar Ssesion
                        </button>
                        <button className="py-3 rounded-xl border border-gray-300 shadow-sm font-medium hover:bg-gray-100 transition">
                            Continuar con google
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}



























































