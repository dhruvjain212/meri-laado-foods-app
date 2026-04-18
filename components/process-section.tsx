import { Search, ChefHat, Package, Truck } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: <Search size={26} className="text-primary" />,
    title: "Ingredient Selection",
    desc: "We handpick only the finest natural ingredients — organic dry fruits, pure jaggery, premium methi, and home made desi ghee.",
  },
  {
    step: "02",
    icon: <ChefHat size={26} className="text-primary" />,
    title: "Homemade Preparation",
    desc: "Prepared in our home kitchen using traditional recipes passed down through generations. Every batch is made with patience, care, and love.",
  },
  {
    step: "03",
    icon: <Package size={26} className="text-primary" />,
    title: "Fresh Packing",
    desc: "Freshly made products are packed hygienically in food-safe, airtight packaging to preserve taste, aroma, and nutritional integrity.",
  },
  {
    step: "04",
    icon: <Truck size={26} className="text-primary" />,
    title: "Delivered with Care",
    desc: "Your order is dispatched promptly and handled with care throughout delivery — ensuring it reaches you as fresh as the day it was made.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Our Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            From Our Kitchen to Your Doorstep
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every step is carried out with intention and care — because the mothers we serve deserve nothing less.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-4">
                {/* Icon circle */}
                <div className="w-16 h-16 bg-card rounded-2xl shadow-md border border-border flex items-center justify-center relative">
                  {s.icon}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-primary text-primary-foreground rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality promise */}
        <div className="mt-16 bg-card rounded-2xl border border-border p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm">
          <div className="w-14 h-14 bg-accent rounded-xl flex-shrink-0 flex items-center justify-center mx-auto md:mx-0">
            <span className="text-2xl font-serif font-bold text-primary">★</span>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Our Quality Promise</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-xl">
              We prepare limited batches daily to ensure quality. Every product is made to order so you receive the freshest possible nourishment for you and your baby.
            </p>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Meri%20Laado%20Foods"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 md:ml-auto bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
          >
            Order Today
          </a>
        </div>
      </div>
    </section>
  )
}
