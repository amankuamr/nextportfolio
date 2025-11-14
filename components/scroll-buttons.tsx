"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight

      // Show when scrolled past hero (200px) and not near footer
      const showStart = scrollY > 200
      const hideNearFooter = scrollY > documentHeight - windowHeight - 200

      setIsVisible(showStart && !hideNearFooter)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop version */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed right-6 top-1/2 transform translate-y-40 z-50"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-2 flex flex-col space-y-2">
              <motion.button
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:text-black group"
              >
                <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
              </motion.button>
              <motion.button
                onClick={scrollToBottom}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:text-black group"
              >
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-20 right-4 z-50 flex flex-col space-y-2"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
            </motion.button>
            <motion.button
              onClick={scrollToBottom}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}