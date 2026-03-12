"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Amarjeet<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="rounded-full">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild size="sm" className="rounded-full w-full">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
