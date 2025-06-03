"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NeonText from "@/components/NeonText";
import {
  Palette,
  Hammer,
  Truck,
  Settings,
  Home,
  Lightbulb,
  CheckCircle,
  Star,
  Clock,
  Shield,
} from "lucide-react";

export default function Services() {
  const headerRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const servicesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-20">
      {/* Simple Header with Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up" ref={headerRef as any}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Services
            </h1>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={servicesRef}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              What We Offer
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive furniture services designed to transform your space
              into something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Custom Design",
                description:
                  "Personalized furniture design tailored to your space, style, and functional requirements.",
                features: [
                  "3D Visualization",
                  "Material Selection",
                  "Color Consultation",
                  "Space Planning",
                ],
                price: "Starting from $200",
              },
              {
                icon: Hammer,
                title: "Handcrafted Manufacturing",
                description:
                  "Expert craftsmen create your furniture using premium materials and traditional techniques.",
                features: [
                  "Premium Materials",
                  "Quality Assurance",
                  "Custom Sizing",
                  "Artisan Craftsmanship",
                ],
                price: "Varies by project",
              },
              {
                icon: Truck,
                title: "Delivery & Installation",
                description:
                  "Professional delivery and installation service to ensure your furniture is perfectly placed.",
                features: [
                  "White Glove Delivery",
                  "Professional Assembly",
                  "Placement Service",
                  "Cleanup",
                ],
                price: "Starting from $150",
              },
              {
                icon: Home,
                title: "Interior Consultation",
                description:
                  "Expert advice on furniture placement, color schemes, and overall interior design.",
                features: [
                  "Home Assessment",
                  "Style Consultation",
                  "Layout Planning",
                  "Decor Recommendations",
                ],
                price: "Starting from $300",
              },
              {
                icon: Settings,
                title: "Furniture Restoration",
                description:
                  "Breathe new life into your existing furniture with our restoration and refinishing services.",
                features: [
                  "Damage Assessment",
                  "Refinishing",
                  "Reupholstering",
                  "Hardware Replacement",
                ],
                price: "Starting from $100",
              },
              {
                icon: Lightbulb,
                title: "Design Consultation",
                description:
                  "One-on-one consultation to help you choose the perfect furniture for your space.",
                features: [
                  "Style Assessment",
                  "Budget Planning",
                  "Product Recommendations",
                  "Timeline Planning",
                ],
                price: "Free with purchase",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 opacity-0 translate-y-8 border border-gray-100"
                style={{
                  animation: `fadeInUp 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <NeonText
                  className="text-2xl font-bold text-gray-800 mb-4"
                >
                  {service.title}
                </NeonText>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={packagesRef}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Service Packages
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated packages designed to meet
              different needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$999",
                description: "Perfect for single room makeovers",
                features: [
                  "Design consultation (2 hours)",
                  "3D room visualization",
                  "Up to 3 furniture pieces",
                  "Basic delivery & setup",
                  "30-day support",
                ],
                popular: false,
              },
              {
                name: "Premium",
                price: "$2,499",
                description: "Comprehensive home transformation",
                features: [
                  "Full home consultation (4 hours)",
                  "3D visualization for all rooms",
                  "Up to 8 furniture pieces",
                  "White glove delivery & installation",
                  "Custom design elements",
                  "90-day support",
                  "Free maintenance visit",
                ],
                popular: true,
              },
              {
                name: "Luxury",
                price: "$4,999",
                description: "Complete luxury experience",
                features: [
                  "Unlimited consultation hours",
                  "Full 3D home modeling",
                  "Unlimited furniture pieces",
                  "Premium delivery & installation",
                  "Custom handcrafted pieces",
                  "1-year warranty & support",
                  "Quarterly maintenance visits",
                  "Priority customer service",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 opacity-0 translate-y-8 ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{
                  animation: `fadeInUp 1s ${0.3 + index * 0.2}s forwards`,
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={processRef}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Our Process
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, here's how we
              bring your vision to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description:
                  "We start with understanding your needs, style preferences, and budget to create a personalized plan.",
                duration: "1-2 hours",
              },
              {
                step: "02",
                title: "Design & Visualization",
                description:
                  "Our designers create detailed 3D visualizations and material selections for your approval.",
                duration: "3-5 days",
              },
              {
                step: "03",
                title: "Manufacturing",
                description:
                  "Our skilled craftsmen begin creating your custom furniture using premium materials.",
                duration: "2-6 weeks",
              },
              {
                step: "04",
                title: "Quality Assurance",
                description:
                  "Every piece undergoes rigorous quality checks to ensure it meets our high standards.",
                duration: "1-2 days",
              },
              {
                step: "05",
                title: "Delivery & Installation",
                description:
                  "Professional delivery and installation team ensures perfect placement in your space.",
                duration: "1 day",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start mb-12 opacity-0"
                style={{
                  animation: `fadeInLeft 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mr-8">
                  <span className="text-white font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Why Choose Our Services?
            </NeonText>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Craftsmanship",
                description:
                  "15+ years of experience in creating exceptional furniture",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "We respect your time and deliver projects on schedule",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "Comprehensive warranty and after-sales support",
              },
              {
                icon: CheckCircle,
                title: "Customer Satisfaction",
                description: "10,000+ happy customers and 5-star reviews",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0"
                style={{
                  animation: `fadeInUp 1s ${0.4 + index * 0.1}s forwards`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
