"use client"

import { motion } from "framer-motion"
import { Figma } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

const uiUxProjects = [
  {
    title: "VN Bolo",
    description: "this is a ui/ux design for a client named vn bolo where i created its main website pages and also the admin panel",
    image: "/projectss/vnbolo.png",
    liveUrl: "/ui-ux/case-studies/vn-bolo",
    githubUrl: "https://www.figma.com/design/23uRrcji6nvaqb1lJtcdrz/Untitled?node-id=0-1&t=Fgn6m4r3nOqxdDJe-1",
    technologies: ["Figma", "UI/UX Design"],
    liveLabel: "Case Study",
    githubLabel: "Figma",
    githubIcon: Figma
  },
  {
    title: "Kiraya Wala",
    description: "Modern UI/UX design for Kiraya Wala, a rental platform under Codestam Technologies",
    image: "/projectss/Kirayawala/kiraya5.png",
    liveUrl: "/ui-ux/case-studies/kiraya-wala",
    githubUrl: "https://www.figma.com/design/hGSyPVOcepIZbypu2wNnJm/Untitled?node-id=1-355&t=jtnCBFqVQxKnQKqs-1",
    technologies: ["Figma", "UI/UX Design"],
    liveLabel: "Case Study",
    githubLabel: "Figma",
    githubIcon: Figma
  },
  {
    title: "Reboot",
    description: "Ecommerce site for shoe shopping, personal project using modern technologies",
    image: "/projectss/reboot/reboot1.png",
    liveUrl: "/ui-ux/case-studies/reboot",
    githubUrl: "https://www.figma.com/design/aYaSvZRubf983rJa77ixLI/Untitled?t=jtnCBFqVQxKnQKqs-1",
    technologies: ["Figma", "UI/UX Design"],
    liveLabel: "Case Study",
    githubLabel: "Figma",
    githubIcon: Figma
  }
]

export default function UiUxPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>
                UI/UX Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive showcase of my design journey, skills, and accomplishments in user experience and interface design
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiUxProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
                Ready to Work Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let&apos;s discuss how my design skills and achievements can contribute to your next project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:aman@example.com">
                    Get In Touch
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/web-dev">
                    View My Work
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}