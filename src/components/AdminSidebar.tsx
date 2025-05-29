"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Package, Users, ShoppingCart, FileText, Settings, LogOut, Home } from "lucide-react"

const menuItems = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: BarChart3,
  },
  {
    href: "/admin/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/admin/orders",
    label: "Orders",
    icon: ShoppingCart,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    href: "/admin/articles",
    label: "Articles",
    icon: FileText,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit sticky top-8">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          F
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Furni Admin</h3>
          <p className="text-sm text-gray-600">Management Panel</p>
        </div>
      </div>

      <nav className="space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors group"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Back to Website</span>
        </Link>

        <div className="my-4 border-t border-gray-200"></div>

        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-white" : ""}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
            </Link>
          )
        })}

        <div className="my-4 border-t border-gray-200"></div>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full text-left group">
          <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  )
}
