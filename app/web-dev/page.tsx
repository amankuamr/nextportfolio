"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

const webDevProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"]
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative project management tool with team features and progress tracking.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and reporting.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"]
  },
  {
    title: "Learning Management System",
    description: "Online education platform with course management, video streaming, and progress tracking.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"]
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["JavaScript", "OpenWeather API", "Leaflet.js", "CSS3"]
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website with smooth animations and optimized performance.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"]
  }
]

export default function WebDevPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Web Development Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of web applications and websites I've built using modern technologies
            and best practices. Each project showcases different aspects of full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            Interested in working together? Let's discuss your project requirements.
          </p>
        </motion.div>
      </div>
    </div>
  )
}