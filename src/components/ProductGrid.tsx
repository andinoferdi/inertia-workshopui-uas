import Image from "next/image"
import Link from "next/link"

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
            <div key={index} className="flex flex-col">
              <Link href="#" className="group block text-center relative pb-12 cursor-pointer h-full">
                <div className="mb-6 sm:mb-8 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto transition-transform group-hover:-translate-y-6"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-800 font-bold text-xl">{product.price}</p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
