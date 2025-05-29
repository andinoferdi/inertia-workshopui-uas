import Image from "next/image"
import Link from "next/link"

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
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-gray-800 text-3xl lg:text-4xl font-bold leading-tight">
              Crafted with excellent material.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
              dolor tempor tristique.
            </p>
            <Link
              href="/user/shop"
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Explore
            </Link>
          </div>

          {products.map((product) => (
            <div key={product.id} className="lg:col-span-1">
              <Link href="/user/cart" className="group block text-center relative pb-16 cursor-pointer">
                <div className="mb-8 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto transition-transform group-hover:-translate-y-6"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-gray-800 font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-800 font-bold text-xl">{product.price}</p>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xl">+</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gray-200 rounded-lg h-0 group-hover:h-3/4 transition-all duration-300 -z-10"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
