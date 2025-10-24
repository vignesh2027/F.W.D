"use client"

import Image from "next/image"
import { Heart, Stethoscope, Users, Zap } from "lucide-react"

export default function HealthcareExpansion() {
  const highlights = [
    {
      icon: Heart,
      title: "1000+ Hospital Beds",
      description: "State-of-the-art medical facilities providing affordable, world-class treatment",
    },
    {
      icon: Stethoscope,
      title: "Specialized Care Centers",
      description: "Advanced departments covering cardiology, oncology, orthopedics, and more",
    },
    {
      icon: Users,
      title: "Community Health Programs",
      description: "Free medical camps, preventive care, and women's health initiatives",
    },
    {
      icon: Zap,
      title: "Telemedicine Innovation",
      description: "Digital healthcare reaching remote areas and underserved communities",
    },
  ]

  return (
    <section id="healthcare" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Redefining Healthcare Access</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming healthcare delivery through compassionate service, innovation, and community-centered care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/Sri-Manakula-Vinayagar-Engineering-College.webp"
                alt="Medical College Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">Healthcare Excellence & Innovation</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Recognizing the intertwined nature of education and health, Shri Dhanasekaran devoted significant energy
              to establishing world-class medical colleges and hospitals. The trust's healthcare facilities have become
              centers for affordable state-of-the-art treatment, specialized care, and outreach programs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Sri Manakula Vinayagar Medical College & Hospital</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Advanced nursing and paramedical education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Preventive care and community health education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground">Women's health and maternal care initiatives</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
