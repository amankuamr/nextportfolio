"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    title: "Pariksha Pe Charcha",
    description: "Participated in the national event 'Pariksha Pe Charcha' with the Prime Minister, focusing on exam stress management.",
    icon: Trophy,
    category: "Community"
  },
  {
    title: "UI/UX Recommendation Letter",
    description: "Received a recommendation letter for outstanding performance and contributions in UI/UX design.",
    icon: Award,
    category: "Professional"
  },
  {
    title: "Codestam Technologies Role",
    description: "UI/UX Designer & Web Developer at Codestam Technologies, working with real-life clients on various projects.",
    icon: Star,
    category: "Professional"
  },
  {
    title: "Plasmid UI/UX Internship",
    description: "Completed UI/UX internship at Plasmid, recognized for outstanding design solutions and user research.",
    icon: Trophy,
    category: "Professional"
  },
  {
    title: "Tech Fest Leadership",
    description: "Led the graphics design team for Tech Pragati Tech Fest, creating branding and digital assets.",
    icon: Award,
    category: "Leadership"
  },
  {
    title: "Google UX Certification",
    description: "Completed the Google UX Experience course, demonstrating strong skills in user experience design.",
    icon: Star,
    category: "Education"
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