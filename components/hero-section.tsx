"use client"

import Image from "next/image"
import { ShieldCheck, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg1.png"
          alt="Homemade maternity nutrition foods"
          fill
          className="object-cover object-center-[center_80%]"
          priority
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance fade-in-up delay-100">
            Care in{" "}
            <span className="text-primary italic">Every Bite</span>
          </h1>   
         

          {/* Subtext */}
          <p className="mt-5 text-base sm:text-lg text-foreground/75 leading-relaxed max-w-xl fade-in-up delay-200">
            Homemade with love, specially crafted for mothers and their little ones. 
            Small batches. Premium quality ingredients. Pure nourishment — the way your mother made it.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 fade-in-up delay-300">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Meri%20Laado%20Foods"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:bg-primary/90 active:scale-95 transition-all shadow-md"
            >
              Order Now
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border text-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:bg-accent transition-all"
            >
              View Products
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-6 fade-in-up delay-400">
            {[
              { icon: <ShieldCheck size={18} className="text-primary" />, text: "Premium Quality Ingredients" },
              { icon: <Leaf size={18} className="text-primary" />, text: "No Preservatives" },
              { icon: <span className="text-primary text-base font-bold">✦</span>, text: "Limited Daily Batches" },
            ].map((stat) => (
              <div key={stat.text} className="flex items-center gap-2 bg-background/70 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold text-foreground/80 shadow-sm border border-border/50">
                {stat.icon}
                {stat.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <div className="w-5 h-8 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-foreground/40 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
