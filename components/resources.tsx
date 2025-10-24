"use client"

import { ExternalLink, FileText, Globe, Award } from "lucide-react"

export default function Resources() {
  const resourceCategories = [
    {
      title: "Official Websites",
      icon: Globe,
      resources: [
        {
          name: "Sri Manakula Vinayagar Educational Trust",
          url: "https://smvec.ac.in/about-us/",
          description: "Official trust website with comprehensive information",
        },
        {
          name: "Mailam Engineering College",
          url: "https://mailamengg.com",
          description: "Premier engineering institution",
        },
        {
          name: "Sri Manakula Vinayagar Medical College & Hospital",
          url: "https://smvmch.ac.in",
          description: "Leading healthcare and medical education provider",
        },
      ],
    },
    {
      title: "Verified Reports & Accreditations",
      icon: Award,
      resources: [
        {
          name: "CARE Ratings Report",
          url: "https://www.careratings.com/upload/CompanyFiles/PR/16032022064545_Sri_Manakula_Vinayaga_Educational_Trust.pdf",
          description: "Financial and operational rating assessment",
        },
        {
          name: "ICRA Limited Accreditation Report",
          url: "https://www.icra.in/Rating/GetRationalReportFilePdf/116503~Sri%20Manakula%20Vinayaga%20Educational%20Trust.pdf",
          description: "Comprehensive accreditation and rating evaluation",
        },
      ],
    },
    {
      title: "News & Features",
      icon: FileText,
      resources: [
        {
          name: "Career India - 25 Years of Legacy",
          url: "https://www.careerindia.com/news/transformative-education-healthcare-tamil-nadu-011-046185.html",
          description: "Feature on 25 years of compassionate leadership",
        },
        {
          name: "ANI Press Release",
          url: "https://theprint.in/ani-press-releases/celebrating-a-legacy-of-learning-and-caring-sri-manakula-vinayagar-educational-trust-s-25-year-journey-of-compassion/2401523/",
          description: "Celebrating the trust's 25-year journey",
        },
        {
          name: "Tribune India - Guinness World Record",
          url: "https://www.tribuneindia.com/news/business/sri-manakula-vinayagar-engineering-college-sets-guinness-world-record-for-largest-human-ashoka-chakra/",
          description: "Coverage of historic Ashoka Chakra record",
        },
      ],
    },
    {
      title: "Research & Publications",
      icon: FileText,
      resources: [
        {
          name: "SMVMCH Research Week Souvenir",
          url: "https://smvmch.ac.in/files/Research/1st_research_week_souvenir.pdf",
          description: "Research publications and academic excellence",
        },
        {
          name: "SMVEC Governance Documents",
          url: "https://smvec.ac.in/about-us/",
          description: "Institutional governance and transparency reports",
        },
      ],
    },
  ]

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Verified Resources & Links</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access authentic, verified sources including official websites, accreditation reports, news coverage, and
            research publications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resourceCategories.map((category, catIndex) => {
            const IconComponent = category.icon
            return (
              <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, resIndex) => (
                    <a
                      key={resIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="text-primary flex-shrink-0 mt-1" size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Themes Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-primary mb-4">Key Themes & Inspirational Points</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core principles that define Shri M. Dhanasekaran's transformative vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Overcoming Adversity",
                description:
                  "From humble rural beginnings to institutional prominence, exemplifying how vision combined with perseverance conquers obstacles.",
              },
              {
                title: "Education as Empowerment",
                description:
                  "Inclusive policies and scholarship schemes break socioeconomic barriers, enabling merit and potential to flourish above all.",
              },
              {
                title: "Bridging Tradition & Innovation",
                description:
                  "Rooted in noble Indian values while embracing cutting-edge technology and pedagogy for a global future.",
              },
              {
                title: "Healthcare with Heart",
                description:
                  "True progress comes from health, compassion, and sustained community service embodied in hospitals and clinics.",
              },
              {
                title: "A Living Legacy",
                description:
                  "Ever-growing institutions expanding in size, scope, and research, feeding India's knowledge economy.",
              },
              {
                title: "Discipline & Excellence",
                description:
                  "Instilling ethical values, discipline, and a spirit of service to prepare responsible citizens and leaders.",
              },
            ].map((theme, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-foreground mb-2 text-lg">{theme.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
