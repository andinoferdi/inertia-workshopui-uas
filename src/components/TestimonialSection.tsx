"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
    author: "Maria Jones",
    position: "CEO, Co-Founder, XYZ Inc.",
    image: "/images/person-1.png",
  },
  {
    quote:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque. Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
    author: "John Smith",
    position: "Marketing Director, ABC Corp",
    image: "/images/person_2.jpg",
  },
  {
    quote:
      "Aliquam vulputate velit imperdiet dolor tempor tristique. Donec facilisis quam ut purus rutrum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac aliquet velit. Integer convallis volutpat dui quis scelerisque.",
    author: "Sarah Wilson",
    position: "Interior Designer, Design Studio",
    image: "/images/person_3.jpg",
  },
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold">Testimonials</h2>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center space-y-12 overflow-hidden">
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform space-y-8 ${
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : index < currentSlide
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                  }`}
                >
                  <blockquote className="text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex flex-col items-center space-y-4">
                    <div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-gray-800 font-bold text-sm mb-1">{testimonial.author}</h3>
                      <span className="text-gray-600 text-sm">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-green-800/10 hover:bg-green-800 hover:text-white text-gray-800 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-green-800/10 hover:bg-green-800 hover:text-white text-gray-800 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-green-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
