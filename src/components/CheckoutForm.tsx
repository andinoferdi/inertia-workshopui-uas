"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    createAccount: false,
    shipDifferent: false,
    orderNotes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/user/thankyou")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            Returning customer?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Click here
            </a>{" "}
            to login
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-gray-800 text-2xl font-semibold mb-6">Billing Details</h2>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="country" className="block text-gray-800 font-medium mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                  >
                    <option value="">Select a country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="algeria">Algeria</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="ghana">Ghana</option>
                    <option value="albania">Albania</option>
                    <option value="bahrain">Bahrain</option>
                    <option value="colombia">Colombia</option>
                    <option value="dominican">Dominican Republic</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-800 font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-800 font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-800 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="address" className="block text-gray-800 font-medium mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, unit etc. (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="state" className="block text-gray-800 font-medium mb-2">
                      State / Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-gray-800 font-medium mb-2">
                      Postal / Zip <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="createAccount"
                      checked={formData.createAccount}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-800">Create an account?</span>
                  </label>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="shipDifferent"
                      checked={formData.shipDifferent}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-800">Ship To A Different Address?</span>
                  </label>
                </div>

                <div className="mb-6">
                  <label htmlFor="orderNotes" className="block text-gray-800 font-medium mb-2">
                    Order Notes
                  </label>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Write your notes here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 resize-none"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            {/* Coupon Code */}
            <div className="mb-12">
              <h2 className="text-gray-800 text-2xl font-semibold mb-6">Coupon Code</h2>
              <div className="bg-white p-8 border border-gray-200 rounded-lg">
                <label htmlFor="coupon" className="block text-gray-800 font-medium mb-4">
                  Enter your coupon code if you have one
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Coupon Code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                  />
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Your Order */}
            <div>
              <h2 className="text-gray-800 text-2xl font-semibold mb-6">Your Order</h2>
              <div className="bg-white p-8 border border-gray-200 rounded-lg">
                <table className="w-full mb-8">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 text-gray-800 font-medium">Product</th>
                      <th className="text-right py-3 text-gray-800 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">
                        Top Up T-Shirt <strong className="mx-2">×</strong> 1
                      </td>
                      <td className="py-3 text-right text-gray-800">$250.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-600">
                        Polo Shirt <strong className="mx-2">×</strong> 1
                      </td>
                      <td className="py-3 text-right text-gray-800">$100.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-800 font-semibold">Cart Subtotal</td>
                      <td className="py-3 text-right text-gray-800">$350.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-800 font-bold">Order Total</td>
                      <td className="py-3 text-right text-gray-800 font-bold">$350.00</td>
                    </tr>
                  </tbody>
                </table>

                {/* Payment Methods */}
                <div className="space-y-4 mb-8">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Direct Bank Transfer</h3>
                    <p className="text-gray-600 text-sm">
                      Make your payment directly into our bank account. Please use your Order ID as the payment
                      reference.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Cheque Payment</h3>
                    <p className="text-gray-600 text-sm">
                      Make your payment directly into our bank account. Please use your Order ID as the payment
                      reference.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">PayPal</h3>
                    <p className="text-gray-600 text-sm">
                      Make your payment directly into our bank account. Please use your Order ID as the payment
                      reference.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
