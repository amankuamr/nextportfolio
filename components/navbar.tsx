"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Menu, X, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

// Morphing path data
const morphData = {
  open: "M 300,-1.9235101 C 947.48798,352.73374 368.08761,564.6745 301.42857,1052.3622",
  close: "M 300,-1.9235101 C -43.940589,374.16231 223.80189,644.6745 301.42857,1052.3622",
  reset: "M 300,-1.9235101 C 304.63084,565.59088 299.51618,538.96021 301.42857,1052.3622",
  initial: "M 300,-1.9235101 C -43.940589,374.16231 223.80189,644.6745 301.42857,1052.3622"
}

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "UI/UX", href: "/ui-ux", icon: Palette },
  { name: "Web Dev", href: "/web-dev", icon: Code },
  { name: "Graphics", href: "/graphics", icon: ImageIcon },
  { name: "Achievements", href: "/achievements", icon: Trophy },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Name on the left */}
      <div className="fixed top-4 left-4 z-50 bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold text-black" style={{ fontFamily: 'DelailtaSignature' }}>Aman Kumar</h1>
        </motion.div>
      </div>

      {/* Desktop Navigation - Clean pill-shaped navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-2 py-2 relative overflow-hidden min-w-[600px]">
          {/* Navigation items container */}
          <div className="flex items-center justify-between relative z-10 px-3">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Active highlight for this item */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full shadow-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8
                      }}
                      style={{
                        boxShadow: "0 4px 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(251, 146, 60, 0.2)"
                      }}
                    />
                  )}

                  <Link
                    href={item.href}
                    className={`flex items-center transition-all duration-300 px-3 py-2 rounded-full hover:bg-white/10 group relative min-w-[80px] justify-center ${
                      isActive ? 'text-white' : 'text-black hover:text-gray-600'
                    }`}
                  >
                    <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 relative z-10" />

                    <motion.span
                      className="text-sm font-medium ml-2 whitespace-nowrap relative z-10"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-2 z-50">
        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-black hover:bg-white/20 rounded-full shadow-lg w-10 h-10 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="absolute w-4 h-0.5 bg-black rounded-full"
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute w-4 h-0.5 bg-black rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute w-4 h-0.5 bg-black rounded-full"
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 }
                }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation - Morphing Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Morphing SVG Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 pointer-events-none"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 800"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-full h-full"
              >
                <motion.path
                  fill="none"
                  stroke="#F06292"
                  strokeWidth="5"
                  d={morphData.initial}
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    closed: { d: morphData.close },
                    open: { d: morphData.open }
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>

            {/* Side Menu */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl z-40 overflow-hidden rounded-r-3xl"
            >
              {/* Menu Content */}
              <div className="relative h-full">
                {/* Menu Items */}
                <div className="flex flex-col justify-center items-start h-full pl-8 pr-16 space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-3 text-black hover:text-gray-600 rounded-lg transition-all duration-200 text-lg font-medium group"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.nav>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-20"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
