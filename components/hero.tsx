"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
          Software Developer
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Hi, I&apos;m{" "}
          <span className="text-primary">Amarjeet Kumar</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          A passionate developer crafting innovative solutions with AI integration, 
          desktop applications, and modern web technologies. Currently pursuing 
          B.Tech in Computer Science at Lovely Professional University.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full gap-2">
            <a href="#contact">
              Get in Touch
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
            <a href="#projects">
              View Projects
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Amarjeet5534"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/amarjeet-kumar-sah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ar941242526@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
