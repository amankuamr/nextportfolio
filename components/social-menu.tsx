"use client"

import { motion } from "framer-motion"
import { Instagram, Github, MessageCircle, Globe } from "lucide-react"

const socialItems = [
  {
    name: "Instagram",
    href: "https://instagram.com/aman_kumar",
    icon: Instagram,
    color: "hover:text-pink-500"
  },
  {
    name: "Imagii",
    href: "https://imagii.com",
    icon: Globe,
    color: "hover:text-blue-500"
  },
  {
    name: "GitHub",
    href: "https://github.com/aman-kumar",
    icon: Github,
    color: "hover:text-gray-800"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: MessageCircle,
    color: "hover:text-green-500"
  }
]

export default function SocialMenu() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2 flex flex-col space-y-2"
      >
        {socialItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
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
    </div>
  )
}