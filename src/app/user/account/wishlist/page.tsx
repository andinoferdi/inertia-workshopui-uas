import AccountSidebar from "@/components/AccountSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Nordic Chair",
    price: 299000,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
    addedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Modern Sofa",
    price: 1299000,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
    addedDate: "2024-01-10",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: 899000,
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
    addedDate: "2024-01-05",
  },
]

export default function WishlistPage() {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">My Account</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AccountSidebar />

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
              <span className="text-sm text-gray-600">{wishlistItems.length} items</span>
            </div>

            {wishlistItems.length === 0 ? (
              <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl p-6">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-500 mb-4">Save items you love to your wishlist</p>
                <Link href="/shop">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative mb-4">
                        <Link href={`/shop/${item.id}`}>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer"
                          />
                        </Link>
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                          <Heart className="h-4 w-4 text-red-500 fill-current" />
                        </button>
                        <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link href={`/shop/${item.id}`}>
                            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                              <Eye className="h-4 w-4 text-gray-600" />
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-lg font-bold text-gray-900">Rp {item.price.toLocaleString("id-ID")}</p>
                        <p className="text-xs text-gray-500">
                          Added on {new Date(item.addedDate).toLocaleDateString("id-ID")}
                        </p>

                        <div className="flex gap-2 pt-2">
                          {item.inStock ? (
                            <Button size="sm" className="flex-1">
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" disabled className="flex-1">
                              Out of Stock
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
