"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CartTable from "@/components/CartTable";

export default function Cart() {
  const headerRef = useScrollAnimation("animate-fade-in-up", { triggerOnce: true });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div
            ref={headerRef as any}
            className="text-center animate-fade-in-up"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Shopping Cart
            </h1>
            <p className="text-gray-600 text-lg">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <CartTable />

      <style jsx>{`
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
