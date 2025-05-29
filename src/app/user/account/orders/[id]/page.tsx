import React from "react"
import AccountSidebar from "@/components/AccountSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Package, CheckCircle, Clock, MapPin, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock order data
const orderData = {
  id: "ORD-2024-001",
  status: "shipped",
  orderDate: "2024-01-15",
  estimatedDelivery: "2024-01-20",
  total: 1598000,
  shippingCost: 50000,
  tax: 159800,
  subtotal: 1388200,
  shippingAddress: {
    name: "John Doe",
    address: "Jl. Sudirman No. 123",
    city: "Jakarta",
    state: "DKI Jakarta",
    zipCode: "12190",
    phone: "+62 812 3456 7890",
  },
  paymentMethod: {
    type: "Credit Card",
    last4: "4242",
    brand: "Visa",
  },
  items: [
    {
      id: 1,
      name: "Nordic Chair",
      price: 299000,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Modern Sofa",
      price: 1299000,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  tracking: [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30",
      description: "Your order has been placed successfully",
      completed: true,
    },
    {
      status: "Payment Confirmed",
      date: "2024-01-15 10:35",
      description: "Payment has been confirmed",
      completed: true,
    },
    {
      status: "Processing",
      date: "2024-01-16 09:00",
      description: "Your order is being prepared",
      completed: true,
    },
    {
      status: "Shipped",
      date: "2024-01-17 14:20",
      description: "Your order has been shipped",
      completed: true,
    },
    {
      status: "Out for Delivery",
      date: "",
      description: "Your order is out for delivery",
      completed: false,
    },
    {
      status: "Delivered",
      date: "",
      description: "Your order has been delivered",
      completed: false,
    },
  ],
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "processing":
      return "bg-blue-100 text-blue-800"
    case "shipped":
      return "bg-purple-100 text-purple-800"
    case "delivered":
      return "bg-green-100 text-green-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Order Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AccountSidebar />

          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Link href="/user/account/orders">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Orders
                </Button>
              </Link>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Order #{resolvedParams.id}</h2>
                <p className="text-gray-500">Placed on {new Date(orderData.orderDate).toLocaleDateString("id-ID")}</p>
              </div>
            </div>

            {/* Order Status */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Order Status</CardTitle>
                  <Badge className={getStatusColor(orderData.status)}>
                    {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.tracking.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                          {step.status}
                        </h4>
                        <p className="text-sm text-gray-500">{step.description}</p>
                        {step.date && <p className="text-xs text-gray-400 mt-1">{step.date}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                        <p className="text-sm text-gray-500">Rp {item.price.toLocaleString("id-ID")} each</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Rp {orderData.subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>Rp {orderData.shippingCost.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>Rp {orderData.tax.toLocaleString("id-ID")}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>Rp {orderData.total.toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="font-medium">{orderData.shippingAddress.name}</p>
                    <p className="text-sm text-gray-600">{orderData.shippingAddress.address}</p>
                    <p className="text-sm text-gray-600">
                      {orderData.shippingAddress.city}, {orderData.shippingAddress.state}{" "}
                      {orderData.shippingAddress.zipCode}
                    </p>
                    <p className="text-sm text-gray-600">{orderData.shippingAddress.phone}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="font-medium">{orderData.paymentMethod.type}</p>
                    <p className="text-sm text-gray-600">
                      {orderData.paymentMethod.brand} ending in {orderData.paymentMethod.last4}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline">
                <Package className="h-4 w-4 mr-2" />
                Track Package
              </Button>
              <Button variant="outline">Download Invoice</Button>
              {orderData.status === "delivered" && <Button>Leave Review</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
