"use client"

import { motion } from "framer-motion"
import { ImageIcon, Award, Star, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

const graphicsAchievements = [
  {
    title: "Graphics Design Expert",
    description: "Proficient in Adobe Creative Suite and modern design tools. Created visual identities, marketing materials, and digital graphics for various brands and projects.",
    icon: ImageIcon,
    category: "Design Skills",
    date: "2021 - Present",
    details: [
      "Designed 100+ graphics projects",
      "Mastered Adobe Creative Suite",
      "Created brand identities"
    ]
  },
  {
    title: "Brand Identity Specialist",
    description: "Specialized in developing comprehensive brand identities including logos, color palettes, typography, and brand guidelines for businesses and startups.",
    icon: Award,
    category: "Branding",
    date: "2022 - Present",
    details: [
      "Developed 25+ brand identities",
      "Created logo design systems",
      "Established brand guidelines"
    ]
  },
  {
    title: "Digital Marketing Graphics",
    description: "Experienced in creating engaging social media graphics, banners, and digital marketing materials that drive engagement and conversions.",
    icon: Star,
    category: "Digital Marketing",
    date: "2020 - Present",
    details: [
      "Designed 500+ social media posts",
      "Created marketing campaigns",
      "Improved engagement rates by 40%"
    ]
  },
  {
    title: "Print Design Professional",
    description: "Skilled in print design including magazines, brochures, posters, and packaging with attention to typography, layout, and printing specifications.",
    icon: Target,
    category: "Print Design",
    date: "2019 - Present",
    details: [
      "Designed 50+ print materials",
      "Managed print production",
      "Expert in CMYK color spaces"
    ]
  },
  {
    title: "Illustration & Art Direction",
    description: "Created custom illustrations and provided art direction for various projects, bringing concepts to life through visual storytelling.",
    icon: Users,
    category: "Illustration",
    date: "2021 - Present",
    details: [
      "Created 75+ custom illustrations",
      "Directed art for campaigns",
      "Developed illustration styles"
    ]
  },
  {
    title: "Design Innovation Pioneer",
    description: "Always exploring new design trends, techniques, and technologies to create cutting-edge visual solutions and push creative boundaries.",
    icon: Zap,
    category: "Innovation",
    date: "2018 - Present",
    details: [
      "Explored emerging design tools",
      "Contributed to design community",
      "Published design tutorials"
    ]
  }
]

const categories = ["All", "Design Skills", "Branding", "Digital Marketing", "Print Design", "Illustration", "Innovation"]

export default function GraphicsPage() {
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
                Graphics Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive showcase of my creative journey, skills, and accomplishments in visual design and graphics
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {graphicsAchievements.map((achievement, index) => (
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
                Let&apos;s discuss how my graphics design skills and achievements can contribute to your next project
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