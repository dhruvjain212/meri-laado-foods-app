"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Meri%20Laado%20Foods"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all"
    >
      <MessageCircle size={26} className="text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  )
}
