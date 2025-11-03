"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced features and seamless user experience.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, typography, and brand guidelines.",
    image: "/api/placeholder/400/300",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"]
  }
]

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant web applications with modern technologies."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that delight users."
  },
  {
    icon: Zap,
    title: "Graphics Design",
    description: "Designing stunning visuals, logos, and marketing materials."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive digital solutions across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-background shadow-sm"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work across web development, design, and creative projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg">
              <Link href="/web-dev">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate creative developer and designer with over 5 years of experience
                in crafting digital experiences. I love combining technical expertise with artistic
                vision to create solutions that not only work beautifully but also tell a story.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                When I'm not coding or designing, you can find me exploring new technologies,
                contributing to open-source projects, or sketching ideas for my next big project.
              </p>
              <Button asChild>
                <Link href="#contact">Let's Work Together</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/profile/profile.jpeg"
                  alt="Aman Kumar - Creative Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with creative solutions
              and cutting-edge technology.
            </p>
            <Button asChild size="lg">
              <a href="mailto:hello@example.com">Get In Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
