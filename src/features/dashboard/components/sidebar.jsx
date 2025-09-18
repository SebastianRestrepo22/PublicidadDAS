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
  {
    icon: ShoppingCart,
    label: "Gestión de Ventas",
    to: "/dashboard/ventas",
    hasSubmenu: true,
    submenu: [
      { label: "Ventas", to: "/dashboard/ventas" },
      { label: "Estados de Ventas", to: "/dashboard/estadosVentas" },
    ],
  },
  { icon: CreditCard, label: "Método de pago", to: "/dashboard/metodoDePago" },
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
      <nav className="flex-1 py-4 ">
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
                        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {item.hasSubmenu && expandedItems.includes(index) && (
                <ul className="ml-5 mt-1 space-y-1 border-l border-gray-700 pl-3">
                  {item.submenu?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.to}
                        className="block px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
