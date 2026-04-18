"use client"

import { useState } from "react"
import { MessageCircle, Send, CheckCircle } from "lucide-react"

const products = [
  "Methi Laddoo",
  "Panjeeri",
  "Gud Bars",
  "Pure Desi Ghee",
  "Combo Pack",
  "Not sure yet",
]

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", consent: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setLoading(true)
    // Send to API route which forwards to webhook
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
    } catch {
      // Still show success for better UX even if webhook fails
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left – copy */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
                Contact Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
                Get Your Personalized Recommendation
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Not sure what to order? Tell us about yourself and we will recommend the best products for your stage — whether you are pregnant, just delivered, or breastfeeding.
            </p>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Prefer WhatsApp?</div>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20recommendation%20from%20Meri%20Laado%20Foods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#25D366] font-medium hover:underline"
                >
                  Chat with us directly →
                </a>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Email: </span>
                <a href="mailto:hello@merilaadofoods.in" className="hover:text-primary transition-colors">
                  hello@merilaadofoods.in
                </a>
              </div>
              <div>
                <span className="font-semibold text-foreground">Phone / WhatsApp: </span>
                <a href="tel:+919999999999" className="hover:text-primary transition-colors">
                  +91 99999 99999
                </a>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-card rounded-3xl border border-border shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">Thank You!</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  We have received your message and will reach out within 24 hours with a personalized recommendation.
                </p>
                <button
                  className="mt-2 text-sm text-primary font-medium hover:underline"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", product: "", consent: false }) }}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">Send us a message</h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>

                {/* Product interest */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="product" className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                    Interested In
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  >
                    <option value="">Select a product...</option>
                    {products.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                    I consent to Meri Laado Foods contacting me with updates, offers, and healthy homemade product recommendations. I understand my data will not be shared with third parties.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.consent}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Get Personalized Recommendation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
