import { LogOut } from "lucide-react"

export function Navbar2() {
  const handleLogout = () => {
    console.log("Cerrando sesión...")
  }

  return (
    <nav className="h-16 bg-blue-600 border-b border-blue-700 flex items-center justify-end px-6 shadow-sm">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 
                   bg-white hover:bg-gray-100 
                   text-blue-600 font-medium 
                   rounded-lg transition-colors duration-200 text-sm"
      >
        <LogOut className="w-4 h-4" />
        Cerrar sesión
      </button>
    </nav>
  )
}
