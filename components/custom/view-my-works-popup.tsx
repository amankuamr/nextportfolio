"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Palette, Figma, Code2 } from "lucide-react"
import Link from "next/link"

interface ViewMyWorksPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ViewMyWorksPopup({ isOpen, onClose }: ViewMyWorksPopupProps) {
  const categories = [
    {
      title: "Graphic Design",
      href: "/graphics",
      icon: Palette,
      circleColor: "bg-pink-100",
      iconColor: "text-pink-600",
      hoverBorder: "hover:border-pink-300",
      hoverShadow: "hover:shadow-pink-100/50",
      activeBg: "active:bg-pink-50/80",
    },
    {
      title: "UI/UX",
      href: "/ui-ux",
      icon: Figma,
      circleColor: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBorder: "hover:border-purple-300",
      hoverShadow: "hover:shadow-purple-100/50",
      activeBg: "active:bg-purple-50/80",
    },
    {
      title: "Web Development",
      href: "/web-dev",
      icon: Code2,
      circleColor: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBorder: "hover:border-blue-300",
      hoverShadow: "hover:shadow-blue-100/50",
      activeBg: "active:bg-blue-50/80",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"
            onClick={onClose}
          />

          {/* Close button in its own circle above the popup menu */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-20 flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 hover:bg-black/5 transition-colors duration-200"
            aria-label="Close popup"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-20 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 sm:p-5 w-full max-w-xs sm:max-w-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 text-center mb-4 sm:mb-5">
              <h2
                className="text-xl sm:text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'BitcountGridSingle' }}
              >
                Choose Category
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full mx-auto mt-2 sm:mt-2.5" />
            </div>

            <div className="relative z-10 flex flex-col gap-2 sm:gap-2.5">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    onClick={onClose}
                    className="group block"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 w-full p-2.5 sm:p-3 rounded-2xl border-2 ${category.hoverBorder} ${category.hoverShadow} ${category.activeBg} bg-white/70 backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-sm`}
                    >
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${category.circleColor} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${category.iconColor} group-hover:scale-110 transition-transform duration-200`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-xs sm:text-sm font-light text-black block"
                          style={{ fontFamily: 'SilianRail', fontWeight: 300 }}
                        >
                          {category.title}
                        </span>
                      </div>
                      <svg
                        className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
