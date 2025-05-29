"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Download,
  Filter,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  Search,
} from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"

// Mock data for charts and stats
const stats = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "increase",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    period: "from last month",
  },
  {
    label: "Orders",
    value: "2,350",
    change: "+180.1%",
    changeType: "increase",
    icon: ShoppingCart,
    color: "from-blue-500 to-blue-600",
    period: "from last month",
  },
  {
    label: "Products",
    value: "456",
    change: "+19%",
    changeType: "increase",
    icon: Package,
    color: "from-purple-500 to-purple-600",
    period: "from last month",
  },
  {
    label: "Active Users",
    value: "2,891",
    change: "+201",
    changeType: "increase",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    period: "from last month",
  },
]

const recentOrders = [
  {
    id: "ORD-2024-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: 128.0,
    status: "completed",
    date: "2024-01-25",
    items: 3,
    avatar: "JD",
  },
  {
    id: "ORD-2024-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: 86.0,
    status: "processing",
    date: "2024-01-25",
    items: 2,
    avatar: "JS",
  },
  {
    id: "ORD-2024-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: 156.0,
    status: "shipped",
    date: "2024-01-24",
    items: 1,
    avatar: "MJ",
  },
  {
    id: "ORD-2024-004",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    amount: 92.0,
    status: "completed",
    date: "2024-01-24",
    items: 4,
    avatar: "SW",
  },
]

const topProducts = [
  {
    name: "Nordic Chair",
    sales: 45,
    revenue: 2250,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
    category: "Chairs",
  },
  {
    name: "Kruzo Aero Chair",
    sales: 32,
    revenue: 2496,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
    category: "Chairs",
  },
  {
    name: "Ergonomic Chair",
    sales: 28,
    revenue: 1204,
    trend: "down",
    image: "/placeholder.svg?height=40&width=40",
    category: "Chairs",
  },
  {
    name: "Modern Sofa",
    sales: 15,
    revenue: 4485,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
    category: "Sofas",
  },
]

const salesData = [
  { month: "Jan", sales: 4000, orders: 240 },
  { month: "Feb", sales: 3000, orders: 139 },
  { month: "Mar", sales: 2000, orders: 980 },
  { month: "Apr", sales: 2780, orders: 390 },
  { month: "May", sales: 1890, orders: 480 },
  { month: "Jun", sales: 2390, orders: 380 },
]

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("30d")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3" />
      case "processing":
        return <Clock className="w-3 h-3" />
      case "shipped":
        return <ArrowUpRight className="w-3 h-3" />
      default:
        return <AlertCircle className="w-3 h-3" />
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  F
                </div>
                <div>
                  <h1 className="font-bold text-gray-900">Inertia Admin</h1>
                  <p className="text-xs text-gray-600">Management Panel</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  A
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-600">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AdminSidebar />

          <div className="lg:col-span-4 space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        {stat.changeType === "increase" ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sales Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
                    <p className="text-gray-600 text-sm">Monthly sales and orders performance</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Simple Chart Representation */}
                <div className="space-y-4">
                  {salesData.map((data, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 text-sm text-gray-600">{data.month}</div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                            style={{ width: `${(data.sales / 4000) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 w-16">${data.sales}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                    <p className="text-gray-600 text-sm">Best performing products</p>
                  </div>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">View All</button>
                </div>

                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-gray-900">${product.revenue}</span>
                          {product.trend === "up" ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3 text-red-500" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{product.sales} sales</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <p className="text-gray-600 text-sm">Latest customer orders and their status</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">View All</button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Order</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-gray-900">{order.id}</div>
                            <div className="text-sm text-gray-500">{order.items} items</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                              {order.avatar}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{order.customer}</div>
                              <div className="text-sm text-gray-500">{order.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{order.date}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}
                          >
                            {getStatusIcon(order.status)}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-900">${order.amount.toFixed(2)}</td>
                        <td className="py-4 px-4">
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-6">
                <Package className="w-8 h-8 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Add Product</h3>
                <p className="text-white/80 mb-4 text-sm">Add new products to your catalog and start selling</p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm">
                  Add Product
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                <Users className="w-8 h-8 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Manage Users</h3>
                <p className="text-white/80 mb-4 text-sm">View and manage customer accounts and permissions</p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm">
                  Manage Users
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                <BarChart3 className="w-8 h-8 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Analytics</h3>
                <p className="text-white/80 mb-4 text-sm">View detailed reports and business insights</p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
