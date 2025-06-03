"use client";

import ProductGrid from "@/components/ProductGrid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Shop() {
  const headerRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });

  return (
    <div className="pt-20">
      {/* Simple Header with Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up" ref={headerRef as React.RefObject<HTMLDivElement>}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Shop
            </h1>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="relative z-10">
        <ProductGrid />
      </div>
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
