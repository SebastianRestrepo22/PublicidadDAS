import { Route, Routes } from "react-router-dom"
import { Inicio } from "../features/landing/inicio/inicio"
import { NuestrosProductos } from "../features/landing/nuestrosproductos/nuestrosProductos"
import { QuienesSomos } from "../features/landing/quienessomos/quienesSomos"
import { Register } from "../features/landing/register/register"
import { Login } from "../features/landing/login/login"
import { Dashboard } from "../features/dashboard/dashboard"
import { Insumos } from "../features/dashboard/constrolinsumos/insumos/insumos"
import { ProductoServicios } from "../features/dashboard/servicios/productoServicios"
import { Proveedores } from "../features/dashboard/constrolinsumos/proveedores/proveedores"
import { Ventas } from "../features/dashboard/gestionventas/ventas/ventas"
import { EstadosVentas } from "../features/dashboard/gestionventas/estadosventas/estadosVentas"

export const Routers = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/nuestrosproductos" element={<NuestrosProductos/>}/>
                <Route path="/quienessomos" element={<QuienesSomos/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path="insumos" element={<Insumos/>}/>
                    <Route path="productoServicio" element={<ProductoServicios/>}/>
                    <Route path="proveedores" element={<Proveedores/>}/>
                    <Route path="ventas" element={<Ventas/>}/>
                    <Route path="estadosVentas" element={<EstadosVentas/>}/>
                </Route>
            </Routes>
        </>
    )
}