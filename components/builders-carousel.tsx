"use client"

import React, { useState } from "react"

type Builder = {
  name: string
  builder: string
  theme: string
  rating: string
  note: string
  image: string
}

const BUILDERS: Builder[] = [
  {
    name: "Alex_Luxury",
    builder: "Diego_Calvin",
    theme: "Modern",
    rating: "10000/10",
    note: "kerenn pokok nya, sukses truss para builder disinii!!",
    image: "https://iili.io/fVhqU9n.png",
  },
  {
    name: "Zed Williams",
    builder: "Diego Calvin",
    theme: "Modern Minimal",
    rating: "100/100",
    note: "Builder fast respon saat chat & minta revisi, pengerjaannya cepat, hasil dekor sesuai/melebihi ekspetasi.",
    image: "https://iili.io/fVhqiMl.png",
  },
  {
    name: "Rio Washington",
    builder: "Jack Schneider",
    theme: "Modern",
    rating: "100000/10",
    note: "Mantap keren pokokna mah",
    image: "https://iili.io/fVhq4tf.png",
  },
  {
    name: "Gary Watshon",
    builder: "Zir Yukey",
    theme: "Modern Minimalist",
    rating: "1000/100",
    note: "Mantap dan gokil emang AK-RT ini",
    image: "https://iili.io/fVhqgus.png",
  },
]

export function BuildersCarousel() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Builders</h4>

        <div className="overflow-hidden">
          <div className="marquee relative">
            <div className="track flex items-center">
              {BUILDERS.concat(BUILDERS).map((b, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 md:w-56 p-3 mr-4 bg-background/60 border border-border rounded-md hover:scale-105 transform transition-transform duration-200"
                >
                  <button
                    onClick={() => setPreview(b.image)}
                    className="w-full h-28 md:h-32 mb-2 overflow-hidden rounded-md block"
                    aria-label={`Preview ${b.name}`}
                  >
                    <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                  </button>
                  <div className="font-semibold text-sm">{b.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{b.builder} • {b.theme}</div>
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

      <style jsx>{`
        .marquee { width: 100%; }
        .track { display: flex; gap: 0.75rem; animation: scroll 26s linear infinite; }
        .marquee:hover .track { animation-play-state: paused; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
