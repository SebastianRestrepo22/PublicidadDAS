
import { Animacion } from "../Animacion/animacion"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/footer"

export const Register = () => {
    return (
        <>
            <Navbar />

            <div className="bg-white px-10 py-20 rounded-3xl border-2 lg:w-1/2">
                <h1 className="text-5xl font-semibold">Bienvenidos</h1>
                <p className="font-medium text-lg text-gray-500 mt-4">litografia PublicidadDas</p>
                <div className="mt-8 ">
                    <div>
                        <label className="text-lg font-medium">Nombre Completo</label>
                        <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                    <div>
                        <label className="text-lg font-medium">Telefono</label>
                        <input className="w-full border-2 border-gray-100 rounded-x1 p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su telefono"
                        />
                    </div>
                    <div>
                        <label className="text-lg font-medium">Correo Electronico</label>
                        <input className="w-full border-2 border-gray-100 rounded-x1 p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su correo electronico"
                        />
                    </div>
                    <div>
                        <label className="text-lg font-medium">Direccion</label>
                        <input className="w-full border-2 border-gray-100 rounded-x1 p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su direccion"
                        />
                    </div>
                    <div>
                        <label className="text-lg font-medium">Contraseña</label>
                        <input className="w-full border-2 border-gray-100 rounded-x1 p-4 mt-1 bg-transparent"
                            placeholder="Ingrese su contraseña"
                            type="password"
                        />
                    </div>
                    <div className="mt-8 flex justify-between items-center ">
                        <div>
                            <input type="checkbox"
                                id="remember"
                            />
                        </div>
                        <label className="ml-2 font-medium text-base ">Remember for 30 days</label>
                    </div>
                    <button className="font-medium text-base text-vi">forgot password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="py-3 rounded-xl bg-violet-500 text-violet">Sing in</button>
                    <button className="py-3 rounded-xl border ">sing in whith google</button>
                </div>
            </div>

            {/* <div className="hidden lg:flex w-1/2 items-center justify-center bg gradient-to-br from-purple-200 to-indigo-200">
                <Animacion/>
            </div> */}



<Footer />
        </>
    )
}

























