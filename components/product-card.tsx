"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MessageCircle, Loader2 } from "lucide-react"
import type { Product } from "@/lib/products"

export function ProductCard({ p }: { p: Product }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const discount = p.originalPrice
    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    : 0

  function handleNavigate(e: React.MouseEvent) {
    e.preventDefault()
    setLoading(true)
    router.push(`/products/${p.slug}`)
  }

  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div
        className="relative h-52 overflow-hidden block cursor-pointer"
        onClick={handleNavigate}
      >
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Overlay on loading */}
        {loading && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-10">
            <Loader2 size={32} className="text-primary animate-spin" />
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-bold px-2.5 py-1 rounded-full border border-border/60 shadow-sm">
          Made fresh at home
        </div>
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <button
          onClick={handleNavigate}
          className="text-left hover:text-primary transition-colors"
        >
          <h3 className="font-serif text-xl font-semibold text-foreground">{p.name}</h3>
        </button>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">Rs. {p.price}</span>
          {p.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">Rs. {p.originalPrice}</span>
          )}
          <span className="text-xs text-muted-foreground">/ {p.unit}</span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
          {p.description}
        </p>

        {/* Benefit tags */}
        <div className="flex flex-wrap gap-1.5">
          {p.benefits.slice(0, 3).map((b) => (
            <span
              key={b}
              className="text-[10px] bg-accent text-accent-foreground px-2.5 py-1 rounded-full font-medium"
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2 mt-1">
          <button
            onClick={handleNavigate}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors border border-border disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Loading...
              </>
            ) : (
              "View Details"
            )}
          </button>
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent(p.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1ebe5d] transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
