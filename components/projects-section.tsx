"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>Featured Projects</h2>
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
  )
}