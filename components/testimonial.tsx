"use client"

export function Testimonial() {
  const testimonial = {
    name: "Jake Jokovic",
    employee: "@[HoA] Sufaz Schneiderlin (discord)",
    concept: "RoadTrain Pokemon pika pika",
    rating: 10,
    note: "Emang the best ini orang,nice banget loh ya.",
    image: "https://iili.io/fVXSXXS.png",
  }

  return (
    <section id="testimonial" className="py-12 px-4 md:px-28 bg-background">
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">Testimoni</h3>

        <div className="flex flex-col md:flex-row items-start gap-4 bg-border/5 border border-border p-4 md:p-6 rounded">
          <div className="w-28 h-28 md:w-40 md:h-40 relative rounded overflow-hidden bg-muted-foreground/10 flex-shrink-0">
            {/* External image provided by user */}
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-semibold text-base md:text-lg">{testimonial.name}</div>
                <div className="font-mono text-[11px] text-muted-foreground mt-1">Employee: {testimonial.employee}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">{testimonial.concept}</div>
            </div>

            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <div className="text-yellow-400 text-sm">{Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}</div>
              <div className="font-mono text-[11px] text-muted-foreground">{testimonial.rating}/10</div>
            </div>

            <p className="mt-3 text-sm leading-snug">{testimonial.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
