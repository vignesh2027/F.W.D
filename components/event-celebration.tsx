"use client"

import Image from "next/image"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventCelebration() {
  return (
    <section id="celebration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Event Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/WhatsApp%20Image%202025-10-23%20at%201.18.41%20PM.jpeg"
                alt="61 Years Celebration Event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {"Celebrating over three decades of visionary leadership"}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us in celebrating the incredible legacy of Shri M. Dhanasekaran and his transformative journey in
              education and healthcare.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">October 24, 2025</p>
                  <p className="text-muted-foreground">Celebration Date</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Multipurpose Hall, Takshashila University</p>
                  <p className="text-muted-foreground">Ongur, Tinduvanam </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Be Part of This Memorable Occasion</p>
                  <p className="text-muted-foreground">Join students, alumni, faculty, and community leaders</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-lg">
              RSVP Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
