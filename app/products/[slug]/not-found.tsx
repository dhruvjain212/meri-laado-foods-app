import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

export default function ProductNotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <Package size={40} className="text-muted-foreground" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
          Product Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the product you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} />
          Browse All Products
        </Link>
      </div>
    </main>
  )
}
