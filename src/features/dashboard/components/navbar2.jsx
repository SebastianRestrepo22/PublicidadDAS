import { LogOut } from "lucide-react"

export function Navbar2() {
  const handleLogout = () => {
    
    console.log("Cerrando sesión...")
  }

  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 shadow-sm">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
      >
        <LogOut className="w-4 h-4" />
        Cerrar sesión
      </button>
    </nav>
  )
}
