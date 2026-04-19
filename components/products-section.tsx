"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

// Gap between cards in pixels
const GAP = 16

export function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activePage, setActivePage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8)

    // Calculate how many cards fit in view
    const cards = Array.from(el.children) as HTMLElement[]
    if (cards.length === 0) return
    const cardWidth = cards[0].offsetWidth
    const cardsPerPage = Math.max(1, Math.round(clientWidth / (cardWidth + GAP)))
    const pages = Math.ceil(products.length / cardsPerPage)
    setTotalPages(pages)

    // Determine current page based on scroll position
    const maxScroll = scrollWidth - clientWidth
    const scrollRatio = maxScroll > 0 ? scrollLeft / maxScroll : 0
    const currentPage = Math.round(scrollRatio * (pages - 1))
    setActivePage(Math.min(currentPage, pages - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateState()
    el.addEventListener("scroll", updateState, { passive: true })
    window.addEventListener("resize", updateState)
    return () => {
      el.removeEventListener("scroll", updateState)
      window.removeEventListener("resize", updateState)
    }
  }, [updateState])

  function scrollToPage(page: number) {
    const el = scrollRef.current
    if (!el) return
    const { scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    const targetScroll = totalPages > 1 ? (page / (totalPages - 1)) * maxScroll : 0
    el.scrollTo({ left: targetScroll, behavior: "smooth" })
  }

  function scrollByCard(dir: "left" | "right") {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[0] as HTMLElement
    const cardWidth = card ? card.offsetWidth + GAP : 280
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" })
  }

  return (
    <section id="products" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Our Products
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Nourishment from Our Kitchen to Yours
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every product is freshly prepared at home with love, using time-tested recipes and the finest natural ingredients.
          </p>
        </div>

        {/* Carousel: left arrow + track + right arrow */}
        <div className="flex items-stretch gap-3">

          {/* Left arrow */}
          <button
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Previous product"
            className="shrink-0 w-11 self-center rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-sm aspect-square"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((p) => (
              <div
                key={p.slug}
                className="snap-start shrink-0 w-[75vw] sm:w-[46vw] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-48px)/4)] flex"
              >
                <ProductCard p={p} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Next product"
            className="shrink-0 w-11 self-center rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-sm aspect-square"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Page indicators (dots) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activePage
                    ? "w-6 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
