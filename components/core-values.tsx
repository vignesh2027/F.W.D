"use client"

import { useEffect, useRef, useState } from "react"

const values = [
  {
    title: "Equity",
    description: "Education must be accessible regardless of financial or social status",
    icon: "🎓",
  },
  {
    title: "Discipline",
    description: "The foundation of character, integrity, and long-term success",
    icon: "⚡",
  },
  {
    title: "Innovation",
    description: "Encouraging inquisitiveness and real-world problem solving",
    icon: "💡",
  },
  {
    title: "Compassion",
    description: "Success is meaningless without serving others' well-being",
    icon: "❤️",
  },
  {
    title: "Sustainability",
    description: "Promoting eco-consciousness and ethical leadership",
    icon: "🌱",
  },
  {
    title: "Community Empowerment",
    description: "Education is the greatest upliftment tool for rural transformation",
    icon: "🤝",
  },
]

export default function CoreValues() {
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
      { threshold: 0.2 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Philosophical <span className="text-primary">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core values that guide every decision and initiative
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-1 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
