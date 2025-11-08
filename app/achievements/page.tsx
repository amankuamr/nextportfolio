"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    title: "Full Stack Developer",
    description: "Proficient in modern web technologies including React, Next.js, Node.js, and cloud platforms. Built multiple production-ready applications with scalable architectures.",
    icon: Trophy,
    category: "Technical Skills",
    date: "2023 - Present",
    details: [
      "Developed 15+ full-stack applications",
      "Implemented CI/CD pipelines",
      "Experience with AWS, Vercel, and Firebase"
    ]
  },
  {
    title: "UI/UX Designer",
    description: "Creating intuitive and beautiful user experiences with tools like Figma and Framer. Focus on user-centered design principles and accessibility.",
    icon: Award,
    category: "Design",
    date: "2022 - Present",
    details: [
      "Designed 50+ user interfaces",
      "Conducted user research and testing",
      "Expert in Figma and prototyping tools"
    ]
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open source projects and community initiatives. Passionate about giving back to the developer community.",
    icon: Star,
    category: "Community",
    date: "2021 - Present",
    details: [
      "Contributed to 20+ open source projects",
      "Maintained popular npm packages",
      "Organized community workshops"
    ]
  },
  {
    title: "Problem Solver",
    description: "Strong analytical skills with experience in algorithm design and optimization. Excel at breaking down complex problems into manageable solutions.",
    icon: Target,
    category: "Technical Skills",
    date: "2020 - Present",
    details: [
      "Solved 100+ algorithmic challenges",
      "Optimized application performance by 40%",
      "Mentored junior developers"
    ]
  },
  {
    title: "Team Player",
    description: "Collaborative approach with experience in agile development and cross-functional teams. Strong communication and leadership skills.",
    icon: Users,
    category: "Soft Skills",
    date: "2019 - Present",
    details: [
      "Led 5+ development teams",
      "Implemented agile methodologies",
      "Excellent stakeholder communication"
    ]
  },
  {
    title: "Continuous Learner",
    description: "Always staying updated with the latest technologies and industry trends. Committed to lifelong learning and professional development.",
    icon: Zap,
    category: "Personal Growth",
    date: "2018 - Present",
    details: [
      "Earned 15+ certifications",
      "Attended 50+ tech conferences",
      "Published 25+ technical articles"
    ]
  }
]

const categories = ["All", "Technical Skills", "Design", "Community", "Soft Skills", "Personal Growth"]

export default function AchievementsPage() {
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
                Achievements
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive showcase of my journey, skills, and accomplishments in technology and design
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
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
                Let&apos;s discuss how my skills and achievements can contribute to your next project
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