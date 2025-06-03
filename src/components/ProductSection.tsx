"use client";

import Image from "next/image"
import Link from "next/link"
import { Eye, Plus } from "lucide-react"
import NeonText from "./NeonText"

const products = [
  {
    id: 1,
    name: "Nordic Chair",
    price: "$50.00",
    image: "/images/product-1.png",
  },
  {
    id: 2,
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: "/images/product-2.png",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    price: "$43.00",
    image: "/images/product-3.png",
  },
]

export default function ProductSection() {
  return (
    <div className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
            <h2 className="text-gray-800 text-3xl lg:text-4xl font-bold leading-tight">
              <NeonText color="green">Crafted with excellent material.</NeonText>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
              dolor tempor tristique.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/user/shop"
                className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-lg"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-4 hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100"
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.1}s forwards`,
                  }}
                >
                  <Link href={`/user/shop/${product.id}`} className="block mb-4 relative overflow-hidden rounded-xl">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  <div className="text-center space-y-2">
                    <h3 className="text-gray-800 font-semibold text-lg group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-900 font-bold text-xl group-hover:text-green-700 transition-colors duration-300">
                      {product.price}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                      <Plus className="text-white w-5 h-5" />
                    </button>
                    <Link
                      href={`/user/shop/${product.id}`}
                      className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Eye className="text-white w-5 h-5" />
                    </Link>
                  </div>

                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
