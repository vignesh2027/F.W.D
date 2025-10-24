"use client"

import Image from "next/image"
import { Lightbulb, Globe, Microscope, Code } from "lucide-react"

export default function TakshashilaUniversity() {
  const programs = [
    {
      icon: Code,
      title: "Artificial Intelligence & Data Science",
      description: "Cutting-edge AI and machine learning programs preparing students for the future",
    },
    {
      icon: Microscope,
      title: "Biotechnology & Research",
      description: "Advanced research facilities and innovation labs for breakthrough discoveries",
    },
    {
      icon: Globe,
      title: "Renewable Energy & Sustainability",
      description: "Programs addressing climate change and sustainable development goals",
    },
    {
      icon: Lightbulb,
      title: "Digital Governance & Innovation",
      description: "Leadership training merging technology with societal engagement",
    },
  ]

  return (
    <section id="takshashila" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Takshashila University: Innovating for the Future
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Foreseeing the demands of the future knowledge economy, Shri Dhanasekaran championed the establishment of
              Takshashila University—a beacon for innovation, research, and interdisciplinary learning.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The University embraces cutting-edge fields like artificial intelligence, renewable energy, biotechnology,
              and digital governance, merging them with leadership training and societal engagement. Expansion into
              digital education platforms ensures the Trust's vision transcends geographic barriers, reaching the
              remotest learners via technology.
            </p>
            
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/Phd_Image_TU.jpg"
                alt="Takshashila University"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h4>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
