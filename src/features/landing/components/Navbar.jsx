import { Link } from "react-router-dom";

export const Navbar = () => {
    function Menu(icon) {
        let list = document.querySelector('ul');
        if (icon.name === "menu-outline") {
            icon.name = "close-outline";
            list.classList.add('top-[80px]', 'opacity-100');
            document.body.classList.add("menu-open");
        } else {
            icon.name = "menu-outline";
            list.classList.remove('top-[80px]', 'opacity-100');
            document.body.classList.remove("menu-open");
        }
    }

    return (
        <header>
            <nav className="bg-[#25395C] fixed top-0 left-0 w-full p-0 h-14 shadow z-50 flex items-center justify-between">
                
                <div className="flex items-center ml-10">
                    <img src="/public/multimedia/logo.png" alt="Logo" className="h-[30px] w-auto" />
                </div>

                <ul className="hidden md:flex mx-auto items-center gap-10">
                    <li>
                        <Link className="text-white font-bold text-[17px] hover:text-cyan-500 duration-500" to='/'>Inicio</Link>
                    </li>

                    <li className="relative group">
                        <Link className="text-white font-bold text-[17px] hover:text-cyan-500 duration-500">
                            Nuestros productos
                        </Link>
                        <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <li>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-cyan-500 hover:text-white rounded-t-lg" to="/productos">
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-cyan-500 hover:text-white rounded-b-lg" to="/servicios">
                                    Servicios
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="text-white font-bold text-[17px] hover:text-cyan-500 duration-500" to='/quienessomos'>Quienes somos</Link>
                    </li>
                </ul>

                <div className="flex items-center gap-2 mr-10">
                    <li className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-1 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
                        <Link className="text-white font-bold text-[17px]" to='/login'>register</Link>
                    </li>

                    <Link to='/carritodecompras' className="flex items-center justify-center text-white w-10 h-10 transition-all duration-300 shadow-md hover:shadow-xl hover:bg-blue-500/10 rounded-full">
                        <img src="/public/multimedia/carritoCompras.png" alt="CarritoCompras" className="h-7 cursor-pointer px-1 mx-4 hover:scale-110 transition-transform duration-300" />
                    </Link>

                    <span className="text-3xl cursor-pointer md:hidden block">
                        <ion-icon name="menu-outline" onClick={(e) => Menu(e.target)}></ion-icon>
                    </span>
                </div>
            </nav>
        </header>
    )
}
