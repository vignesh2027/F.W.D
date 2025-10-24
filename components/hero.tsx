"use client"

import Image from "next/image"

export default function Hero({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      {/* Animated background elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Creating the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leaders of Tomorrow
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Celebrating 61 years of visionary leadership, educational excellence, and healthcare transformation by Shri M. Dhanasekara.His vision has built institutions, healed communities, and inspired generations. A legacy of service that continues to light the path forward
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/WhatsApp%20Image%202025-10-23%20at%201.18.26%20PM.jpeg"
                alt="Shri M. Dhanasekaran"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl shadow-lg flex items-center justify-center text-center p-4">
              <div>
                <p className="text-3xl font-bold text-accent-foreground">61</p>
                <p className="text-sm text-accent-foreground/80">Years of Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
