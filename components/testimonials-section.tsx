"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, FileText, Award, Wrench } from "lucide-react"
import { useState } from "react"

type ExperienceItem = {
  title: string
  company: string
  duration?: string
  startYear?: number
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Graphics Designer",
    company: "Codestam Technologies",
    duration: "June 2025 - September 2025",
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
    duration: "June 2025 - September 2025",
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
    duration: "January 2025 - March 2025",
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
    duration: "January 2023 - February 2024",
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
    startYear: 2021,
    location: "Remote",
    description: "Self-employed freelance work providing logo design and web development services to clients acquired through personal connections and networking.",
    achievements: [
      "Successfully delivered 20+ client projects",
      "Built strong client relationships through networking",
      "Maintained 100% client satisfaction rate"
    ],
    technologies: ["Adobe Illustrator", "Figma", "HTML/CSS", "JavaScript", "React"]
  },
  {
    title: "Self-Attested Projects (UI/UX & Web Development)",
    company: "Personal Portfolio",
    startYear: 2022,
    location: "Remote",
    description: "A collection of self-initiated UI/UX design and web development projects created to explore modern design trends, sharpen frontend skills, and build a strong personal portfolio.",
    achievements: [
      "Designed 10+ UI/UX case studies including Hornt, Big Deal, VN Bolo, Kiraya Wala, and Reboot",
      "Built 10+ web development projects such as Imagi, Darla Browser, Mall Of Ranchi, and Moviez",
      "Practiced end-to-end workflows from wireframes and prototypes to live, responsive deployments"
    ],
    technologies: ["Figma", "Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"]
  }
]

type DetailKey = "description" | "achievements" | "technologies"

const dotConfig: { key: DetailKey; label: string; color: string; icon: typeof FileText }[] = [
  { key: "description", label: "Overview", color: "#2563eb", icon: FileText },
  { key: "achievements", label: "Achievements", color: "#9333ea", icon: Award },
  { key: "technologies", label: "Technologies", color: "#ef4444", icon: Wrench }
]

type ActiveState = { index: number; key: DetailKey } | null

const CURRENT_YEAR = new Date().getFullYear()

function getDuration(experience: ExperienceItem): string {
  if (experience.duration) return experience.duration
  if (experience.startYear) {
    const years = CURRENT_YEAR - experience.startYear
    return `${experience.startYear} - Present (${years} year${years === 1 ? "" : "s"})`
  }
  return ""
}

export default function ExperienceSection() {
  const [active, setActive] = useState<ActiveState>(null)

  const toggle = (index: number, key: DetailKey) => {
    setActive((prev) =>
      prev && prev.index === index && prev.key === key ? null : { index, key }
    )
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            {"Professional Experience".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-block hover:text-red-500 transition-colors duration-200"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1.5 w-[15px] rounded-full bg-red-500" />
            <div className="h-1.5 w-[15px] rounded-full bg-blue-500" />
            <div className="h-1.5 w-[15px] rounded-full bg-black" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My journey in design and development, showcasing key roles and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => {
            const current = active?.index === index ? active.key : null
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-full group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-black font-chillax-semibold leading-snug">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-600">{experience.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span className="inline-flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {getDuration(experience)}
                  </span>
                  <span className="inline-flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {experience.location}
                  </span>
                </div>

                {/* 3 centered detail icons */}
                <div
                  className="flex items-center justify-center gap-3 my-4"
                  role="tablist"
                  aria-label={`Details for ${experience.title}`}
                >
                  {dotConfig.map((dot) => {
                    const isActive = current === dot.key
                    const Icon = dot.icon
                    return (
                      <motion.button
                        key={dot.key}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggle(index, dot.key)}
                        aria-label={dot.label}
                        aria-pressed={isActive}
                        title={dot.label}
                        className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-300"
                        style={{
                          backgroundColor: isActive ? dot.color : "#ffffff",
                          borderColor: isActive ? dot.color : "#d1d5db",
                          color: isActive ? "#ffffff" : dot.color
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.button>
                    )
                  })}
                </div>

                <div className="text-center text-[11px] text-gray-400 mb-1 h-4">
                  {current ? dotConfig.find((d) => d.key === current)?.label : "Tap an icon for details"}
                </div>

                <div className="mt-1 flex-1">
                  <AnimatePresence mode="wait">
                    {current === "description" && (
                      <motion.p
                        key="description"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-700 leading-relaxed overflow-hidden text-center"
                      >
                        {experience.description}
                      </motion.p>
                    )}
                    {current === "achievements" && (
                      <motion.ul
                        key="achievements"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 overflow-hidden text-left"
                      >
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    {current === "technologies" && (
                      <motion.div
                        key="technologies"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2 overflow-hidden justify-center"
                      >
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
