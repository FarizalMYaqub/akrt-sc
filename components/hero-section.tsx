"use client"

import { useEffect, useRef } from "react"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { FlipWords } from "@/components/ui/shadcn-io/flip-words"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[60vh] flex items-center pl-4 md:pl-20 pr-4 md:pr-8 py-8">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          CATALOG
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <SplitFlapAudioProvider>
          <div className="flex flex-col items-center text-center">
            <div>
              <SplitFlapText text="AKRT" speed={80} />
              <div className="mt-4">
                <SplitFlapMuteToggle />
              </div>
            </div>

            {/* Announcement block (subtitle replacement) */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-4 py-2 rounded font-mono text-sm uppercase tracking-widest text-accent">
                <span>AKRT [</span>
                <FlipWords
                  words={["CEPAT", "SESUAI", "RAMAH", "MURAH"]}
                  duration={2000}
                  className="text-accent font-semibold"
                />
                <span>]</span>
              </div>
            </div>
          </div>
        </SplitFlapAudioProvider>

        <div className="mt-6 flex justify-center">
          <a
            href="https://bit.ly/AKRTInc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-accent bg-accent/10 px-8 py-4 font-mono text-sm uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>

      {/* Floating info tag */}

      {/* HQ location framed box moved above the floating v.01 tag (right side) */}
      <div className="absolute bottom-16 right-4 md:bottom-20 md:right-8">
        <div className="border border-border bg-background/30 backdrop-blur-sm px-4 py-3 font-mono text-sm text-muted-foreground max-w-xs">
          <div className="text-[10px] uppercase tracking-widest text-accent font-semibold">Lokasi HQ</div>
          <div className="mt-1">Celeste Ave. Fort Carson</div>
          <div className="mt-2 text-[10px] text-muted-foreground/70">Open by appointment</div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          v.01 / Livery Catalog
        </div>
      </div>
    </section>
  )
}
