"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  // Simplified toaster component without external dependencies
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}
