"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Share2, Github, MessageCircle, Instagram, Camera } from "lucide-react"

const socialItems = [
  {
    name: "GitHub",
    href: "https://github.com/amankuamr",
    icon: Github,
    color: "hover:text-gray-800"
  },
  {
    name: "Instagram",
    href: "https://instagram.com/aman.k_sah",
    icon: Instagram,
    color: "hover:text-pink-500"
  },
  {
    name: "Photography",
    href: "/photography",
    icon: Camera,
    color: "hover:text-purple-500"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9572112176",
    icon: MessageCircle,
    color: "hover:text-green-500"
  }
]

export default function SocialMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState(-1)

  return (
    <>
      {/* Mobile: Bottom right social button */}
      <div className="md:hidden fixed bottom-5 right-4 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, y: "-50%", scale: 0.8 }}
              animate={{ opacity: 1, x: 0, y: "-50%", scale: 1 }}
              exit={{ opacity: 0, x: 20, y: "-50%", scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute right-full mr-3 top-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2 flex flex-row-reverse gap-2 items-center"
            >
              {socialItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  {...(item.name === "Photography" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 ${item.color} group`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop: Show full menu */}
      <div className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2 flex flex-col gap-2"
        >
          {socialItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              {...(item.name === "Photography" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 ${item.color} group`}
            >
              <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            </motion.a>
          ))}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredIndex !== -1 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-50"
              style={{
                top: `${8 + hoveredIndex * 48 + 20}px`, // center on the button
              }}
            >
              {socialItems[hoveredIndex].name}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}