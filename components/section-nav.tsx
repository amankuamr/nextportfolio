"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, FolderOpen, User, Trophy, Users, Heart } from "lucide-react"

const sectionItems = [
  {
    name: "Services",
    href: "#services",
    icon: Briefcase,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderOpen,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Achievements",
    href: "#achievements",
    icon: Trophy,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Users,
  },
  {
    name: "Hobbies",
    href: "#hobbies",
    icon: Heart,
  },
]

export default function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const viewportCenter = scrollY + windowHeight / 2

      let closestIndex = -1
      let minDistance = Infinity

      sectionItems.forEach((item, index) => {
        const element = document.getElementById(item.href.slice(1))
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = scrollY + rect.top
          const elementBottom = scrollY + rect.bottom
          const elementCenter = (elementTop + elementBottom) / 2
          const distance = Math.abs(viewportCenter - elementCenter)

          if (distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        }
      })

      setActiveIndex(closestIndex)
    }

    // Show menu when scroll buttons appear
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
      updateActiveSection()
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2 flex flex-col space-y-2 relative"
      >
        {sectionItems.map((item, index) => {
          const isActive = activeIndex === index
          return (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-all duration-300 group relative ${
                isActive ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg' : 'bg-white/10 text-black hover:text-gray-600'
              }`}
              style={isActive ? {
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(30, 64, 175, 0.2)"
              } : {}}
            >
              <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            </motion.button>
          )
        })}
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-50"
            style={{
              top: `${8 + hoveredIndex * 48 + 20}px`, // center on the button
            }}
          >
            {sectionItems[hoveredIndex].name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}