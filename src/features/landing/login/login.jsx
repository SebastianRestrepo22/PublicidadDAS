import { useState } from "react";
import { Navbar } from "../components/Navbar";
<<<<<<< HEAD
=======
import { Footer } from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  //Sección del registro

  const [values, setValues] = useState({
    CedulaId: '',
    NombreCompleto: '',
    Telefono: '',
    CorreoElectronico: '',
    Direccion: '',
    Contrasena: ''
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/register', values);
      if (response.status === 201) {
        setIsLogin(true);
        setValues({
          CedulaId: '',
          NombreCompleto: '',
          Telefono: '',
          CorreoElectronico: '',
          Direccion: '',
          Contrasena: ''
        });
      }
      console.log("Datos enviados:", values);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center bg-gray-100 pt-20">
        <div className="w-[90%] max-w-2xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          <div
            className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-1/2"
              }`}
          >
            <div className="w-1/2 flex flex-col md:flex-row">
<<<<<<< HEAD
              <div className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/login1.png') "}}
              >
                
=======
              {/* Panel Morado */}
              <div className="hidden md:flex flex-col justify-between items-start bg-violet-600 text-white p-10 w-1/2">
                <div>
                  <h2 className="text-3xl font-bold mb-2">¡Bienvenido!</h2>
                  <p className="text-sm">Inicia sesión para continuar</p>
                </div>
                <img src="img" alt="..." className="max-w-xs mx-auto" />
                <button
                  onClick={() => setIsLogin(false)}
                  className="mt-4 py-2 px-6 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100"
                >
                  Registrarse
                </button>
>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf
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
                <h1 className="text-2xl font-bold text-center mb-2">
                  Crear Cuenta
                </h1>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Cedula"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.CedulaId}
                    name="CedulaId" onChange={handleChanges}
                  />
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.NombreCompleto} 
                    name="NombreCompleto" onChange={handleChanges}
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.CorreoElectronico}
                    name="CorreoElectronico" onChange={handleChanges}
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Direccion}
                    name="Direccion" onChange={handleChanges}
                  />
                  <input
                    type="text"
                    placeholder="Telefono"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Telefono}
                    name="Telefono" onChange={handleChanges}
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Contrasena}
                    name="Contrasena" onChange={handleChanges}
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
<<<<<<< HEAD
                  className="mt-4 text-blue-800 hover:underline text-sm"
=======
                  className="mt-2 text-violet-600 hover:underline text-sm"
>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf
                >
                  ¿Ya tienes cuenta? Inicia sesión
                </button>
              </div>

<<<<<<< HEAD
              <div className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/register2.png') "}}
              >
                
                
=======
              {/* Panel Morado */}
              <div className="hidden md:flex flex-col justify-between items-start bg-violet-600 text-white p-10 w-1/2">
                <div>
                  <h2 className="text-3xl font-bold mb-2">¡Hola de nuevo!</h2>
                  <p className="text-sm">Regresa para seguir con nosotros</p>
                </div>
                <img src="img" alt="..." className="max-w-xs mx-auto" />
                <button
                  onClick={() => setIsLogin(true)}
                  className="mt-4 py-2 px-6 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100"
                >
                  Iniciar Sesión
                </button>
>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
