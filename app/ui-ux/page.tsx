"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import Footer from "@/components/footer"
import { uiUxProjects } from "@/lib/ui-ux-projects"

export default function UiUxPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
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
      <Footer />
    </div>
  )
}