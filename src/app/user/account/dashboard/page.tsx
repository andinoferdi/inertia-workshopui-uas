import Link from "next/link"
import { Package, Heart, ShoppingCart, User, TrendingUp, Calendar } from "lucide-react"
import AccountSidebar from "@/components/AccountSidebar"

// Mock data
const stats = [
  {
    label: "Total Orders",
    value: "12",
    icon: Package,
    color: "bg-blue-500",
  },
  {
    label: "Wishlist Items",
    value: "8",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    label: "Cart Items",
    value: "3",
    icon: ShoppingCart,
    color: "bg-green-500",
  },
  {
    label: "Total Spent",
    value: "$1,240",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
]

const recentOrders = [
  {
    id: "ORD-2024-003",
    date: "2024-01-25",
    status: "Processing",
    total: 156.0,
    items: 3,
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "Shipped",
    total: 86.0,
    items: 2,
  },
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 128.0,
    items: 2,
  },
]

const recentlyViewed = [
  { name: "Modern Sofa", price: 299.0, image: "/images/product-1.png" },
  { name: "Coffee Table", price: 149.0, image: "/images/product-2.png" },
  { name: "Floor Lamp", price: 89.0, image: "/images/product-3.png" },
]

export default function AccountDashboard() {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">My Account</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AccountSidebar />

          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Welcome back, John!</h2>
                  <p className="text-white/80">Here's what's happening with your account</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4" />
                <span>Member since January 2024</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
                <Link href="/user/account/orders" className="text-primary hover:text-primary/80 font-medium">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{order.id}</h4>
                        <p className="text-sm text-gray-600">
                          {order.items} items • {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">${order.total.toFixed(2)}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently Viewed */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Recently Viewed</h3>
                <Link href="/user/shop" className="text-primary hover:text-primary/80 font-medium">
                  Browse More
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentlyViewed.map((product, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="bg-gray-50 rounded-lg p-4 mb-3">
                      <div className="w-full h-24 bg-gray-200 rounded"></div>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{product.name}</h4>
                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/user/shop"
                className="bg-primary text-white rounded-2xl p-6 hover:bg-primary/90 transition-colors"
              >
                <ShoppingCart className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Continue Shopping</h3>
                <p className="text-white/80">Discover new furniture for your home</p>
              </Link>

              <Link
                href="/user/account/orders"
                className="bg-gray-800 text-white rounded-2xl p-6 hover:bg-gray-700 transition-colors"
              >
                <Package className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Track Orders</h3>
                <p className="text-white/80">Check the status of your recent orders</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
