import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Inicio = () => {
    return (
        <>
            <Navbar />
            <main className="transition-all">
                <h1 className="text-3xl">Este es el inicio</h1>
            </main>
        </>
    )
}