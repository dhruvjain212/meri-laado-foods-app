const testimonials = [
  {
    name: "Priya Sharma",
    role: "New mother, Delhi",
    initials: "PS",
    rating: 5,
    quote:
      "The dry fruit laddoos are exactly what my mother used to make after my delivery. I was surprised how fresh and authentic they tasted. My recovery has been so much better this time. Meri Laado Foods is truly a blessing for new moms like me.",
  },
  {
    name: "Ananya Verma",
    role: "Expectant mother, Gurugram",
    initials: "AV",
    rating: 5,
    quote:
      "I was looking for homemade panjeeri for my pregnancy cravings and stumbled upon Meri Laado Foods. The quality is beyond what I expected. You can tell it is made with genuine care — no artificial taste whatsoever. Ordered twice already!",
  },
  {
    name: "Kavita Singh",
    role: "Mother of two, Jaipur",
    initials: "KS",
    rating: 5,
    quote:
      "The desi ghee is absolutely pure — you can smell the difference the moment you open the jar. I gifted the laddoo pack to my sister who just delivered and she calls me every other day asking for more. Highly recommended to every new mother.",
  },
  {
    name: "Ritu Patel",
    role: "Postpartum mother, Ahmedabad",
    initials: "RP",
    rating: 5,
    quote:
      "What touched me most was the personal care. The packaging came with a handwritten note and everything was so fresh. The gud bars became my go-to snack. Genuinely made with love — you can feel it.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            What Mothers Are Saying
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Real words from real mothers who trusted us with their nourishment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-3xl p-7 shadow-sm border border-border flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
