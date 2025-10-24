"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const institutions = [
  {
    name: "Takshashila University",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/takshashila-university-kanchipuram-universities-ypdimvklyt-2YebGeHVhFLTyLHcInzsvcoXRIVBoc.avif",
    description: "Futuristic hub fostering innovation, research-driven learning, and international standards",
    year: "2022",
    highlights: [
      "Focus on AI, data science, biosciences",
      "Modern campus with technology-enabled classrooms",
      "Research parks and incubation centers",
      "Global collaborations and student exchange programs",
    ],
  },
  {
    name: "Sri Manakula Vinayagar Engineering College",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sri-Manakula-Vinayagar-Engineering-College-1qBKe4cw8S4C1muL3Qy1SbK7Rym96i.webp",
    description: "Premier engineering institution with state-of-the-art facilities and academic rigor",
    year: "1999",
    highlights: [
      "Affordable technical education for rural students",
      "Modern technology labs and practical learning",
      "Comprehensive scholarship programs",
      "Strong industry partnerships and placements",
    ],
  },
  {
    name: "SMV School",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24059_SMV-N16p3A-NBlbO6igMqLvdyUVYIO2hJa1N9iXFO.jpeg",
    description: "Modern educational facility combining traditional values with contemporary learning",
    year: "2015",
    highlights: [
      "Holistic student development approach",
      "State-of-the-art infrastructure",
      "Sports, arts, and leadership programs",
      "Community service integration",
    ],
  },
]

export default function Institutions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
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
    <section id="institutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Institutions of <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ institutions serving 15,000+ students across education and healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 ${
                visibleItems.includes(index) ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={institution.image || "/placeholder.svg?height=256&width=400&query=institution"}
                  alt={institution.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-accent font-semibold text-sm mb-2">Est. {institution.year}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{institution.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{institution.description}</p>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors"
                >
                  {expandedIndex === index ? "Show Less" : "Key Highlights"}
                </button>

                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
                    {institution.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
