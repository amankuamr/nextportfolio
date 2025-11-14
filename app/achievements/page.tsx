"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

const achievements = [
  {
    title: "UI/UX Designer & Web Developer at Codestam Technologies",
    description: "Completed a 3-month role at Codestam Technologies, working with real-life clients on various UI/UX and web development projects.",
    icon: Trophy,
    category: "Professional",
    date: "2024-06-18 to 2024-08-30",
    details: [
      "3-month internship at Codestam Technologies",
      "Worked with real-life clients",
      "Projects: vnbolo, kiraya wala, rillasamento, mall of ranchi, gun pro hub"
    ]
  },
  {
    title: "Tech Pragati Tech Fest Lead Graphics Designer",
    description: "Led the graphics design team for Tech Pragati Tech Fest, creating event branding, posters, and digital assets for a successful college festival.",
    icon: Award,
    category: "Leadership",
    date: "2024-02-20",
    details: [
      "Led graphics design team for Tech Pragati",
      "Created event branding and posters",
      "Developed digital assets for college festival"
    ]
  },
  {
    title: "Plasmid Industrial Training",
    description: "Completed industrial training at Plasmid, gaining hands-on experience in real-world UI/UX and development projects.",
    icon: Trophy,
    category: "Professional",
    date: "2025-03-04",
    details: [
      "Completed industrial training at Plasmid",
      "Hands-on experience in UI/UX and development",
      "Real-world project exposure"
    ]
  },
  {
    title: "Plasmid UI/UX Internship",
    description: "Completed a UI/UX internship at Plasmid, recognized for outstanding design solutions and user research.",
    icon: Target,
    category: "Professional",
    date: "2025-03-04",
    details: [
      "Completed UI/UX internship at Plasmid",
      "Recognized for outstanding design solutions",
      "Conducted user research"
    ]
  },
  {
    title: "GDSC Core Graphics Design Member",
    description: "Selected as a core member for graphics design in the Google Developer Student Clubs, contributing to event branding and visual content.",
    icon: Star,
    category: "Community",
    date: "2023-09-01",
    details: [
      "Core member in GDSC graphics design",
      "Contributed to event branding",
      "Created visual content for events"
    ]
  },
  {
    title: "UI/UX Recommendation Letter",
    description: "Received a recommendation letter for outstanding performance and contributions in UI/UX design.",
    icon: Award,
    category: "Professional",
    date: "2025-03-04",
    details: [
      "Received recommendation letter",
      "Outstanding performance in UI/UX design",
      "Contributions to design projects"
    ]
  },
  {
    title: "UX Experience Google Course",
    description: "Completed the Google UX Experience course, demonstrating strong skills in user experience design and prototyping.",
    icon: Zap,
    category: "Education",
    date: "2023-06-10",
    details: [
      "Completed Google UX Experience course",
      "Demonstrated skills in UX design",
      "Proficient in prototyping"
    ]
  },
  {
    title: "Pariksha Pe Charcha",
    description: "Participated in the national event 'Pariksha Pe Charcha' with the Prime Minister, focusing on exam stress management and student motivation.",
    icon: Users,
    category: "Community",
    date: "2022-04-01",
    details: [
      "Participated in national event with PM",
      "Focused on exam stress management",
      "Student motivation initiatives"
    ]
  }
]


export default function AchievementsPage() {
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
                      <h3 className="text-2xl font-bold mb-1 font-cal-sans">{achievement.title}</h3>
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
      <Footer />
    </div>
  )
}