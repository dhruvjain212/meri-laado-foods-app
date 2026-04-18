import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PrivacyBanner } from "@/components/privacy-banner"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ProductsSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <PrivacyBanner />
    </main>
  )
}
