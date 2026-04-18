import Image from "next/image"
import { Heart, Star, Award } from "lucide-react"

const highlights = [
  { icon: <Heart size={16} className="text-primary" />, text: "Started with love & a mother's instinct" },
  { icon: <Star size={16} className="text-primary" />, text: "Quality over quantity, always" },
  { icon: <Award size={16} className="text-primary" />, text: "Premium ingredients, tested recipes" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[520px] shadow-xl">
              <Image
                src="/images/about-founder.jpg"
                alt="Founder preparing homemade maternity nutrition"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 md:-right-6 bg-card rounded-2xl shadow-lg border border-border p-4 flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">Made with Love</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Since Day One</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
                Born from a Mother&apos;s Love
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Meri Laado Foods was born when our founder realized how difficult it was for modern mothers to access the traditional nourishment their grandmothers received — delicious, homemade, pure, and made with intention.
              </p>
              <p>
                Watching family members struggle to find genuine, chemical-free postpartum nutrition, she decided to revive the ancient recipes her family had passed down through generations. Using the same kitchen, the same methods, and the same love.
              </p>
              <p>
                We are a small, quality-first brand. We don&apos;t mass produce. We don&apos;t cut corners. Every batch is made by hand, with premium ingredients, specifically for the mothers who deserve the best care during the most important time of their lives.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{h.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm self-start"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
