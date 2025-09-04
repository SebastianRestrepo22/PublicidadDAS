import { Route, Routes } from "react-router-dom"
import { Inicio } from "../features/landing/inicio/inicio"
import { NuestrosProductos } from "../features/landing/nuestrosproductos/nuestrosProductos"
import { QuienesSomos } from "../features/landing/quienessomos/quienesSomos"
import { Register } from "../features/landing/register/register"
import { Login } from "../features/landing/login/login"
import { Dashboard } from "../features/dashboard/dashboard"

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
                    
                </Route>
            </Routes>
        </>
    )
}