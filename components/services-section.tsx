"use client"

import { motion } from "framer-motion"

const skills = [
  {
    title: "Web Development",
    description: "Building responsive, performant web applications with modern technologies.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "Firebase", "MongoDB"]
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that delight users.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Design Systems", "Usability Testing"]
  },
  {
    title: "Graphics Design",
    description: "Designing stunning visuals, logos, and marketing materials.",
    skills: ["Adobe Photoshop", "Illustrator", "After Effects", "InDesign", "Branding", "Logo Design", "Motion Graphics", "Print Design"]
  }
]

export default function ServicesSection() {
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

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Expanding circle background */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-[10] transition-transform duration-500 ease-in-out"
                  style={{ backgroundColor: bgColor }}
                />

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-black relative z-10 min-h-[87px]" style={{ fontFamily: 'BitcountGridSingle' }}>
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {skill.description}
                </p>

                {/* Skills visualization */}
                <div className="relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {skill.skills.map((skillTag, tagIndex) => (
                      <motion.div
                        key={skillTag}
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (tagIndex * 0.08), ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="flex items-center space-x-2 p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-lg hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300/70 transition-all duration-300 cursor-pointer">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-200 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200 truncate">
                            {skillTag}
                          </span>
                        </div>
                      </motion.div>
                    ))}
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