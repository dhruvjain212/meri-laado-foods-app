import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MessageCircle, Star, Check, Truck, ChevronRight } from "lucide-react"
import { getProductBySlug, getAllProductSlugs, products } from "@/lib/products"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }

  return {
    title: `${product.name} - Meri Laado Foods`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3)
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <nav className="bg-secondary/40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <ChevronRight size={14} className="text-muted-foreground" />
            <li>
              <Link href="/#products" className="text-muted-foreground hover:text-primary">
                Products
              </Link>
            </li>
            <ChevronRight size={14} className="text-muted-foreground" />
            <li className="text-foreground font-medium truncate">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-full">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                {product.tagline}
              </p>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews.length} reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-primary">Rs. {product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    Rs. {product.originalPrice}
                  </span>
                )}
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {product.unit}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2">
                {product.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(product.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>

              {/* Delivery */}
              <div className="flex items-center gap-3 bg-secondary/60 rounded-xl p-4 mt-2">
                <Truck size={20} className="text-primary flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-medium text-foreground">Free delivery above Rs. 999</span>
                  <span className="text-muted-foreground"> · Ships in 3-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-10 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-card rounded-2xl p-5 border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Ingredients</h3>
              <ul className="space-y-1.5">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-5 border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">How to Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
            </div>

            <div className="bg-card rounded-2xl p-5 border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Storage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.storage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {product.reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 italic mb-4">&ldquo;{r.comment}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-primary text-sm font-semibold">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-bold text-primary">Rs. {p.price}</span>
                    {p.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {p.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
