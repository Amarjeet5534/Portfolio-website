"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ar941242526@gmail.com",
    href: "mailto:ar941242526@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7901715005",
    href: "tel:+917901715005",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Phagwara, Punjab, India",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Amarjeet5534",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amarjeet-kumar-sah/",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:ar941242526@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    aria-label={item.label}
                  >
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
