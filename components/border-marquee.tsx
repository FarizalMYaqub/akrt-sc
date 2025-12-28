"use client"

import React, { useEffect, useRef, useState } from "react"

export function BorderMarquee() {
  // order arranged to match requested repeating sequence for a smooth supermarket-style marquee
  const baseItems = ["HUBUNGI 4811", "AKRT", "MENYEDIAKAN JASA IKLAN", "KENDARAAN KERJA KEREN"]
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [items, setItems] = useState<string[]>([...baseItems])

  useEffect(() => {
    // Duplicate items until the track is at least twice the container width
    const ensureWidth = () => {
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) return

      // If track's width is less than twice the container, duplicate
      if (track.scrollWidth < container.clientWidth * 2) {
        setItems((prev) => [...prev, ...baseItems])
      }
    }

    ensureWidth()
    window.addEventListener("resize", ensureWidth)
    return () => window.removeEventListener("resize", ensureWidth)
  }, [])

  return (
    <div className="w-full border-t border-b border-border bg-muted-foreground/3 overflow-hidden" ref={containerRef}>
      <div className="relative overflow-hidden">
        <div className="marquee-inner" style={{ display: "flex", animation: "scroll 26s linear infinite", alignItems: "center" }}>
          <div className="track" ref={trackRef} style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
            {items.map((t, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-wider text-muted-foreground mr-12">
                {t}
              </span>
            ))}
          </div>

          {/* duplicate track for seamless looping */}
          <div className="track" aria-hidden style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
            {items.map((t, i) => (
              <span key={"dup-" + i} className="font-mono text-sm uppercase tracking-wider text-muted-foreground mr-12">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-inner { will-change: transform; }
        /* smoother hardware-accelerated transform */
        @keyframes scroll { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(-50%,0,0); } }
        .track span { display: inline-block; }
      `}</style>
    </div>
  )
}
