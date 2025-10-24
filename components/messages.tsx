"use client"

import { useEffect, useRef, useState } from "react"

const messages = [
  {
    quote: "Dream without boundaries, for your potential is limitless.",
    context: "On Ambition & Vision",
  },
  {
    quote: "Let discipline be your compass and compassion your fuel.",
    context: "On Character & Leadership",
  },
  {
    quote: "Your education is a torch lighting up others' lives.",
    context: "On Responsibility & Impact",
  },
  {
    quote: "Embrace failures as stepping stones to wisdom and success.",
    context: "On Resilience & Growth",
  },
  {
    quote: "Lead not just with intellect but with empathy and humility.",
    context: "On True Leadership",
  },
  {
    quote: "Build a legacy not of wealth, but of positive impact and integrity.",
    context: "On Legacy & Values",
  },
]

export default function Messages() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Messages for <span className="text-accent">Students</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wisdom and inspiration from a lifetime of educational leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className={`bg-card rounded-xl p-8 shadow-lg border-l-4 border-accent transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg md:text-xl font-semibold text-foreground mb-4 leading-relaxed italic">
                "{message.quote}"
              </p>
              <p className="text-sm text-primary font-semibold">{message.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
