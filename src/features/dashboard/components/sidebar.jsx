import { useState } from "react";
import Link from "next/link";
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
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart3, label: "Gráficos Estadísticos", href: "/graficos" },
  { icon: UserCheck, label: "Roles", href: "/roles" },
  { icon: Users, label: "Usuarios", href: "/usuarios" },
  { icon: Wrench, label: "Servicios", href: "/servicios" },
  {
    icon: Package,
    label: "Control Insumos",
    href: "/inventario",
    hasSubmenu: true,
    submenu: [
      { label: "Proveedores", href: "/inventario/proveedores" },
      { label: "Pedidos", href: "/inventario/pedidos" },
      { label: "Insumos", href: "/inventario/insumos" },
    ],
  },
  { icon: Palette, label: "Categoría de Diseño", href: "/categoria-de-diseño" },
  {
    icon: ShoppingCart,
    label: "Gestión de Ventas",
    href: "/ventas",
    hasSubmenu: true,
    submenu: [
      { label: "Ventas", href: "/ventas" },
      { label: "Estados de Ventas", href: "/ventas/estados" },
    ],
  },
  { icon: CreditCard, label: "Método de pago", href: "/pagos" },
];

export const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleSubmenu = (index: ) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-6 pb-8 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center justify-between px-6 py-4 hover:text-white
                                hover:bg-gray-800 transition-colors duration-200 group ${
                                  item.hasSubmenu ? "cursor-pointer" : ""
                                }`}
                onClick={item.hasSubmenu ? () => toggleSubmenu(index) : undefined}
              >
                {!item.hasSubmenu ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 flex-1"
                  >
                    <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center gap-4 flex-1 text-left"
                  >
                    <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                  </button>
                )}

                {item.hasSubmenu && (
                  <div className="ml-2">
                    {expandedItems.includes(index) ? (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                )}
              </div>

              {item.hasSubmenu && expandedItems.includes(index) && (
                <ul className="ml-6 mt-2 space-y-1 border-l border-gray-700 pl-4">
                  {item.submenu?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors duration-200"
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
