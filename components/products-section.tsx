import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { products } from "@/lib/products"

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image - Clickable */}
              <Link href={`/products/${p.slug}`} className="relative h-52 overflow-hidden block">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-bold px-2.5 py-1 rounded-full border border-border/60 shadow-sm">
                  Made fresh at home
                </div>
                {/* Discount badge */}
                {p.originalPrice && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <Link href={`/products/${p.slug}`} className="hover:text-primary transition-colors">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{p.name}</h3>
                </Link>
                
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-primary">Rs. {p.price}</span>
                  {p.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">Rs. {p.originalPrice}</span>
                  )}
                  <span className="text-xs text-muted-foreground">/ {p.unit}</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">{p.description}</p>

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
                  <Link
                    href={`/products/${p.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors border border-border"
                  >
                    View Details
                  </Link>
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
          ))}
        </div>
      </div>
    </section>
  )
}
