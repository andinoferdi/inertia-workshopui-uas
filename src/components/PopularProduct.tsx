import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Nordic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    image: "/images/product-1.png",
  },
  {
    name: "Kruzo Aero Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    image: "/images/product-2.png",
  },
  {
    name: "Ergonomic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    image: "/images/product-3.png",
  },
]

export default function PopularProduct() {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Small Product Image */}
              <div className="flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Product Content */}
              <div className="flex-1 min-w-0 space-y-3">
                <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
