import { Route, Routes } from "react-router-dom"
import { Inicio } from "../features/landing/inicio/inicio"
import { Productos } from "../features/landing/nuestrosproductos/productos"
import { QuienesSomos } from "../features/landing/quienessomos/quienesSomos"
import { Register } from "../features/landing/register/register"
import { Login } from "../features/landing/login/login"
import { Insumos } from "../features/dashboard/constrolinsumos/insumos/insumos"
import { ProductoServicios } from "../features/dashboard/servicios/productoServicios"
import { Proveedores } from "../features/dashboard/constrolinsumos/proveedores/proveedores"
import { Ventas } from "../features/dashboard/gestionventas/ventas/ventas"
import { EstadosVentas } from "../features/dashboard/gestionventas/estadosventas/estadosVentas"
import { Usuarios } from "../features/dashboard/usuarios/usuarios"
import { Roles } from "../features/dashboard/roles/roles"
import { Pedidos } from "../features/dashboard/pedidos/pedidos"
import { MetodoDePago } from "../features/dashboard/metodopago/metododepago"
import { CategoriaDeDiseño } from "../features/dashboard/categoriadediseño/categoriaDeDiseño"
import { DashboardLayout } from "../features/dashboard/components/dashboardLoyout"
import { Servicios } from "../features/landing/nuestrosproductos/servicios"

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/quienessomos" element={<QuienesSomos />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route path="usuarios" element={<Usuarios />} />
                    <Route path="roles" element={<Roles />} />
                    <Route path="pedidos" element={<Pedidos />} />
                    <Route path="categoriaDeDiseño" element={<CategoriaDeDiseño />} />
                    <Route path="insumos" element={<Insumos />} />
                    <Route path="productoServicio" element={<ProductoServicios />} />
                    <Route path="proveedores" element={<Proveedores />} />
                    <Route path="ventas" element={<Ventas />} />
                    <Route path="estadosVentas" element={<EstadosVentas />} />
                    <Route path="metodoDePago" element={<MetodoDePago />} />
                </Route>
            </Routes>
        </>
    )
}
