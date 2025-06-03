import Image from "next/image"
import Link from "next/link"
import ParticleBackground from "./ParticleBackground"
import NeonText from "./NeonText"

interface HeroProps {
  title: string
  subtitle?: string
  showButtons?: boolean
}

export default function Hero({ title, subtitle, showButtons = false }: HeroProps) {
  return (
    <div className="bg-primary py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center">
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="lg:w-5/12 space-y-8" data-aos="fade-right">
            <div className="relative z-10">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                <NeonText color="white">{title}</NeonText>
              </h1>
              {subtitle && (
                <p
                  className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {subtitle}
                </p>
              )}
              {showButtons && (
                <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                  <Link
                    href="/user/shop"
                    className="bg-secondary text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg neon-button"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-white transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg hover:bg-white/10"
                  >
                    Explore
                  </Link>
                </div>
              )}
            </div>
          </div>
          {showButtons && (
            <div className="lg:w-7/12 relative" data-aos="fade-left" data-aos-delay="300">
              <div className="relative floating-element">
                <Image
                  src="/images/couch.png"
                  alt="Couch"
                  width={780}
                  height={500}
                  className="relative z-10 max-w-full h-auto"
                  priority
                />
                {/* Animated decorative dots pattern */}
                <div className="absolute top-10 right-10 w-32 h-32 opacity-20 hidden sm:block animated-dots">
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
