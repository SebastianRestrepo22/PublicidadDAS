import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  //Validar correo
  const [correoError, setCorreoError] = useState('');

  const handleCorreoBlur = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/auth/validar-correo?correo=${values.CorreoElectronico}`);
      if (response.data.exists) {
        setCorreoError('Este correo ya está registrado');
      } else {
        setCorreoError('');
      }
    } catch (error) {
      console.error('Error validando correo:', error);
      setCorreoError('No se pudo validar el correo');
    }
  };

  //Validar cedula
  const [cedulaError, setCedulaError] = useState('');

  const handleCedulaBlur = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/auth/validar-cedula?cedula=${values.CedulaId}`);
      if (response.data.exists) {
        setCedulaError('Esta cedula ya está registrada');
      } else {
        setCedulaError('');
      }
    } catch (error) {
      console.error('Error validando la cedula:', error);
      setCedulaError('No se pudo validar la cedula');
    }
  };

  //Validar telefono
  const [telefonoError, setTelefonoError] = useState('');

  const handleTelefonoBlur = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/auth/validar-telefono?telefono=${values.Telefono}`);
      if (response.data.exists) {
        setTelefonoError('Este telefono ya está registrado');
      } else {
        setTelefonoError('');
      }
    } catch (error) {
      console.error('Error validando el telefono:', error);
      setTelefonoError('No se pudo validar el telefono');
    }
  };

  // Registro
  const [values, setValues] = useState({
    CedulaId: "",
    NombreCompleto: "",
    Telefono: "",
    CorreoElectronico: "",
    Direccion: "",
    Contrasena: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", values);
      if (response.status === 201) {
        alert("Registro exitoso");
        setIsLogin(true);
        setValues({
          CedulaId: "",
          NombreCompleto: "",
          Telefono: "",
          CorreoElectronico: "",
          Direccion: "",
          Contrasena: "",
        });
      }
    } catch (error) {
      console.error("Error en registro:", error);
      alert(error.response?.data?.message || "Error al registrar");
    }
  };

  // Login
  const [valuesLogin, setValuesLogin] = useState({
    CorreoElectronico: "",
    Contrasena: "",
  });

  const handleChangesLogin = (e) => {
    setValuesLogin({ ...valuesLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", valuesLogin);
      const token = response.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      if (decoded.Role === "Administrador") {
        navigate("/dashboard/graficosEstadisticos");
      } else {
        alert("Acceso denegado. Solo el administrador puede entrar al dashboard.");
      }

      setValuesLogin({
        CorreoElectronico: "",
        Contrasena: "",
      });
    } catch (error) {
      console.error("Error en login:", error);
      alert(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-100 pt-20">
        <div className="w-[90%] max-w-2xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          <div
            className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-1/2"
              }`}
          >
            {/* Login */}
            <div className="w-1/2 flex flex-col md:flex-row">
              <div
                className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/login1.png')" }}
              ></div>

              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center mb-6">Iniciar Sesión</h1>
                <form onSubmit={handleSubmitLogin} className="space-y-5">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={valuesLogin.CorreoElectronico}
                    name="CorreoElectronico"
                    onChange={handleChangesLogin}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={valuesLogin.Contrasena}
                    name="Contrasena"
                    onChange={handleChangesLogin}
                    required
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

            {/* Registro */}
            <div className="w-1/2 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-center mb-2">Crear Cuenta</h1>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.NombreCompleto}
                    name="NombreCompleto"
                    onChange={handleChanges}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.CorreoElectronico}
                    name="CorreoElectronico"
                    onChange={handleChanges}
                    onBlur={handleCorreoBlur}
                    required
                  />
                  {correoError && <p className="text-red-500 text-sm">{correoError}</p>}
                  <input
                    type="text"
                    placeholder="Cédula"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.CedulaId}
                    name="CedulaId"
                    onChange={handleChanges}
                    onBlur={handleCedulaBlur}
                    required
                  />
                  {cedulaError && <p className="text-red-500 text-sm">{cedulaError}</p>}
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Direccion}
                    name="Direccion"
                    onChange={handleChanges}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Teléfono"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Telefono}
                    name="Telefono"
                    onChange={handleChanges}
                    onBlur={handleTelefonoBlur}
                    required
                  />
                  {telefonoError && <p className="text-red-500 text-sm">{telefonoError}</p>}
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 bg-transparent focus:border-violet-500 focus:outline-none"
                    value={values.Contrasena}
                    name="Contrasena"
                    onChange={handleChanges}
                    required
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

              <div
                className="hidden md:flex flex-col justify-between items-start text-white p-10 w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/multimedia/register2.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
