export default function ProductLoading() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Breadcrumb skeleton */}
      <div className="bg-secondary/40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-4 w-10 rounded-full bg-border animate-pulse" />
            <div className="h-3 w-3 rounded-full bg-border animate-pulse" />
            <div className="h-4 w-16 rounded-full bg-border animate-pulse" />
            <div className="h-3 w-3 rounded-full bg-border animate-pulse" />
            <div className="h-4 w-28 rounded-full bg-border animate-pulse" />
          </div>
        </div>
      </div>

      {/* Product hero skeleton */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image skeleton */}
            <div className="aspect-square rounded-2xl bg-border/60 animate-pulse" />

            {/* Info skeleton */}
            <div className="flex flex-col gap-5">
              <div className="h-3 w-24 rounded-full bg-border animate-pulse" />
              <div className="space-y-2">
                <div className="h-9 w-3/4 rounded-lg bg-border animate-pulse" />
                <div className="h-9 w-1/2 rounded-lg bg-border animate-pulse" />
              </div>
              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 rounded bg-border animate-pulse" />
                  ))}
                </div>
                <div className="h-4 w-20 rounded-full bg-border animate-pulse" />
              </div>
              {/* Price */}
              <div className="flex items-baseline gap-3">
                <div className="h-8 w-28 rounded-lg bg-border animate-pulse" />
                <div className="h-5 w-20 rounded-lg bg-border animate-pulse" />
              </div>
              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded-full bg-border animate-pulse" />
                <div className="h-4 w-full rounded-full bg-border animate-pulse" />
                <div className="h-4 w-2/3 rounded-full bg-border animate-pulse" />
              </div>
              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-border animate-pulse flex-shrink-0" />
                    <div className="h-4 w-full rounded-full bg-border animate-pulse" />
                  </div>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="flex-1 h-12 rounded-full bg-border animate-pulse" />
                <div className="flex-1 h-12 rounded-full bg-border animate-pulse" />
              </div>
              {/* Delivery bar */}
              <div className="h-14 rounded-xl bg-border/60 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Details grid skeleton */}
      <section className="py-10 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-5 border border-border space-y-3">
                <div className="h-5 w-28 rounded-lg bg-border animate-pulse" />
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-border animate-pulse flex-shrink-0" />
                      <div className="h-4 rounded-full bg-border animate-pulse" style={{ width: `${60 + j * 10}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews skeleton */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 w-48 rounded-lg bg-border animate-pulse mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-5 border border-border space-y-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-3.5 w-3.5 rounded bg-border animate-pulse" />
                  ))}
                </div>
                <div className="space-y-1.5">
                  <div className="h-4 w-full rounded-full bg-border animate-pulse" />
                  <div className="h-4 w-full rounded-full bg-border animate-pulse" />
                  <div className="h-4 w-2/3 rounded-full bg-border animate-pulse" />
                </div>
                <div className="pt-3 border-t border-border flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-border animate-pulse flex-shrink-0" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-4 w-24 rounded-full bg-border animate-pulse" />
                    <div className="h-3 w-16 rounded-full bg-border animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related skeleton */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 w-44 rounded-lg bg-border animate-pulse mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden border border-border">
                <div className="h-44 bg-border/60 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-5 w-36 rounded-lg bg-border animate-pulse" />
                  <div className="h-4 w-20 rounded-full bg-border animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
