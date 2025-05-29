import Link from "next/link"
import { Package, Eye, Download, Calendar, CreditCard } from "lucide-react"
import AccountSidebar from "@/components/AccountSidebar"

// Mock data for orders
const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 128.0,
    items: [
      { name: "Nordic Chair", quantity: 2, price: 50.0 },
      { name: "Kruzo Aero Chair", quantity: 1, price: 78.0 },
    ],
    shippingAddress: "123 Main St, City, State 12345",
    paymentMethod: "Credit Card ending in 4242",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "Shipped",
    total: 86.0,
    items: [{ name: "Ergonomic Chair", quantity: 2, price: 43.0 }],
    shippingAddress: "123 Main St, City, State 12345",
    paymentMethod: "Credit Card ending in 4242",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-25",
    status: "Processing",
    total: 156.0,
    items: [
      { name: "Nordic Chair", quantity: 1, price: 50.0 },
      { name: "Kruzo Aero Chair", quantity: 1, price: 78.0 },
      { name: "Modern Desk Lamp", quantity: 1, price: 28.0 },
    ],
    shippingAddress: "123 Main St, City, State 12345",
    paymentMethod: "Credit Card ending in 4242",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Shipped":
      return "bg-blue-100 text-blue-800"
    case "Processing":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrderHistory() {
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

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
              <div className="text-sm text-gray-600">{orders.length} orders found</div>
            </div>

            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-200 rounded-2xl p-6">
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{order.id}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {new Date(order.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className="text-lg font-bold text-gray-800">${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3 mb-6">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div>
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-gray-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Shipping Address</h4>
                      <p className="text-gray-600">{order.shippingAddress}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Payment Method</h4>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CreditCard className="w-4 h-4" />
                        {order.paymentMethod}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                    {order.status === "Delivered" && (
                      <Link
                        href="/shop"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Reorder Items
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {orders.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                <Link
                  href="/shop"
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
