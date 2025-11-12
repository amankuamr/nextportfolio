"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  index: number
  liveLabel?: string
  githubLabel?: string
  liveIcon?: React.ComponentType<{ className?: string }>
  githubIcon?: React.ComponentType<{ className?: string }>
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  technologies,
  index,
  liveLabel,
  githubLabel,
  liveIcon,
  githubIcon
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full group"
    >
      <Card className="h-full overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-black" style={{ fontFamily: 'Cal Sans', letterSpacing: '0.05em' }}>
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0 flex gap-2">
          {liveUrl && (
            <Button asChild size="sm" className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors duration-200">
              <a
                href={liveUrl}
                {...(liveUrl.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-center"
              >
                {React.createElement(liveIcon || ExternalLink, { className: "w-4 h-4 mr-2" })}
                <span className="font-medium">{liveLabel || "View Live"}</span>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <a
                href={githubUrl}
                {...(githubUrl.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-center"
              >
                {githubLabel ? (
                  <>
                    {React.createElement(githubIcon || Github, { className: "w-4 h-4 mr-2" })}
                    <span className="font-medium">{githubLabel}</span>
                  </>
                ) : (
                  React.createElement(githubIcon || Github, { className: "w-4 h-4" })
                )}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
