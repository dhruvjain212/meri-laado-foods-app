import { Home, FlaskConical, Sparkles, Heart, Gift } from "lucide-react"

const reasons = [
  {
    icon: <Home size={28} className="text-primary" />,
    title: "Homemade in Small Batches",
    desc: "Every order is freshly prepared at home, not in a factory. Small batches ensure consistent quality and personal attention.",
  },
  {
    icon: <FlaskConical size={28} className="text-primary" />,
    title: "No Preservatives or Chemicals",
    desc: "We use zero artificial additives, stabilizers, or preservatives. What you get is exactly what nature intended — pure and clean.",
  },
  {
    icon: <Sparkles size={28} className="text-primary" />,
    title: "Premium Desi Ghee & Natural Ingredients",
    desc: "From hand-picked dry fruits to pure jaggery and home made desi ghee, every ingredient is chosen for maximum nourishment.",
  },
  {
    icon: <Heart size={28} className="text-primary" />,
    title: "Prepared with Care for Mothers",
    desc: "Each recipe is crafted keeping the unique nutritional needs of pregnant and new mothers in mind — with love in every bite.",
  },
  {
  icon: <Gift size={28} className="text-primary" />,
  title: "Perfect for You & Thoughtful Gifting",
  desc: "Whether you’re nourishing yourself or sending love to a mother-to-be, our products make a meaningful gift. Something you’d proudly share with your loved ones.",
  }
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Why Meri Laado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Made the Way Grandmothers Made It
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            We bring back the age-old tradition of nourishing mothers with homemade goodness — because modern mothers deserve the same care.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground text-balance">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Urgency strip */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-sm font-semibold text-primary">
            Limited Daily Batches
          </span>
          <span className="hidden sm:inline text-primary/40">•</span>
          <span className="text-sm text-foreground/70">
            We prepare limited quantities daily to ensure every product maintains its freshness and quality.
          </span>
        </div>
      </div>
    </section>
  )
}
