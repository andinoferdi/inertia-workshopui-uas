"use client"

import type React from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Inertia - Modern Interior Design Studio</title>
        <meta name="description" content="Inertia Free Bootstrap 5 Template for Furniture and Interior Design Websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="generator" content="v0.dev" />
      </head>
      <body className="font-sans bg-white text-gray-600 text-sm leading-7 antialiased">
        {!isAdminPage && <Navbar />}
        <main className={isAdminPage ? "min-h-screen" : "min-h-screen"}>{children}</main>
        {!isAdminPage && <Footer />}
      </body>
    </html>
  )
}
