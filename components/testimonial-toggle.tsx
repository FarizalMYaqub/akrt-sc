"use client"

import React from "react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Testimonial } from "@/components/testimonial"

export function TestimonialToggle() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Buka Testimoni"
          className="fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg pulse-glow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5H5.5A2.5 2.5 0 0 0 3 6.5V17a2 2 0 0 0 2 2h12l4 3V8.5z" />
          </svg>

          <style jsx>{`
            .pulse-glow {
              animation: pulse 2.2s ease-in-out infinite;
            }

            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 rgba(99,102,241, 0.35); transform: scale(1); }
              50% { box-shadow: 0 0 18px 6px rgba(99,102,241, 0.14); transform: scale(1.04); }
              100% { box-shadow: 0 0 0 0 rgba(99,102,241, 0.0); transform: scale(1); }
            }
          `}</style>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogTitle>Testimoni</DialogTitle>
        <div className="mt-2">
          <Testimonial />
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  )
}
