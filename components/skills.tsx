"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Excel", "Power BI"],
  },
  {
    title: "AI & ML",
    skills: ["Google Gemini API", "AI Integration", "Prompt Engineering"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Player", "Project Management", "Adaptability"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies & Tools
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through projects, certifications, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
