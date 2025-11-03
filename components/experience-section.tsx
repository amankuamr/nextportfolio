"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "2022 - Present",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    description: "Architected and developed scalable web applications serving 100K+ users monthly. Led a team of 5 developers in implementing microservices architecture, resulting in 40% improved performance and 60% faster deployment cycles.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
  },
  {
    period: "2020 - 2022",
    title: "UI/UX Designer & Developer",
    company: "Creative Studio XYZ",
    description: "Designed and developed user interfaces for mobile and web applications, conducting user research and usability testing. Created design systems that improved design consistency across 15+ products and increased user satisfaction scores by 35%.",
    technologies: ["Figma", "Adobe XD", "Sketch", "React", "Tailwind CSS", "Design Systems"]
  },
  {
    period: "2019 - 2020",
    title: "Frontend Developer",
    company: "StartupTech Inc.",
    description: "Developed rapid prototypes and minimum viable products for early-stage startups. Collaborated closely with founders to transform ideas into functional web applications, helping secure $2M+ in funding through compelling product demonstrations.",
    technologies: ["JavaScript", "React", "Vue.js", "Firebase", "Material-UI", "Rapid Prototyping"]
  },
  {
    period: "2018 - 2019",
    title: "Junior Web Developer",
    company: "Digital Agency Pro",
    description: "Started my professional journey in web development, working on client websites and learning industry best practices. Contributed to 50+ projects ranging from simple landing pages to complex e-commerce solutions, building a strong foundation in modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "jQuery"]
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through my career highlights, showcasing the diverse projects and roles
            that have shaped my expertise in web development, design, and creative problem-solving.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0 w-full lg:w-48">
                <div className="text-sm text-muted-foreground font-medium">{experience.period}</div>
                <div className="text-lg font-semibold text-primary mt-1">{experience.title}</div>
                <div className="text-muted-foreground">{experience.company}</div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">{experience.description.split('.')[0]}</h3>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            Always eager to take on new challenges and collaborate on exciting projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}