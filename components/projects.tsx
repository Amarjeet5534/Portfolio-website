import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "HomeWork Helper",
    description:
      "A Python desktop application leveraging Google Gemini AI to automatically solve multiple-choice questions using screen text extraction and mouse automation. Features intelligent clipboard-based text capture and secure Node.js/MongoDB backend for API key distribution.",
    techStack: ["Python", "PyQt5", "Node.js", "MongoDB", "Google Gemini API"],
    github: "https://github.com/Amarjeet5534",
    date: "May 2025",
    highlights: [
      "AI-driven automatic answer processing",
      "Hardware ID validation for secure access",
      "Desktop automation with PyQt5",
    ],
  },
  {
    title: "AI Music Trainer",
    description:
      "An AI-powered music learning assistant that teaches music theory concepts including notes, scales, chords, and intervals through interactive explanations. Features structured learning modules with real-time question generation and adaptive difficulty.",
    techStack: ["Python", "AI APIs"],
    github: "https://github.com/Amarjeet5534",
    date: "Jul 2025",
    highlights: [
      "Interactive music theory learning",
      "Real-time question generation",
      "Adaptive difficulty adjustment",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in AI integration, 
            desktop development, and full-stack engineering.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="rounded-full gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
