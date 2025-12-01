"use client"

import { motion } from "framer-motion"
import { ArrowRight, Figma } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Featured from './featured'

const featuredProjects = [
  {
    title: "Hornt",
    description: "Concept design for a touring app using latest Figma techniques, featuring both low-fidelity wireframes and high-fidelity prototypes",
    image: "/casestudybg/Hornet/banner.png",
    liveUrl: "/ui-ux/case-studies/hornet",
    githubUrl: "https://www.figma.com/design/EIclgpRliMUyV0UiTDwK3u/Hornet-Touring?node-id=0-1&t=huPLsnAyZkBn9bkH-1",
    technologies: ["Figma", "UI/UX Design", "Concept Design"],
    liveLabel: "Case Study",
    githubLabel: "Figma",
    githubIcon: Figma
  },
  {
    title: "Big Deal",
    description: "Car rental service UI/UX with animations - College final year major project with team collaboration",
    image: "/projectss/bigdeal/deal1.png",
    liveUrl: "/ui-ux/case-studies/big-deal",
    githubUrl: "https://bigdeal.framer.ai/",
    technologies: ["Figma", "Framer", "UI/UX Design"],
    liveLabel: "Case Study",
    githubLabel: "Live",
    githubIcon: Figma
  },
  {
    title: "Reboot",
    description: "An ecommerce website for shoes and footwear.",
    image: "/projectss/reboot.png",
    liveUrl: "/web-dev/case-studies/reboot",
    githubUrl: "https://rebooot.vercel.app/",
    technologies: ["Next.js", "Framer", "Bootstrap", "Firebase", "Authentication"],
    liveLabel: "Case Study",
    githubLabel: "Live"
  },
  {
    title: "Imagi",
    description: "A game gallery platform where I upload my gameplay screenshots.",
    image: "/projectss/imagi.png",
    liveUrl: "/web-dev/case-studies/imagi",
    githubUrl: "https://iimagii.vercel.app",
    technologies: ["Next.js", "Framer", "Tailwind CSS", "TypeScript"],
    liveLabel: "Case Study",
    githubLabel: "Live"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            {"Featured Projects".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-block hover:text-red-500 transition-colors duration-200"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work across web development, design, and creative projects
          </p>
        </motion.div>

        <Featured />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 lg:hidden">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 rounded-full">
            <Link href="/web-dev" className="flex items-center font-medium">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}