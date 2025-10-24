"use client"

import { Users, Heart, BookOpen, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const impacts = [
  {
    icon: Users,
    number: "15,000+",
    label: "Students Served",
    description: "Across 15+ institutions",
    details: "Thousands of graduates excelling in tech, medicine, law, arts, and entrepreneurship",
  },
  {
    icon: Heart,
    number: "1000+",
    label: "Hospital Beds",
    description: "Super specialty healthcare",
    details: "Life-saving procedures at subsidized rates including organ transplants and dialysis",
  },
  {
    icon: BookOpen,
    number: "15+",
    label: "Institutions",
    description: "Engineering, Medical, Arts & Science",
    details: "From rural engineering colleges to world-class Takshashila University",
  },
  {
    icon: Globe,
    number: "61",
    label: "Years of Vision",
    description: "Transforming lives globally",
    details: "From 1964 to 2025: Building a legacy of education and healthcare empowerment",
  },
]

export default function Impact() {
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
    <section id="impact" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transformative <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes that change lives and communities
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                className={`bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:bg-primary/5 border border-border/50 ${
                  visibleItems.includes(index) ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{impact.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{impact.label}</div>
                <p className="text-sm text-muted-foreground mb-3">{impact.description}</p>
                <p className="text-xs text-muted-foreground/70 leading-relaxed italic">{impact.details}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
