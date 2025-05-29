import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function Hero({
  title,
  subtitle,
  showButtons = false,
}: HeroProps) {
  return (
    <div className="bg-primary py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="lg:w-5/12 space-y-8">
            <div className="relative z-10">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                  {subtitle}
                </p>
              )}
              {showButtons && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/user/shop"
                    className="bg-secondary text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors text-center"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-white transition-colors text-center"
                  >
                    Explore
                  </Link>
                </div>
              )}
            </div>
          </div>
          {showButtons && (
            <div className="lg:w-7/12 relative">
              <div className="relative">
                <Image
                  src="/images/couch.png"
                  alt="Couch"
                  width={780}
                  height={500}
                  className="relative z-10 max-w-full h-auto"
                  priority
                />
                {/* Decorative dots pattern */}
                <div className="absolute top-10 right-10 w-32 h-32 opacity-20 hidden sm:block">
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-white/30 rounded-full"
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
  );
}
