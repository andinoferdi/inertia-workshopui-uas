"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith("/admin")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {!isAdminRoute && <Navbar />}
          <main className="min-h-screen">{children}</main>
          {!isAdminRoute && <Footer />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
