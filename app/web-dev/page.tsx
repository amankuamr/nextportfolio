"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import Footer from "@/components/footer"

const webDevProjects = [
  {
    title: "Imagi",
    description: "A game gallery platform where I upload my gameplay screenshots.",
    image: "/projectss/imagi.png",
    liveUrl: "/web-dev/case-studies/imagi",
    githubUrl: "https://iimagii.vercel.app",
    technologies: ["Next.js", "Framer", "Tailwind CSS", "TypeScript"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "Darla Browser",
    description: "A gambling site UI/UX for demonstration purposes.",
    image: "/projectss/darla browser.png",
    liveUrl: "/web-dev/case-studies/darla-browser",
    githubUrl: "https://darla-browser.vercel.app/",
    technologies: ["Framer", "Next.js", "Shadcn", "Figma"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "Reboot",
    description: "An ecommerce website for shoes and footwear.",
    image: "/projectss/reboot.png",
    liveUrl: "/web-dev/case-studies/reboot",
    githubUrl: "https://rebooot.vercel.app/",
    technologies: ["Next.js", "Framer", "Bootstrap", "Firebase", "Authentication"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "Moviez",
    description: "A movies and series site made as a side project.",
    image: "/projectss/moviez.png",
    liveUrl: "/web-dev/case-studies/moviez",
    githubUrl: "https://amankuamr.github.io/Moviez/",
    technologies: ["HTML", "CSS", "JS", "TMDB"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "Event of Distinction",
    description: "A website for a non profitable organization.",
    image: "/projectss/EOD.png",
    liveUrl: "/web-dev/case-studies/event-of-distinction",
    githubUrl: "https://eventof-distinct.vercel.app/",
    technologies: ["HTML", "CSS", "JS"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "portfolio (old)",
    description: "a portfolio created using pure html , css , js , bootstrap",
    image: "/projectss/portfolio(old).png",
    liveUrl: "/web-dev/case-studies/portfolio-old",
    githubUrl: "https://amankumarr.vercel.app",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  },
  {
    title: "BW Story prototype",
    description: "a social media app (5 pages ) and using html , css , js , and bootstrap",
    image: "/projectss/bwstory.png",
    liveUrl: "/web-dev/case-studies/bw-story",
    githubUrl: "https://amankuamr.github.io/BWStory/",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    liveLabel: "Case Study",
    githubLabel: "View Live"
  }
]

export default function WebDevPage() {
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
                Web Development Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A showcase of my web development work across different technologies and frameworks
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webDevProjects.map((project, index) => (
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
                Let&apos;s discuss how my development skills can contribute to your next project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:aman@example.com" className="bg-gradient-to-r from-pink-400 to-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Get In Touch
                </a>
                <a href="/achievements" className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-medium hover:bg-pink-400 hover:text-white transition-colors">
                  View My Achievements
                </a>
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