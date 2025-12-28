import { HeroSection } from "@/components/hero-section"
import { TruckCatalogSection } from "@/components/truck-catalog-section"
import { BorderMarquee } from "@/components/border-marquee"
import { Testimonial } from "@/components/testimonial"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { BuildersCarousel } from "@/components/builders-carousel"
import { SideNav } from "@/components/side-nav"
import { TestimonialToggle } from "@/components/testimonial-toggle"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <BorderMarquee />
        <Testimonial />
        <TestimonialsCarousel />
        <BuildersCarousel />
        <TruckCatalogSection />

        {/* Footer credit */}
        <footer className="py-8 border-t border-border">
          <div className="text-center font-mono text-xs text-muted-foreground uppercase tracking-widest">
            AKRT INC — Yaqub
          </div>
        </footer>
      </div>
    </main>
  )
}
