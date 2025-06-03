import Image from "next/image"
import Link from "next/link"
import { Eye, Plus } from "lucide-react"

const products = [
  { name: "Nordic Chair", price: "$50.00", image: "/images/product-3.png" },
  { name: "Nordic Chair", price: "$50.00", image: "/images/product-1.png" },
  { name: "Kruzo Aero Chair", price: "$78.00", image: "/images/product-2.png" },
  { name: "Ergonomic Chair", price: "$43.00", image: "/images/product-3.png" },
  { name: "Nordic Chair", price: "$50.00", image: "/images/product-3.png" },
  { name: "Nordic Chair", price: "$50.00", image: "/images/product-1.png" },
  { name: "Kruzo Aero Chair", price: "$78.00", image: "/images/product-2.png" },
  { name: "Ergonomic Chair", price: "$43.00", image: "/images/product-3.png" },
]

export default function ProductGrid() {
  return (
    <div className="py-16 sm:py-20 lg:py-28 pb-24 sm:pb-32 lg:pb-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-4 hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <Link href={`/user/shop/${index + 1}`} className="block mb-4 relative overflow-hidden rounded-xl">
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
                  href={`/user/shop/${index + 1}`}
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Eye className="text-white w-5 h-5" />
                </Link>
              </div>

              {/* Floating dots decoration */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
