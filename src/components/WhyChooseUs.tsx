import Image from "next/image"
import { Truck, ShoppingBag, Headphones, RotateCcw } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Fast & Free Shipping",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: ShoppingBag,
    title: "Easy to Shop",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: RotateCcw,
    title: "Hassle Free Returns",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
]

export default function WhyChooseUs() {
  return (
    <div className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">Why Choose Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                dolor tempor tristique.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="space-y-4">
                    <div className="relative inline-block">
                      <IconComponent size={32} className="text-gray-800 relative z-10" strokeWidth={1.5} />
                      <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-secondary/20 rounded-full"></div>
                    </div>
                    <h3 className="text-gray-800 font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/images/why-choose-us-img.jpg"
                alt="Why choose us - Interior design"
                width={600}
                height={500}
                className="rounded-3xl w-full h-auto object-cover"
              />

              {/* Decorative dots pattern */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-30 pointer-events-none">
                <div className="grid grid-cols-8 gap-2">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-secondary rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
