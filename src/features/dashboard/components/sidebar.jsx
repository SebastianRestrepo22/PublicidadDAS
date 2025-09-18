import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  UserCheck,
  Wrench,
  Package,
  Palette,
  ShoppingCart,
  CreditCard,
  ChevronDown,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

const menuItems = [
  { icon: BarChart3, label: "Gráficos Estadísticos", to: "/dashboard/graficosEstadisticos" },
  { icon: UserCheck, label: "Roles", to: "/dashboard/roles" },
  { icon: Users, label: "Usuarios", to: "/dashboard/usuarios" },
  { icon: Wrench, label: "Servicios", to: "/dashboard/productoServicio" },
  {
    icon: Package,
    label: "Control Insumos",
    to: "/dashboard/insumos",
    hasSubmenu: true,
    submenu: [
      { label: "Proveedores", to: "/dashboard/proveedores" },
      { label: "Pedidos", to: "/dashboard/pedidos" },
      { label: "Insumos", to: "/dashboard/insumos" },
    ],
  },
  { icon: Palette, label: "Categoría de Diseño", to: "/dashboard/categoriaDeDiseño" },
  { icon: ShoppingCart, label: "Gestión de Ventas", to: "/dashboard/gestionVentas" },
  { icon: CreditCard, label: "Método de pago", to: "/dashboard/metodoDePago" },
  { icon: CalendarDays, label: "Agenda", to: "/dashboard/agenda" },
];

export const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleSubmenu = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-52 min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Encabezado */}
      <div className="p-4 pb-6 border-b border-gray-700">
        <h1 className="text-lg font-bold text-white tracking-tight">Dashboard</h1>
      </div>

      {/* Menú */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center justify-between px-4 py-3 hover:bg-gray-800 rounded-md transition-colors duration-200 group ${
                  item.hasSubmenu ? "cursor-pointer" : ""
                }`}
              >
                {!item.hasSubmenu ? (
                  <Link to={item.to} className="flex items-center gap-3 flex-1">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center flex-1 justify-between">
                    <Link to={item.to} className="flex items-center gap-3 flex-1">
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="ml-1 focus:outline-none"
                    >
                      {expandedItems.includes(index) ? (
