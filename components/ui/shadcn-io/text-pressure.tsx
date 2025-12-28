"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"

interface TextPressureProps {
  text?: string
  fontFamily?: string
  fontUrl?: string
  weight?: boolean
  width?: boolean
  italic?: boolean
  alpha?: boolean
  flex?: boolean
  stroke?: boolean
  scale?: boolean
  textColor?: string
  strokeColor?: string
  strokeWidth?: number
  minFontSize?: number
  className?: string
}

export function TextPressure({
  text = "AKRT",
  fontFamily = "Inter",
  fontUrl,
  weight = true,
  width = false,
  italic = false,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "currentColor",
  strokeColor = "#FF0000",
  strokeWidth = 2,
  minFontSize = 24,
  className = "",
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState(minFontSize)
  const [charWeights, setCharWeights] = useState<number[]>([])
  const [charWidths, setCharWidths] = useState<number[]>([])
  const [charItalics, setCharItalics] = useState<number[]>([])
  const [charAlphas, setCharAlphas] = useState<number[]>([])
  const rafRef = useRef<number | null>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

  const chars = text.split("")

  // Initialize weights/widths
  useEffect(() => {
    setCharWeights(chars.map(() => 400))
    setCharWidths(chars.map(() => 100))
    setCharItalics(chars.map(() => 0))
    setCharAlphas(chars.map(() => 1))
  }, [text])

  // Calculate font size based on container
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const calculateSize = () => {
      const containerWidth = container.offsetWidth
      const charCount = chars.length || 1
      const calculatedSize = Math.max(minFontSize, Math.min(containerWidth / (charCount * 0.6), 200))
      setFontSize(calculatedSize)
    }

    calculateSize()
    window.addEventListener("resize", calculateSize)
    return () => window.removeEventListener("resize", calculateSize)
  }, [chars.length, minFontSize])

  // Mouse tracking and weight calculation
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Get character positions
      const charElements = container.querySelectorAll<HTMLSpanElement>("[data-char]")
      const newWeights: number[] = []
      const newWidths: number[] = []
      const newItalics: number[] = []
      const newAlphas: number[] = []

      charElements.forEach((charEl) => {
        const charRect = charEl.getBoundingClientRect()
        const charCenterX = charRect.left + charRect.width / 2
        const charCenterY = charRect.top + charRect.height / 2

        const distance = Math.hypot(e.clientX - charCenterX, e.clientY - charCenterY)
        const maxDist = 200
        const proximity = Math.max(0, 1 - distance / maxDist)

        // Weight: 400 → 900 based on proximity
        if (weight) {
          newWeights.push(Math.round(400 + proximity * 500))
        } else {
          newWeights.push(400)
        }

        // Width: 100 → 150 based on proximity
        if (width) {
          newWidths.push(Math.round(100 + proximity * 50))
        } else {
          newWidths.push(100)
        }

        // Italic: 0 → 1 based on proximity
        if (italic) {
          newItalics.push(proximity)
        } else {
          newItalics.push(0)
        }

        // Alpha: 0.3 → 1 based on proximity
        if (alpha) {
          newAlphas.push(0.3 + proximity * 0.7)
        } else {
          newAlphas.push(1)
        }
      })

      setCharWeights(newWeights)
      setCharWidths(newWidths)
      setCharItalics(newItalics)
      setCharAlphas(newAlphas)
    },
    [weight, width, italic, alpha],
  )

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null
    // Reset to defaults
    setCharWeights(chars.map(() => 400))
    setCharWidths(chars.map(() => 100))
    setCharItalics(chars.map(() => 0))
    setCharAlphas(chars.map(() => 1))
  }, [chars.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove as any)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as any)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  // Load custom font if provided
  useEffect(() => {
    if (!fontUrl) return

    const style = document.createElement("style")
    style.textContent = `
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}') format('woff2');
        font-weight: 100 900;
        font-stretch: 25% 151%;
        font-style: oblique 0deg 10deg;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [fontFamily, fontUrl])

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{
        fontFamily,
        fontSize: `${fontSize}px`,
        lineHeight: 1,
      }}
    >
      <div className={`flex ${flex ? "justify-between" : "justify-center"} items-center w-full`}>
        {chars.map((char, i) => (
          <span
            key={i}
            data-char
            style={{
              display: "inline-block",
              fontWeight: charWeights[i] || 400,
              fontStretch: `${charWidths[i] || 100}%`,
              fontStyle: charItalics[i] > 0.5 ? "italic" : "normal",
              opacity: charAlphas[i] || 1,
              color: textColor,
              transition: "font-weight 80ms ease-out, font-stretch 80ms ease-out, opacity 80ms ease-out",
              WebkitTextStroke: stroke ? `${strokeWidth}px ${strokeColor}` : undefined,
              WebkitTextFillColor: stroke ? "transparent" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  )
}
