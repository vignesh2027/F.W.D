"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Institutions from "@/components/institutions"
import Impact from "@/components/impact"
import CoreValues from "@/components/core-values"
import Messages from "@/components/messages"
import EventCelebration from "@/components/event-celebration"
import HealthcareExpansion from "@/components/healthcare-expansion"
import TakshashilaUniversity from "@/components/takshashila-university"
import Sustainability from "@/components/sustainability"
import Documentaries from "@/components/documentaries"
import ImpactStories from "@/components/impact-stories"
import Resources from "@/components/resources"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero scrollY={scrollY} />
      <EventCelebration />
      <Timeline />
      <Institutions />
      <HealthcareExpansion />
      <TakshashilaUniversity />
      <Impact />
      <CoreValues />
      <Messages />
      <Sustainability />
      <Documentaries />
      <ImpactStories />
      <Resources />
      <CTA />
      <Footer />
    </main>
  )
}
