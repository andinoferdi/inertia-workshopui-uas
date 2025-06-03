"use client"

import type { ReactNode } from "react"

interface NeonTextProps {
  children: ReactNode
  className?: string
  color?: "green" | "white" | "blue"
}

export default function NeonText({ children, className = "", color = "green" }: NeonTextProps) {
  const colorClasses = {
    green: "neon-green",
    white: "neon-white",
    blue: "neon-blue",
  }

  return <span className={`${colorClasses[color]} ${className}`}>{children}</span>
}
