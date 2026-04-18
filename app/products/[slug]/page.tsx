import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import {
  ArrowLeft,
  MessageCircle,
  Star,
  Check,
  Truck,
  Shield,
  Package,
  Leaf,
} from "lucide-react"
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
    openGraph: {
      title: `${product.name} - Meri Laado Foods`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary/50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/#products"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back button (mobile) */}
      <div className="md:hidden px-4 py-3">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>

      {/* Product Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-md">
                    {Math.round(
                      ((product.originalPrice - product.price) / product.originalPrice) * 100
                    )}
                    % OFF
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center gap-2 bg-secondary rounded-2xl p-4 text-center">
                  <Leaf size={20} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">100% Natural</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-secondary rounded-2xl p-4 text-center">
                  <Shield size={20} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">No Preservatives</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-secondary rounded-2xl p-4 text-center">
                  <Truck size={20} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">Pan India Delivery</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Name & Tagline */}
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {product.tagline}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews.length} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">Rs. {product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    Rs. {product.originalPrice}
                  </span>
                )}
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {product.unit}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>

              {/* Benefits */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Benefits:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(product.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full text-base font-semibold hover:bg-[#1ebe5d] transition-colors shadow-md"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Package size={20} />
                  Enquire Now
                </Link>
              </div>

              {/* Delivery info */}
              <div className="bg-secondary/50 rounded-2xl p-4 flex items-start gap-3">
                <Truck size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Free Delivery on all Orders
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Delivery within 4-5 business days across India. Freshly prepared before dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ingredients */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Ingredients
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                How to Use
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
            </div>

            {/* Storage */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Storage Instructions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.storage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              What Mothers Say About {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((review) => (
              <div
                key={review.name}
                className="bg-card rounded-3xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-foreground/80 leading-relaxed italic mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-bold text-primary">Rs. {p.price}</span>
                    {p.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {p.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to all products */}
          <div className="text-center mt-10">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
