"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using Next.js, React, and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["Next.js", "React", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed responsive user interfaces and collaborated with design teams to create pixel-perfect implementations. Optimized performance and accessibility.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"]
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Built and maintained websites using modern web technologies. Worked on both frontend and backend development tasks.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
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
            My journey through various roles and projects that have shaped my expertise in web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6 border border-gray-200 md:ml-16">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-black mb-2 sm:mb-0">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.company} • {exp.location}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}