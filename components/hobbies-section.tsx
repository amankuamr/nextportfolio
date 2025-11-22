"use client"

import { motion } from "framer-motion"
import { Camera, Gamepad2, Mountain, Target } from "lucide-react"

const hobbies = [
  {
    title: "Photography",
    description: "Capturing moments through the lens, exploring visual storytelling.",
    icon: Camera,
    color: "blue",
    buttonText: "View Gallery"
  },
  {
    title: "Gaming",
    description: "Immersing in virtual worlds and strategic gameplay.",
    icon: Gamepad2,
    color: "green",
    buttonText: "View Highlights"
  },
  {
    title: "Hiking",
    description: "Exploring nature's trails and outdoor adventures.",
    icon: Mountain,
    color: "orange",
    buttonText: "View Trails"
  },
  {
    title: "Badminton",
    description: "Enjoying fast-paced rallies and precise shots.",
    icon: Target,
    color: "purple",
    buttonText: "View Matches"
  }
]

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Beyond code and design, these are the passions that fuel my creativity and keep me inspired
          </p>
        </motion.div>

        {/* Hobbies Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 rounded-2xl bg-white border border-gray-200 transition-all duration-300 overflow-hidden"
            >
              {/* Expanding circle background */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-full transform translate-x-16 translate-y-16 group-hover:scale-[10] transition-transform duration-500 ease-in-out"
                style={{ backgroundColor: ['#f9b234', '#3ecd5e', '#e44002', '#8b5cf6'][index % 4] }}
              />

              <div className="relative z-10 h-full p-8 flex flex-col justify-center items-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300 font-cal-sans">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}