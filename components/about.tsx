import { GraduationCap, Award, Code2, Trophy } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE",
    description: "Lovely Professional University",
    detail: "CGPA: 7.23",
  },
  {
    icon: Award,
    title: "Cloud Computing",
    description: "NPTEL - IIT Kharagpur",
    detail: "Elite Certificate",
  },
  {
    icon: Code2,
    title: "DSA Training",
    description: "CipherSchools",
    detail: "Java & Algorithms",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    description: "Top 50 Ranking",
    detail: "2025",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate about building{" "}
              <span className="text-primary">innovative solutions</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science student with a strong foundation in 
                programming and a keen interest in AI integration and desktop 
                application development. My journey in tech has been driven by 
                curiosity and a desire to create impactful solutions.
              </p>
              <p>
                I specialize in building applications that leverage modern technologies 
                like Python, Java, React, and AI APIs. From creating AI-powered music 
                trainers to developing automated homework assistants, I enjoy tackling 
                challenging problems with creative solutions.
              </p>
              <p>
                Beyond coding, I&apos;m certified in Cloud Computing from IIT Kharagpur 
                and have completed training in Generative AI from Infosys. I&apos;m always 
                eager to learn new technologies and apply them to real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs text-primary mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
