import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbarcliente = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // regresar al login
  };

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Panel del Cliente</h1>

      <div className="flex gap-4">
        
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
