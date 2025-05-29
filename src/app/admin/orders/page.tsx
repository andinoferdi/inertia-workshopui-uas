"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MoreVertical,
  Edit,
  Eye,
  ShoppingCart,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  DollarSign,
  Download,
} from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import AdminHeader from "@/components/AdminHeader"

// Mock data
const orders = [
  {
    id: "ORD-2024-001",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "JD",
    },
    items: [
      { name: "Nordic Chair", quantity: 2, price: 89.99 },
      { name: "Modern Table", quantity: 1, price: 156.0 },
    ],
    total: 335.98,
    status: "completed",
    paymentStatus: "paid",
    shippingAddress: "123 Main St, New York, NY 10001",
    orderDate: "2024-01-25",
    deliveryDate: "2024-01-28",
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-2024-002",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "JS",
    },
    items: [
      { name: "Ergonomic Chair", quantity: 1, price: 43.0 },
      { name: "Desk Lamp", quantity: 1, price: 25.0 },
    ],
    total: 68.0,
    status: "processing",
    paymentStatus: "paid",
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
    orderDate: "2024-01-24",
    deliveryDate: null,
    trackingNumber: null,
  },
  {
    id: "ORD-2024-003",
    customer: {
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "MJ",
    },
    items: [{ name: "Modern Sofa", quantity: 1, price: 299.0 }],
    total: 299.0,
    status: "shipped",
    paymentStatus: "paid",
    shippingAddress: "789 Pine St, Chicago, IL 60601",
    orderDate: "2024-01-23",
    deliveryDate: "2024-01-26",
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-2024-004",
    customer: {
      name: "Sarah Wilson",
      email: "sarah@example.com",
      avatar: "SW",
    },
    items: [
      { name: "Vintage Table", quantity: 1, price: 156.0 },
      { name: "Storage Cabinet", quantity: 2, price: 89.0 },
    ],
    total: 334.0,
    status: "pending",
    paymentStatus: "pending",
    shippingAddress: "321 Elm St, Miami, FL 33101",
    orderDate: "2024-01-22",
    deliveryDate: null,
    trackingNumber: null,
  },
  {
    id: "ORD-2024-005",
    customer: {
      name: "David Brown",
      email: "david@example.com",
      avatar: "DB",
    },
    items: [{ name: "Office Chair", quantity: 3, price: 120.0 }],
    total: 360.0,
    status: "cancelled",
    paymentStatus: "refunded",
    shippingAddress: "654 Maple Dr, Seattle, WA 98101",
    orderDate: "2024-01-21",
    deliveryDate: null,
    trackingNumber: null,
  },
]

const statuses = ["All", "pending", "processing", "shipped", "completed", "cancelled"]
const paymentStatuses = ["All", "pending", "paid", "refunded", "failed"]

export default function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("All")
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "refunded":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "failed":
        return "bg-red-100 text-red-800 border-red-200"
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
        return <Truck className="w-3 h-3" />
      case "pending":
        return <AlertCircle className="w-3 h-3" />
      case "cancelled":
        return <AlertCircle className="w-3 h-3" />
      default:
        return null
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "All" || order.status === selectedStatus
    const matchesPaymentStatus = selectedPaymentStatus === "All" || order.paymentStatus === selectedPaymentStatus

    return matchesSearch && matchesStatus && matchesPaymentStatus
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(filteredOrders.map((order) => order.id))
    } else {
      setSelectedOrders([])
    }
  }

  const handleSelectOrder = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedOrders([...selectedOrders, id])
    } else {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id))
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <AdminHeader title="Furni Admin" subtitle="Management Panel" searchPlaceholder="Search orders..." />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AdminSidebar />

          <div className="lg:col-span-4 space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
                <p className="text-gray-600 mt-1">Manage customer orders and track shipments</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,350</p>
                    <p className="text-gray-600 text-sm">Total Orders</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                    <p className="text-gray-600 text-sm">Pending</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                    <p className="text-gray-600 text-sm">Shipped</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1,890</p>
                    <p className="text-gray-600 text-sm">Completed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$45.2K</p>
                    <p className="text-gray-600 text-sm">Revenue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status === "All" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedPaymentStatus}
                  onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {paymentStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status === "All" ? "All Payment" : status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>

                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>

              {selectedOrders.length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-medium">{selectedOrders.length} order(s) selected</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Bulk Update
                      </button>
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                        Export Selected
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6">
                        <input
                          type="checkbox"
                          checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Order</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Customer</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Items</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Total</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Payment</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <input
                            type="checkbox"
                            checked={selectedOrders.includes(order.id)}
                            onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <h4 className="font-medium text-gray-900">{order.id}</h4>
                            {order.trackingNumber && (
                              <p className="text-sm text-gray-500">Track: {order.trackingNumber}</p>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                              {order.customer.avatar}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{order.customer.name}</h4>
                              <p className="text-sm text-gray-500">{order.customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="space-y-1">
                            {order.items.slice(0, 2).map((item, index) => (
                              <div key={index} className="text-sm">
                                <span className="text-gray-900">
                                  {item.quantity}x {item.name}
                                </span>
                              </div>
                            ))}
                            {order.items.length > 2 && (
                              <div className="text-xs text-gray-500">+{order.items.length - 2} more items</div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-gray-900">${order.total.toFixed(2)}</td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}
                          >
                            {getStatusIcon(order.status)}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPaymentStatusColor(order.paymentStatus)}`}
                          >
                            {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-3 h-3" />
                            {order.orderDate}
                          </div>
                          {order.deliveryDate && (
                            <div className="text-xs text-gray-500">Delivered: {order.deliveryDate}</div>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="View">
                              <Eye className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Edit">
                              <Edit className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Print">
                              <Download className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                              <MoreVertical className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {filteredOrders.length} of {orders.length} orders
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
