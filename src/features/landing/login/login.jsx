import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center bg-gray-100 pt-20">
        <div className="w-[90%] max-w-2xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          <div
            className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${
              isLogin ? "translate-x-0" : "-translate-x-1/2"
            }`}
          >
            <div className="w-1/2 flex flex-col md:flex-row">
              <div className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/login1.png') "}}
              >
                
              </div>

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
                    className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
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

            <div className="w-1/2 flex flex-col md:flex-row">
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
                    className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
                  >
                    Registrarse
                  </button>
                </form>
                <button
                  onClick={() => setIsLogin(true)}
                  className="mt-4 text-blue-800 hover:underline text-sm"
                >
                  ¿Ya tienes cuenta? Inicia sesión
                </button>
              </div>

              <div className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/register2.png') "}}
              >
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
