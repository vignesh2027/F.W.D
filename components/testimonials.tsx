"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Engineering Graduate, Class of 2015",
    content:
      "Sir's vision transformed my life. From a rural background, I never thought I'd become an engineer. Today, I lead a team of 50 professionals.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Medical Professional",
    content:
      "The healthcare education I received was world-class. More importantly, I learned the value of compassionate service to society.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "Nursing Graduate & Healthcare Leader",
    content:
      "Sir empowered women like me to pursue careers in healthcare. His legacy continues through every patient we serve with care.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student & Alumni <span className="text-accent">Voices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those whose lives have been transformed
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xl text-foreground mb-8 leading-relaxed italic">"{testimonials[current].content}"</p>
            <div>
              <p className="font-bold text-lg text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
