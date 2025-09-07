import { Sidebar } from "./sidebar"
import { Outlet } from "react-router-dom"



export function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        <main className="flex-1 p-6 overflow-auto">
          <Outlet/>
        </main>
        
      </div>
    </div>
  )
}
