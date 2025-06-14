"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Heart, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import ParticleBackground from "@/components/ParticleBackground"
import NeonText from "@/components/NeonText"
import ParallaxSection from "@/components/ParallaxSection"

// Mock data for product
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: "1",
      name: "Nordic Chair",
      price: 50.0,
      originalPrice: 65.0,
      rating: 4.8,
      reviews: 124,
      description:
        "A beautifully crafted Nordic-style chair that combines comfort with minimalist design. Made from high-quality materials, this chair is perfect for modern homes and offices.",
      features: [
        "Premium solid wood construction",
        "Ergonomic design for maximum comfort",
        "Sustainable materials",
        "Easy assembly required",
        "5-year warranty included",
      ],
      specifications: {
        Material: "Solid Oak Wood",
        Dimensions: "45cm W x 50cm D x 80cm H",
        Weight: "8.5 kg",
        Color: "Natural Wood",
        Assembly: "Required",
      },
      images: ["/images/product-1.png", "/images/product-2.png", "/images/product-3.png"],
      inStock: true,
      category: "Chairs",
    },
    "2": {
      id: "2",
      name: "Kruzo Aero Chair",
      price: 78.0,
      originalPrice: 95.0,
      rating: 4.9,
      reviews: 89,
      description:
        "The Kruzo Aero Chair features an innovative design that provides exceptional comfort and support. Perfect for long working hours or relaxing at home.",
      features: [
        "Breathable mesh back",
        "Adjustable height mechanism",
        "360-degree swivel base",
        "Lumbar support included",
        "Modern aesthetic design",
      ],
      specifications: {
        Material: "Mesh & Steel",
        Dimensions: "60cm W x 60cm D x 95cm H",
        Weight: "12 kg",
        Color: "Black/Silver",
        Assembly: "Required",
      },
      images: ["/images/product-2.png", "/images/product-1.png", "/images/product-3.png"],
      inStock: true,
      category: "Office Chairs",
    },
    "3": {
      id: "3",
      name: "Ergonomic Chair",
      price: 43.0,
      originalPrice: 55.0,
      rating: 4.6,
      reviews: 156,
      description:
        "Designed with ergonomics in mind, this chair provides excellent support for your back and promotes good posture throughout the day.",
      features: [
        "Ergonomic lumbar support",
        "Padded armrests",
        "Durable fabric upholstery",
        "Smooth rolling casters",
        "Adjustable seat height",
      ],
      specifications: {
        Material: "Fabric & Plastic",
        Dimensions: "55cm W x 55cm D x 90cm H",
        Weight: "10 kg",
        Color: "Gray",
        Assembly: "Required",
      },
      images: ["/images/product-3.png", "/images/product-1.png", "/images/product-2.png"],
      inStock: true,
      category: "Office Chairs",
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

const relatedProducts = [
  { id: "2", name: "Kruzo Aero Chair", price: 78.0, image: "/images/product-2.png" },
  { id: "3", name: "Ergonomic Chair", price: 43.0, image: "/images/product-3.png" },
  { id: "1", name: "Modern Desk Chair", price: 65.0, image: "/images/product-1.png" },
]

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const product = getProduct(resolvedParams.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        })
      })
    }
  }, [])

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Breadcrumb */}
      <ParallaxSection speed={0.5}>
        <div className="bg-gray-50 py-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/user/shop"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors transform hover:scale-105"
              data-aos="fade-right"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Product Details */}
      <ParallaxSection speed={0.3}>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4" data-aos="fade-right">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 lg:h-[500px] object-contain bg-gray-50 rounded-2xl shadow-lg"
                />
                {product.originalPrice > product.price && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Sale
                  </span>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-110 ${
                      selectedImage === index ? "border-primary shadow-lg" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6" data-aos="fade-left">
              <div>
                <p className="text-primary font-medium mb-2 animate-pulse">{product.category}</p>
                <NeonText
                  text={product.name}
                  className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                  intensity="subtle"
                />

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-colors duration-300 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <NeonText
                    text={`$${product.price.toFixed(2)}`}
                    className="text-3xl font-bold text-gray-800"
                    intensity="subtle"
                  />
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium text-gray-800">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors transform hover:scale-110"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium bg-gray-50">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors transform hover:scale-110"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-gray-600">5 Year Warranty</span>
                </div>
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span className="text-sm text-gray-600">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16" data-aos="fade-up">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                {["description", "specifications", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="max-w-4xl" data-aos="fade-in">
                  <NeonText
                    text="Product Features"
                    className="text-xl font-semibold text-gray-800 mb-4"
                    intensity="subtle"
                  />
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="max-w-4xl" data-aos="fade-in">
                  <NeonText
                    text="Specifications"
                    className="text-xl font-semibold text-gray-800 mb-4"
                    intensity="subtle"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100 transform hover:scale-105 transition-transform duration-300"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <span className="font-medium text-gray-800">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="max-w-4xl" data-aos="fade-in">
                  <NeonText
                    text="Customer Reviews"
                    className="text-xl font-semibold text-gray-800 mb-4"
                    intensity="subtle"
                  />
                  <div className="space-y-6">
                    {[1, 2, 3].map((review, index) => (
                      <div
                        key={review}
                        className="border-b border-gray-100 pb-6 transform hover:scale-105 transition-transform duration-300"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                            JD
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">John Doe</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          Great quality chair! Very comfortable and looks exactly as pictured. Assembly was
                          straightforward and the materials feel premium.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16" data-aos="fade-up">
            <NeonText text="Related Products" className="text-2xl font-bold text-gray-800 mb-8" intensity="subtle" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct, index) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/user/shop/${relatedProduct.id}`}
                    className="group transform hover:scale-105 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 mb-4 group-hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 font-medium">${relatedProduct.price.toFixed(2)}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Floating Elements */}
      <div
        className="fixed top-1/4 left-4 w-2 h-2 bg-primary/30 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="fixed top-3/4 right-4 w-1 h-1 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
