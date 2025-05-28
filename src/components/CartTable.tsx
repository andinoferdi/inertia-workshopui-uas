"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartTable() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 49.0, quantity: 1, image: "/images/product-1.png" },
    { id: 2, name: "Product 2", price: 49.0, quantity: 1, image: "/images/product-2.png" },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-green-800">
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Image</th>
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Product</th>
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Price</th>
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Quantity</th>
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Total</th>
                  <th className="text-center py-6 sm:py-8 text-gray-800 text-base sm:text-lg font-medium">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center py-4 sm:py-5">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    </td>
                    <td className="text-center py-4 sm:py-5 text-gray-800">{item.name}</td>
                    <td className="text-center py-4 sm:py-5 text-gray-800">${item.price.toFixed(2)}</td>
                    <td className="text-center py-4 sm:py-5">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="mx-4 text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center py-4 sm:py-5 text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="text-center py-4 sm:py-5">
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 text-xl">
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-12 gap-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors text-center"
            >
              Continue Shopping
            </Link>
            <button className="bg-gray-200 text-gray-800 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Update Cart
            </button>
          </div>

          <div className="bg-gray-100 p-6 sm:p-8 rounded-lg w-full lg:w-auto lg:min-w-[320px]">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Cart Totals</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors mt-6 block text-center"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
