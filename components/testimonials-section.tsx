"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Briefcase, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Graphics Designer",
    company: "Codestam Technologies",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: "Collaborated with the Codestam team to create various design assets including posters, website carousels, business cards, PowerPoint presentations, and logos for client projects.",
    achievements: [
      "Created comprehensive design assets for 5+ client projects",
      "Designed multiple website carousels and interactive elements",
      "Developed professional branding materials including logos and business cards"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "PowerPoint"]
  },
  {
    title: "UI/UX Designer & Web Developer",
    company: "Codestam Technologies",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: "Worked with real-life clients on various UI/UX and web development projects. Delivered high-quality solutions for vnbolo, kiraya wala, rillasamento, mall of ranchi, and gun pro hub.",
    achievements: [
      "Successfully delivered 5+ client projects",
      "Collaborated with cross-functional teams",
      "Implemented modern design and development practices"
    ],
    technologies: ["Figma", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "UI/UX Internship",
    company: "Plasmid",
    duration: "Jan 2025 - Mar 2025",
    location: "Remote",
    description: "Completed industrial training focusing on real-world UI/UX and development projects with hands-on experience in industry-standard tools and methodologies.",
    achievements: [
      "Hands-on experience with real projects",
      "Learned industry-standard design processes",
      "Received recognition for design solutions"
    ],
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    title: "Graphics Design Lead",
    company: "Tech Pragati Tech Fest",
    duration: "Jan 2023 - Feb 2024",
    location: "College Campus",
    description: "Led the graphics design team for Tech Pragati, creating comprehensive branding and visual assets for a major college technology festival.",
    achievements: [
      "Led design team of 5+ members",
      "Created complete event branding",
      "Designed posters and digital assets"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Canva", "Branding"]
  },
  {
    title: "Freelance Logo Design & Web Development",
    company: "Self-Employed",
    duration: "2021 - Present (3 years)",
    location: "Remote",
    description: "Self-employed freelance work providing logo design and web development services to clients acquired through personal connections and networking.",
    achievements: [
      "Successfully delivered 20+ client projects",
      "Built strong client relationships through networking",
      "Maintained 100% client satisfaction rate"
    ],
    technologies: ["Adobe Illustrator", "Figma", "HTML/CSS", "JavaScript", "React"]
  }
]

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My journey in design and development, showcasing key roles and achievements
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleExperience(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Cal Sans', letterSpacing: '0.05em' }}>
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-600">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-right">
                  <div className="text-sm text-gray-500 mr-4">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {experience.duration}
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}