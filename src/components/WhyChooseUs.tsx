import { Truck, RotateCcw, Headphones, ShieldCheck } from "lucide-react"
import NeonText from "./NeonText"
import ParallaxSection from "./ParallaxSection"

const features = [
  {
    icon: Truck,
    title: "Fast & Free Shipping",
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: ShieldCheck,
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
    <div className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold mb-6">
            <NeonText color="green">Why Choose Us</NeonText>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
            dolor tempor tristique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ParallaxSection key={index} speed={0.1}>
              <div
                className="text-center group feature-card p-6 rounded-2xl bg-white hover:bg-green-50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300 neon-icon-bg">
                  <feature.icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-gray-800 font-semibold text-xl mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </div>
  )
}
