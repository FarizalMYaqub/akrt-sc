"use client"

import React, { useEffect, useRef, useState } from "react"

type Testi = {
  name: string
  employee: string
  concept: string
  rating: string
  note: string
  image: string
}

const TESTIMONIALS: Testi[] = [
  {
    name: "Lisa Caroline",
    employee: "@[VCEO] Konstantin Lavrenti",
    concept: "RoadTrain Hello Kitty",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    note: "Cepet jir 30 menit doang",
    image: "https://iili.io/fVh2gUu.png",
  },
  {
    name: "Nathan Ward",
    employee: "@[VCEO] Konstantin Lavrenti",
    concept: "RoadTrain Spotify",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    note: "Hasil yang bagus dan memuaskan, terimakasih.",
    image: "https://iili.io/fVh3cdu.png",
  },
  {
    name: "Ladesh Bhavin",
    employee: "@[VCEO] Konstantin Lavrenti",
    concept: "RoadTrain Google",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    note: "MANTAP, pengerjaannya cepet dan sesuai",
    image: "https://iili.io/fVhFnEP.jpg",
  },
  {
    name: "Anthony Luis",
    employee: "@[HoA] Sufaz Schneiderlin",
    concept: "Roadtrian \"Miles Morales\"",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    note: "Mantap pokoknya dah, pengerjaan cepat, hasil bagus, dan bikin puas.",
    image: "https://iili.io/fVhFQF1.png",
  },
]

export function TestimonialsCarousel() {
  const [preview, setPreview] = useState<string | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const posRef = useRef(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // speed in pixels per second
    const speed = 45

    const step = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time
      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      if (!paused) {
        const fullWidth = track.scrollWidth / 2
        posRef.current += speed * delta
        if (posRef.current >= fullWidth) posRef.current -= fullWidth
        track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      posRef.current = 0
      if (track) track.style.transform = "translate3d(0,0,0)"
    }

    window.addEventListener("resize", onResize)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [paused])

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Testimonials</h4>

        <div className="overflow-hidden" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
          <div className="relative">
            <div ref={trackRef} className="flex items-center will-change-transform" style={{ whiteSpace: "nowrap" }}>
              {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 md:w-56 p-3 mr-4 bg-background/60 border border-border rounded-md hover:scale-105 transform transition-transform duration-200"
                >
                  <button
                    onClick={() => setPreview(t.image)}
                    className="w-full h-28 md:h-32 mb-2 overflow-hidden rounded-md block"
                    aria-label={`Preview ${t.name}`}
                  >
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </button>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{t.employee}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {preview && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setPreview(null)}
          >
            <img src={preview} alt="preview" className="max-h-[80vh] max-w-[90vw] rounded" />
          </div>
        )}
      </div>
    </section>
  )
}
