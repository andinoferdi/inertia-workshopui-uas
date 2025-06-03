"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Package,
  Truck,
  Calendar,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderData {
  orderNumber: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  estimatedDelivery: string;
}

export default function ThankYou() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order not found
            </h2>
            <p className="text-gray-600 mb-8">
              We couldn't find your order details.
            </p>
            <Link href="/user/shop">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your purchase
            </p>
            <p className="text-gray-500">Order #{orderData.orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Items
                </h2>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 border border-gray-100 rounded-xl"
                    >
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-semibold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Information */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {orderData.shippingAddress.name}
                      </p>
                      <p className="text-gray-600">
                        {orderData.shippingAddress.address}
                      </p>
                      <p className="text-gray-600">
                        {orderData.shippingAddress.city},{" "}
                        {orderData.shippingAddress.state}{" "}
                        {orderData.shippingAddress.zipCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        Standard Shipping
                      </p>
                      <p className="text-gray-600 text-sm">5-7 business days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        Estimated Delivery
                      </p>
                      <p className="text-gray-600 text-sm">
                        {orderData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Status Timeline */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Status
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Order Confirmed
                      </p>
                      <p className="text-gray-500 text-sm">
                        Your order has been received and confirmed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-400">Processing</p>
                      <p className="text-gray-400 text-sm">
                        We're preparing your items for shipment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-400">Shipped</p>
                      <p className="text-gray-400 text-sm">
                        Your order is on its way
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Actions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${orderData.subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {orderData.shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${orderData.shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">
                      ${orderData.tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-gray-800">
                        ${orderData.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  What's Next?
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    <span>Download Receipt</span>
                    <Download className="w-4 h-4" />
                  </Button>

                  <Button variant="outline" className="w-full justify-between">
                    <span>Track Your Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <Link href="/user/shop" className="block">
                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  If you have any questions about your order, our support team
                  is here to help.
                </p>
                <Link href="/user/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Email Confirmation Notice */}
          <div className="mt-12 text-center bg-gray-100 rounded-2xl p-8">
            <h3 className="font-semibold text-gray-800 mb-2">
              Confirmation Email Sent
            </h3>
            <p className="text-gray-600">
              We've sent a confirmation email with your order details and
              tracking information to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
