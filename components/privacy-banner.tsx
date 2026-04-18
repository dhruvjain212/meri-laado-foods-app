"use client"

import { useState, useEffect } from "react"
import { X, Bell } from "lucide-react"

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("mlf_banner_dismissed")
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem("mlf_banner_dismissed", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-40 max-w-xs sm:max-w-sm w-full bg-card border border-border rounded-2xl shadow-xl p-5 animate-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={dismiss}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>

      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
          <Bell size={16} className="text-primary" />
        </div>
        <div className="flex flex-col gap-2 pr-4">
          <p className="text-sm font-semibold text-foreground">Stay Nourished</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Get updates &amp; exclusive offers for healthy homemade maternity products. We respect your privacy.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <a
              href="#contact"
              onClick={dismiss}
              className="text-xs bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign me up
            </a>
            <button
              onClick={dismiss}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
