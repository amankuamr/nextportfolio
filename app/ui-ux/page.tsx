"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const uiUxProjects = [
  {
    title: "FinTech Mobile App",
    description: "Complete UI/UX design for a financial management mobile application with intuitive navigation and data visualization.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    title: "E-Commerce Redesign",
    description: "User experience overhaul for an online retail platform, improving conversion rates by 40%.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Sketch", "InVision", "Usability Testing", "A/B Testing"]
  },
  {
    title: "Healthcare Dashboard",
    description: "Medical dashboard design for healthcare professionals with complex data visualization and patient management.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Figma", "Design Systems", "Accessibility", "Information Architecture"]
  },
  {
    title: "Travel Booking Platform",
    description: "End-to-end design for a travel booking website with seamless user journey and booking flow.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Adobe XD", "User Flows", "Wireframing", "Interactive Prototypes"]
  },
  {
    title: "Social Media App",
    description: "Modern social networking app design with focus on user engagement and community building features.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Figma", "Micro-interactions", "Mobile-first Design", "User Testing"]
  },
  {
    title: "SaaS Admin Panel",
    description: "Comprehensive admin dashboard design for a software-as-a-service platform with advanced analytics.",
    image: "/api/placeholder/400/300",
    liveUrl: "https://example.com",
    technologies: ["Sketch", "Data Visualization", "Component Libraries", "Design Patterns"]
  }
]

export default function UiUxPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">UI/UX Design Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting intuitive and beautiful user experiences through research-driven design.
            Each project focuses on solving real user problems with elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiUxProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
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
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </div>
  )
}