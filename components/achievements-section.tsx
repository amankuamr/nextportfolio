"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    title: "Full Stack Developer",
    description: "Proficient in modern web technologies including React, Next.js, Node.js, and cloud platforms.",
    icon: Trophy,
    category: "Technical Skills"
  },
  {
    title: "UI/UX Designer",
    description: "Creating intuitive and beautiful user experiences with tools like Figma and Framer.",
    icon: Award,
    category: "Design"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open source projects and community initiatives.",
    icon: Star,
    category: "Community"
  },
  {
    title: "Problem Solver",
    description: "Strong analytical skills with experience in algorithm design and optimization.",
    icon: Trophy,
    category: "Technical Skills"
  },
  {
    title: "Team Player",
    description: "Collaborative approach with experience in agile development and cross-functional teams.",
    icon: Award,
    category: "Soft Skills"
  },
  {
    title: "Continuous Learner",
    description: "Always staying updated with the latest technologies and industry trends.",
    icon: Star,
    category: "Personal Growth"
  }
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that define my journey in technology and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'BitcountGridSingle' }}>{achievement.title}</h3>
                  <span className="text-sm text-muted-foreground">{achievement.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/achievements">
              View All Achievements
              <Trophy className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}