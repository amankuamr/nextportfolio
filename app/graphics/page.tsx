"use client"

import { motion } from "framer-motion"
import { ExternalLink, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const graphicsProjects = [
  {
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, business cards, letterhead, and brand guidelines for a tech startup.",
    image: "/api/placeholder/400/300",
    category: "Branding",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"]
  },
  {
    title: "Magazine Layout Design",
    description: "Editorial design for a lifestyle magazine with custom typography and engaging visual hierarchy.",
    image: "/api/placeholder/400/300",
    category: "Print Design",
    technologies: ["Adobe InDesign", "Photoshop", "Typography"]
  },
  {
    title: "Social Media Graphics",
    description: "Complete social media kit including posts, stories, and promotional graphics for an e-commerce brand.",
    image: "/api/placeholder/400/300",
    category: "Digital Marketing",
    technologies: ["Adobe Photoshop", "Canva", "Social Media Design"]
  },
  {
    title: "Poster Design Series",
    description: "Event poster series for a music festival with vibrant colors and dynamic compositions.",
    image: "/api/placeholder/400/300",
    category: "Event Design",
    technologies: ["Adobe Illustrator", "Photoshop", "Color Theory"]
  },
  {
    title: "Packaging Design",
    description: "Product packaging design for a premium skincare line with sustainable and elegant aesthetics.",
    image: "/api/placeholder/400/300",
    category: "Packaging",
    technologies: ["Adobe Illustrator", "3D Rendering", "Material Design"]
  },
  {
    title: "Icon Set Design",
    description: "Custom icon set for a mobile application with consistent style and scalability.",
    image: "/api/placeholder/400/300",
    category: "Icon Design",
    technologies: ["Adobe Illustrator", "SVG", "Icon Design"]
  },
  {
    title: "Book Cover Design",
    description: "Intriguing book cover design for a mystery novel with atmospheric illustration and typography.",
    image: "/api/placeholder/400/300",
    category: "Book Design",
    technologies: ["Adobe Photoshop", "Illustration", "Typography"]
  },
  {
    title: "Infographic Design",
    description: "Data visualization infographic explaining complex statistics in an engaging and easy-to-understand format.",
    image: "/api/placeholder/400/300",
    category: "Infographics",
    technologies: ["Adobe Illustrator", "Data Visualization", "Color Coding"]
  }
]

export default function GraphicsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Graphics Design Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of visual design work spanning branding, print design, digital graphics,
            and creative illustrations. Each piece tells a story and serves a specific purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {graphicsProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4" />
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
            Need custom graphics or branding? Let's create something amazing together.
          </p>
        </motion.div>
      </div>
    </div>
  )
}