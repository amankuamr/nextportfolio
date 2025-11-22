"use client"

import { useState } from "react"
import { motion} from "framer-motion"
import { ArrowRight} from "lucide-react"

const skills = [
  {
    title: "Web Development",
    shortDescription: "Building modern web applications",
    description: "Building responsive, performant web applications with modern technologies.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "Firebase", "MongoDB"],
    image: "/skillstop/web dev.avif"
  },
  {
    title: "UI/UX Design",
    shortDescription: "Creating beautiful user interfaces",
    description: "Creating intuitive and beautiful user interfaces that delight users.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Design Systems", "Usability Testing"],
    image: "/skillstop/ui.avif"
  },
  {
    title: "Graphics Design",
    shortDescription: "Designing stunning visuals and logos",
    description: "Designing stunning visuals, logos, and marketing materials.",
    skills: ["Adobe Photoshop", "Illustrator", "After Effects", "InDesign", "Branding", "Logo Design", "Motion Graphics", "Print Design"],
    image: "/skillstop/graphic.avif"
  }
]

export default function ServicesSection() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({})

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and creative capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const colors = ['#f9b234', '#3ecd5e', '#e44002'];
            const bgColor = colors[index % colors.length];
            const isFlipped = flippedCards[index] || false;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-2xl bg-white border border-gray-200 transition-all duration-300 overflow-hidden"
              >
                {/* Expanding circle background */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-[10] transition-transform duration-500 ease-in-out"
                  style={{ backgroundColor: bgColor }}
                />

                <div className="relative z-10 h-full p-8 flex flex-col justify-between">

                  {/* Content Area */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
                    {/* Content */}
                    <div className="relative overflow-hidden min-h-[160px] w-full flex items-center justify-center">
                      <motion.div
                        className="flex flex-col items-center justify-center text-center"
                        animate={{
                          y: isFlipped ? -40 : 0,
                          opacity: isFlipped ? 0 : 1
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {/* Title */}
                        <motion.h3
                          className="text-2xl font-bold mb-4 text-black"
                          style={{ fontFamily: 'BitcountGridSingle' }}
                          animate={{
                            opacity: isFlipped ? 0 : 1,
                            y: isFlipped ? -20 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {skill.title}
                        </motion.h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                          {skill.shortDescription}
                        </p>
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          y: isFlipped ? 0 : 40,
                          opacity: isFlipped ? 1 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="grid grid-cols-2 gap-1 max-w-xs">
                          {skill.skills.map((skillTag, tagIndex) => (
                            <motion.div
                              key={skillTag}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: isFlipped ? 1 : 0,
                                y: isFlipped ? 0 : 10
                              }}
                              transition={{
                                duration: 0.2,
                                delay: isFlipped ? tagIndex * 0.03 : 0,
                                ease: "easeOut"
                              }}
                              className="group relative"
                            >
                              <div className="flex items-center space-x-1 p-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <span className="text-xs font-medium text-gray-700 truncate">
                                  {skillTag}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="relative z-10 flex justify-end">
                    <motion.button
                      onClick={() => toggleFlip(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 group/btn"
                    >
                      <motion.div
                        animate={{ rotate: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}