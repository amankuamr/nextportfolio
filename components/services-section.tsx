"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant web applications with modern technologies."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that delight users."
  },
  {
    icon: Zap,
    title: "Graphics Design",
    description: "Designing stunning visuals, logos, and marketing materials."
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive digital solutions across multiple disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-background shadow-sm"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}