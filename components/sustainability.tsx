"use client"

import { Leaf, Droplet, Sun, Recycle } from "lucide-react"

export default function Sustainability() {
  const initiatives = [
    {
      icon: Sun,
      title: "Solar Power Installation",
      description: "Renewable energy powering campuses and reducing carbon footprint",
    },
    {
      icon: Droplet,
      title: "Rainwater Harvesting",
      description: "Water conservation systems ensuring sustainable resource management",
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Comprehensive recycling and waste reduction programs across institutions",
    },
    {
      icon: Leaf,
      title: "Green Campus Initiatives",
      description: "Student-led environmental clubs and sustainability projects",
    },
  ]

  return (
    <section id="sustainability" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sustainability & Green Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a sustainable future through environmental responsibility and green campus infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-3 text-lg">{initiative.title}</h4>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">Vision for the Next Decade</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">→</span>
              <span>Continue scaling digital education and hybrid learning models to expand access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">→</span>
              <span>
                Position Takshashila University as a global player in research and interdisciplinary education
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">→</span>
              <span>Strengthen community health networks with mobile clinics, telemedicine, and preventive care</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold mt-1">→</span>
              <span>Foster international partnerships to promote cross-cultural exchange and global citizenship</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
