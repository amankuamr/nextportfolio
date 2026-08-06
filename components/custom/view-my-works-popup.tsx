"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Palette, Figma, Code2, X, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface ViewMyWorksPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ViewMyWorksPopup({ isOpen, onClose }: ViewMyWorksPopupProps) {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  const categories = [
    {
      title: "Graphic Design",
      href: "/graphics",
      icon: Palette,
    },
    {
      title: "UI/UX",
      href: "/ui-ux",
      icon: Figma,
    },
    {
      title: "Web Development",
      href: "/web-dev",
      icon: Code2,
    },
  ]

  const handleSelect = (category: { title: string; href: string }) => {
    if (selected) return
    setSelected(category.title)
    setTimeout(() => {
      router.push(category.href)
      onClose()
      setSelected(null)
    }, 650)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"
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
            className="relative z-20 flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 transition-all duration-300"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-black" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-20 bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 sm:p-6 w-full max-w-xs sm:max-w-sm overflow-hidden"
          >
            {/* Accent glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-800/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center mb-5">
              <h2
                className="text-xl sm:text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'BitcountGridSingle' }}
              >
                Choose Category
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mt-2.5" />
            </div>

            <div className="relative z-10 flex flex-col gap-2.5">
              {categories.map((category, index) => {
                const Icon = category.icon
                const isSelected = selected === category.title
                const isDimmed = selected !== null && selected !== category.title
                return (
                  <motion.button
                    key={category.title}
                    type="button"
                    onClick={() => handleSelect(category)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isDimmed ? 0.3 : 1,
                      x: 0,
                      scale: isSelected ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 4, scale: isSelected ? 1.02 : 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center gap-3 w-full p-3 rounded-2xl border text-left cursor-pointer shadow-sm overflow-hidden transition-colors duration-300 ${isSelected
                        ? "border-blue-600 bg-gradient-to-r from-blue-600 to-blue-800"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                      }`}
                  >
                    {/* Fill animation overlay */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 8, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 pointer-events-none"
                      />
                    )}

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-200 ${isSelected
                          ? "bg-white/20"
                          : "bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110"
                        }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isSelected ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="icon"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-medium block transition-colors duration-300 ${isSelected ? "text-white" : "text-black"
                          }`}
                      >
                        {category.title}
                      </span>
                    </div>
                    <svg
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-all duration-200 ${isSelected ? "text-white/70" : "text-gray-400 group-hover:text-black group-hover:translate-x-0.5"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
