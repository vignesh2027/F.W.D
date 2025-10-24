"use client"

import { ExternalLink, Play, BookOpen, FileText } from "lucide-react"

export default function Documentaries() {
  const documentaries = [
    {
      title: "SMVEC 25 Years of Legacy",
      description:
        "A detailed documentary chronicling the journey of Sri Manakula Vinayagar Engineering College from its inception in 1999 to becoming one of Puducherry's largest educational institutions.",
      year: "2025",
      url: "https://www.youtube.com/watch?v=nEI4ufusD_k",
      type: "Official Documentary",
    },
    {
      title: "Shri M Dhanasekaran - Chairman Interview",
      description:
        "A personal video celebrating Shri M Dhanasekaran's role as Chairman and Managing Director, highlighting his leadership philosophy and contributions.",
      year: "2022",
      url: "https://www.youtube.com/watch?v=2J5f-FeRC2o",
      type: "Leadership Interview",
    },
    {
      title: "Guinness World Record Event",
      description:
        "The trust's remarkable achievement of forming the largest human Ashoka Chakra with 5,000+ students, symbolizing unity, patriotism, and excellence.",
      year: "2025",
      url: "https://www.youtube.com/watch?v=gaMguUEgzFw",
      type: "News Coverage",
    },
  ]

  const resources = [
    {
      title: "About Us - Sri Manakula Vinayagar Educational Trust",
      description: "Detailed background, mission, and institutional milestones",
      url: "https://smvec.ac.in/about-us/",
      icon: BookOpen,
    },
    {
      title: "CARE Ratings Report",
      description: "Comprehensive rating and operational details of trust's institutions",
      url: "https://www.careratings.com/upload/CompanyFiles/PR/16032022064545_Sri_Manakula_Vinayaga_Educational_Trust.pdf",
      icon: FileText,
    },
    {
      title: "ICRA Credit Rating Report",
      description: "Assessment of financials and governance supporting trust credibility",
      url: "https://www.icra.in/Rating/GetRationalReportFilePdf/116503~Sri%20Manakula%20Vinayaga%20Educational%20Trust.pdf",
      icon: FileText,
    },
    {
      title: "Career India - Transformative Education Feature",
      description: "Narrates the evolution and impact over 25 years with personal insights",
      url: "https://www.careerindia.com/news/transformative-education-healthcare-tamil-nadu-011-046185.html",
      icon: BookOpen,
    },
  ]

  return (
    <section id="documentaries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Official Documentaries & Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore authentic video content, news coverage, and official documents documenting Shri M. Dhanasekaran's
            transformative leadership journey
          </p>
        </div>

        {/* Video Documentaries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Video Documentaries</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {documentaries.map((doc, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {doc.type}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">{doc.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{doc.description}</p>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                  >
                    <Play size={16} />
                    Watch Now
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Resources */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Official Resources & Reports</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50 hover:bg-card/80 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
