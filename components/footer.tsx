"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-foreground font-bold">M</span>
              </div>
              <span className="font-bold text-lg">Dhanasekaran</span>
            </div>
            <p className="text-background/80 text-sm">61 years of visionary leadership in education and healthcare</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#journey" className="hover:text-accent transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#institutions" className="hover:text-accent transition-colors">
                  Institutions
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-accent transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-accent transition-colors">
                  Core Values
                </a>
              </li>
              <li>
                <a href="#messages" className="hover:text-accent transition-colors">
                  Messages
                </a>
              </li>
              <li>
                <a href="#documentaries" className="hover:text-accent transition-colors">
                  Documentaries
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-accent transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@smvtrust.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 XXXX XXXX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <Twitter size={20} className="text-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <Facebook size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © 2025 Sri Manakula Vinayagar Trust. All rights reserved. | Celebrating 61 Years of Vision & Service
          </p>
        </div>
      </div>
    </footer>
  )
}
