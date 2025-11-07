import { Route, Routes } from "react-router-dom"
import { Inicio } from "../features/landing/inicio/inicio"
import { Productos } from "../features/landing/nuestrosproductos/productos"
import { QuienesSomos } from "../features/landing/quienessomos/quienesSomos"
import { Login } from "../features/landing/login/login"
import { Insumos } from "../features/dashboard/constrolinsumos/insumos/insumos"
import { ProductoServicios } from "../features/dashboard/servicios/productoServicios"
import { Proveedores } from "../features/dashboard/constrolinsumos/proveedores/proveedores"
import { Usuarios } from "../features/dashboard/usuarios/usuarios"
import { Roles } from "../features/dashboard/roles/roles"
import { DashboardLayout } from "../features/dashboard/components/dashboardLoyout"
import { Error404 } from "../features/404/error404"
import { GraficosEstadisticos } from "../features/dashboard/dashboard/graficoEstadisticos"
import { CarritoCompras } from "../features/carritoCompras/carritoCompras"
import { CarritoProducto } from "../features/carritoCompras/CarritoProductos/carritoProducto"
import { EditarCarritoProducto } from "../features/carritoCompras/CarritoProductos/editarCarritoProducto"
import Agenda from "../features/dashboard/agenda/agenda"
import { Produccion } from "../features/dashboard/gestionventas/produccion/produccion"
import { Compras } from "../features/dashboard/compras/compras"
import { Pedidos } from "../features/dashboard/gestionventas/pedidos/pedidos"
import { Ventas } from "../features/dashboard/gestionventas/venta/ventas"
import { Diseño } from "../features/dashboard/categoriadediseño/diseño"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/quienessomos" element={<QuienesSomos />} />
            <Route path="/login" element={<Login />} />

            <Route path="/carritodecompras" element={<CarritoCompras />} />
            <Route path="/carritoproducto" element={<CarritoProducto />} />
            <Route path="/editarcarritoproducto" element={<EditarCarritoProducto />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="graficosEstadisticos" element={<GraficosEstadisticos/>} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="roles" element={<Roles />} />
                <Route path="compras" element={<Compras/>} />
                <Route path="insumos" element={<Insumos />} />
                <Route path="diseño" element={<Diseño />} />
                <Route path="productoServicio" element={<ProductoServicios />} />
                <Route path="proveedores" element={<Proveedores />} />
                <Route path="pedidos" element={<Pedidos/>} />
                <Route path="produccion" element={<Produccion/>} />
                <Route path="ventas" element={<Ventas/>} />
                <Route path="agenda" element={<Agenda/>}/>
            </Route>

            {/* 404 */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}
