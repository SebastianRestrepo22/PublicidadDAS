import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="w-[90%] max-w-4xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* CONTENEDOR DESLIZANTE */}
          <div
            className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${
              isLogin ? "translate-x-0" : "-translate-x-1/2"
            }`}
          >
            {/* PANEL LOGIN */}
            <div className="w-1/2 flex flex-col md:flex-row">
              {/* Panel Morado */}
              <div className="hidden md:flex flex-col justify-between items-start bg-violet-600 text-white p-10 w-1/2">
                <div>
                  <h2 className="text-3xl font-bold mb-2">¡Bienvenido!</h2>
                  <p className="text-sm">Inicia sesión para continuar</p>
                </div>
                <img src="" alt="" className="max-w-xs mx-auto" />
                <button
                  onClick={() => setIsLogin(false)}
                  className="mt-4 py-2 px-6 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100"
                >
                  Registrarse
                </button>
              </div>

              {/* Formulario Login */}
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center mb-6">
                  Iniciar Sesión
                </h1>
                <form className="space-y-5">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
                  >
                    Iniciar Sesión
                  </button>
                </form>
                <button
                  onClick={() => setIsLogin(false)}
                  className="mt-4 text-violet-600 hover:underline text-sm"
                >
                  ¿No tienes cuenta? Regístrate
                </button>
              </div>
            </div>

            {/* PANEL REGISTRO */}
            <div className="w-1/2 flex flex-col md:flex-row">
              {/* Formulario Registro */}
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center mb-6">
                  Crear Cuenta
                </h1>
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
                  >
                    Registrarse
                  </button>
                </form>
                <button
                  onClick={() => setIsLogin(true)}
                  className="mt-4 text-violet-600 hover:underline text-sm"
                >
                  ¿Ya tienes cuenta? Inicia sesión
                </button>
              </div>

              {/* Panel Morado */}
              <div className="hidden md:flex flex-col justify-between items-start bg-violet-600 text-white p-10 w-1/2">
                <div>
                  <h2 className="text-3xl font-bold mb-2">¡Hola de nuevo!</h2>
                  <p className="text-sm">Regresa para seguir con nosotros</p>
                </div>
                <img src="" alt="" className="max-w-xs mx-auto" />
                <button
                  onClick={() => setIsLogin(true)}
                  className="mt-4 py-2 px-6 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
