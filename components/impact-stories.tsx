"use client"

export default function ImpactStories() {
  const stories = [
    {
      category: "Education Transformation",
      title: "From Rural Beginnings to Global Excellence",
      description:
        "Thousands of students from economically weaker sections have transformed their lives through quality education, breaking socioeconomic barriers and achieving merit-based success.",
      impact: "15,000+ Students Empowered",
    },
    {
      category: "Healthcare Access",
      title: "Life-Saving Treatment at Affordable Costs",
      description:
        "Healthcare beneficiaries describe life-saving treatments at affordable or free costs, especially for rural and economically weaker sections, embodying compassion in action.",
      impact: "1,000+ Hospital Beds",
    },
    {
      category: "Faculty Excellence",
      title: "Mentorship and Academic Excellence",
      description:
        "Faculty members emphasize Shri Dhanasekaran's mentorship and relentless drive for quality education and research, fostering an environment of continuous innovation.",
      impact: "500+ Faculty Members",
    },
    {
      category: "Community Outreach",
      title: "Village Upliftment Programs",
      description:
        "Community leaders praise the trust's outreach programs that uplift entire villages, providing education, healthcare, and sustainable livelihood opportunities.",
      impact: "100+ Villages Served",
    },
    {
      category: "Research & Innovation",
      title: "Advancing Knowledge and Science",
      description:
        "Scientific research and publications foster excellence and innovation, contributing to India's knowledge economy and global academic standing.",
      impact: "200+ Research Publications",
    },
    {
      category: "Discipline & Values",
      title: "Building Character and Integrity",
      description:
        "Students testify to how the vision instilled discipline, ethical values, and a spirit of service, preparing them to be responsible citizens and leaders.",
      impact: "Generations of Leaders",
    },
  ]

  return (
    <section id="impact-stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Real Impact Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic testimonials from students, healthcare beneficiaries, faculty, and communities transformed by the
            vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary/30"></div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{story.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{story.description}</p>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{story.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
