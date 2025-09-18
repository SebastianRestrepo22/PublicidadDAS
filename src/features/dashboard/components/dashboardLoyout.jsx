import { Sidebar } from "./sidebar"
<<<<<<< HEAD
import { Navbar2 } from "./navbar2"
import { Outlet } from "react-router-dom"
=======
import { Outlet } from "react-router-dom"


>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf

export function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
<<<<<<< HEAD
        <Navbar2 />
=======
        
>>>>>>> a611ff92e33d91e20fec2111fa0e1fe48a519edf
        <main className="flex-1 p-6 overflow-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
