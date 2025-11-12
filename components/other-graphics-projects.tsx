"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { graphicsProjects } from "@/lib/graphics-projects"

interface GraphicsProject {
  title: string
  description: string
  image: string
  liveUrl: string
  technologies: string[]
  liveLabel: string
}

interface OtherGraphicsProjectsProps {
  currentSlug: string
}

const graphicsProjectsList: GraphicsProject[] = graphicsProjects.map(project => ({
  title: project.title,
  description: project.description,
  image: project.image,
  liveUrl: project.liveUrl,
  technologies: project.technologies,
  liveLabel: project.liveLabel
}))

export default function OtherGraphicsProjects({ currentSlug }: OtherGraphicsProjectsProps) {
  // Find the current project index
  const currentIndex = graphicsProjectsList.findIndex(project => project.liveUrl === currentSlug)

  // Get the next 3 projects in sequence, wrapping around
  const otherProjects = []
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (currentIndex + i) % graphicsProjectsList.length
    otherProjects.push(graphicsProjectsList[nextIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'BitcountGridSingle' }}>
        View Other Graphics Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherProjects.map((project) => (
          <Link key={project.liveUrl} href={project.liveUrl}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Cal Sans', letterSpacing: '0.05em' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {project.liveLabel}
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  )
}