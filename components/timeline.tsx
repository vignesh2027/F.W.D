"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "1964-1985",
    title: "Early Life & Inspiration",
    description:
      "Born in rural Tamil Nadu, experiencing firsthand the challenges of limited access to quality education and healthcare. Raised with core values of honesty, perseverance, and social responsibility.",
    details:
      "Witnessed the discrepancy between urban and rural opportunities, sparking a desire to bridge this gap. Developed leadership vision early on, excelling academically and socially.",
  },
  {
    year: "1996-1998",
    title: "Sri Manakula Vinayagar Trust Founded",
    description: 'Genesis of a mission: "Education for Every Student – Rural and Urban Alike"',
    details:
      "After years of planning, established the Trust with a clear mission to create world-class institutions empowering underprivileged communities. Pioneered transparent governance and discipline as pillars of the Trust's culture.",
  },
  {
    year: "1998-2002",
    title: "Engineering Education Foundation",
    description: "Launched Mailam Engineering College (1998) and Sri Manakula Vinayagar Engineering College (1999)",
    details:
      "Focused on affordable technical education for rural students. Early adoption of modern technology labs and practical learning modules. Scholarships ensured opportunity for economically disadvantaged students.",
  },
  {
    year: "2003-2010",
    title: "Healthcare & Medical Education Expansion",
    description: "Established medical and nursing colleges, pioneering community health initiatives",
    details:
      "Opened Sri Manakula Vinayagar Medical College and Nursing College. Pioneered community health initiatives with free camps and medical check-ups in villages. Modern hospitals with specialties in oncology, cardiology, nephrology.",
  },
  {
    year: "2011-2016",
    title: "Academic Diversification & Excellence",
    description: "Expanded into law, arts & science, polytechnic, management, and vocational education",
    details:
      "Maintained high standards winning national accreditations. Invested in research centers and innovation labs. Set up digital libraries and e-learning platforms. Industry collaborations enhanced placement opportunities.",
  },
  {
    year: "2015-2025",
    title: "Healthcare Infrastructure & Innovation",
    description: "Expanded hospital facilities with 1000+ beds across super-specialty centers",
    details:
      "Introduced life-saving procedures at subsidized rates. Implemented telemedicine and mobile healthcare vans. Integrated traditional and modern medicine. Established mental health departments with trained specialists.",
  },
  {
    year: "2022-Present",
    title: "Takshashila University & Future Vision",
    description: "Established forward-looking institution embracing global standards in AI, data science, biosciences",
    details:
      "Modern campus symbolizing tradition-meets-innovation. Focus on emerging fields preparing future leaders. Massive investment in technology-enabled classrooms and research parks. Global collaborations fostering multicultural competencies.",
  },
]

export default function Timeline() {
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
    <section id="journey" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Journey of <span className="text-primary">Vision & Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six decades of transformative leadership shaping education and healthcare across India
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                className={`md:flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground mb-3">{milestone.description}</p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{milestone.details}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-0 justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg" />
                </div>

                {/* Spacer */}
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
