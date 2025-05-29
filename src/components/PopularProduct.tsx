import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Nordic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    price: "$50.00",
    image: "/images/product-1.png",
  },
  {
    id: 2,
    name: "Kruzo Aero Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    price: "$78.00",
    image: "/images/product-2.png",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    price: "$43.00",
    image: "/images/product-3.png",
  },
]

export default function PopularProduct() {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              {/* Small Product Image */}
              <div className="flex-shrink-0 relative">
                <Link href={`/user/shop/${product.id}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain cursor-pointer hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Action Icons */}
                <div className="absolute -bottom-2 -right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-white text-sm">+</span>
                  </button>
                  <Link
                    href={`/user/shop/${product.id}`}
                    className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <Eye className="text-white w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Product Content */}
              <div className="flex-1 min-w-0 space-y-3">
                <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">{product.price}</span>
                  <Link
                    href={`/user/shop/${product.id}`}
                    className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
