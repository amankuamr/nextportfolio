"use client"

import { motion } from "framer-motion"
import { Palette, Award, Star, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const uiUxAchievements = [
  {
    title: "UI/UX Design Expert",
    description: "Proficient in modern design tools and methodologies including Figma, Adobe XD, and user-centered design principles. Created intuitive interfaces for web and mobile applications.",
    icon: Palette,
    category: "Design Skills",
    date: "2022 - Present",
    details: [
      "Designed 50+ user interfaces",
      "Conducted user research and testing",
      "Expert in Figma and prototyping tools"
    ]
  },
  {
    title: "Design Systems Architect",
    description: "Built comprehensive design systems and component libraries ensuring consistency and scalability across products and platforms.",
    icon: Award,
    category: "System Design",
    date: "2023 - Present",
    details: [
      "Created 5+ design systems",
      "Implemented component libraries",
      "Established design guidelines"
    ]
  },
  {
    title: "User Research Specialist",
    description: "Experienced in conducting user research, usability testing, and data-driven design decisions to create user-centered solutions.",
    icon: Star,
    category: "Research",
    date: "2021 - Present",
    details: [
      "Conducted 100+ user interviews",
      "Performed usability testing sessions",
      "Analyzed user behavior patterns"
    ]
  },
  {
    title: "Prototyping Master",
    description: "Skilled in creating interactive prototypes and wireframes that effectively communicate design concepts and user flows.",
    icon: Target,
    category: "Prototyping",
    date: "2022 - Present",
    details: [
      "Built 200+ interactive prototypes",
      "Created detailed user flows",
      "Developed wireframe libraries"
    ]
  },
  {
    title: "Accessibility Advocate",
    description: "Committed to creating inclusive designs that meet WCAG guidelines and ensure accessibility for all users.",
    icon: Users,
    category: "Accessibility",
    date: "2020 - Present",
    details: [
      "Achieved WCAG 2.1 AA compliance",
      "Conducted accessibility audits",
      "Implemented inclusive design practices"
    ]
  },
  {
    title: "Design Innovation Leader",
    description: "Always exploring new design trends, technologies, and methodologies to push the boundaries of user experience design.",
    icon: Zap,
    category: "Innovation",
    date: "2019 - Present",
    details: [
      "Explored emerging design technologies",
      "Contributed to design community",
      "Published design case studies"
    ]
  }
]

const categories = ["All", "Design Skills", "System Design", "Research", "Prototyping", "Accessibility", "Innovation"]

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

        {/* Achievements Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiUxAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'BitcountGridSingle' }}>{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground">{achievement.category}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{achievement.description}</p>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-pink-400">{achievement.date}</span>
                  </div>

                  <ul className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
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