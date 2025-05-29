"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";

const menuItems = [
  {
    href: "/user/account/dashboard",
    label: "Dashboard",
    icon: User,
  },
  {
    href: "/user/account/orders",
    label: "Order History",
    icon: Package,
  },
  {
    href: "/user/account/wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    href: "/user/account/settings",
    label: "Account Settings",
    icon: Settings,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
          JD
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">John Doe</h3>
          <p className="text-sm text-gray-600">john.doe@example.com</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full text-left">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </nav>
    </div>
  );
}
