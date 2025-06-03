"use client"

import { useEffect, useRef } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(animationClass = "animate-fade-in-up", options: UseScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
            if (options.triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!options.triggerOnce) {
            entry.target.classList.remove(animationClass)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [animationClass, options.threshold, options.rootMargin, options.triggerOnce])

  return elementRef
}
