import { Link } from "react-router-dom"

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
        <>
            <header>
                <nav className="p-5 bg-[#25395C] shadow md:flex md:items-center md:justify-between">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center cursor-pointer relative z-50">
                            <img src="/public/multimedia/logo.png" alt="Logo" className="rounded-full h-20 inline" />
                        </div>
                        <span className="text-3xl cursor-pointer md:hidden block">
                            <ion-icon name="menu-outline" onClick={(e) => Menu(e.target)}></ion-icon>
                        </span>
                    </div>

                    <ul className="md:flex md:items-center z-40 md:z-auto md:static absolute bg-[#25395C] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className="mx-10 my-6 md:my-0">
                            <Link className="text-white font-bold text-xl hover:text-cyan-500 duration-500" to='/'>Inicio</Link>
                        </li>
                        <li className="mx-10 my-6 md:my-0">
                            <Link className="text-white font-bold text-xl hover:text-cyan-500 duration-500" to='/nuestrosproductos'>Nuestros productos</Link>
                        </li>
                        <li className="mx-10 my-6 md:my-0">
                            <Link className="text-white font-bold text-xl hover:text-cyan-500 duration-500" to='/quienessomos'>Quienes somos</Link>
                        </li>
                        <li className="mx-10 my-6 md:my-0">
                            <Link className="text-white font-bold text-xl hover:text-cyan-500 duration-500" to='/register'>Registro</Link>
                        </li>
                        <li className="mx-10 my-6 md:my-0">
                            <Link className="text-white font-bold text-xl hover:text-cyan-500 duration-500" to='/login'>Login</Link>
                        </li>
                        <div>
                            <img src="/public/multimedia/carritoCompras.png" alt="CarritoCompras" className="h-12 inline duration-500 px-5 py-2 mx-4" />
                        </div>

                    </ul>
                </nav>
            </header>


        </>
    )
}