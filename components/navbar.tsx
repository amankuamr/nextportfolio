"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Palette, Code, ImageIcon, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "UI/UX", href: "/ui-ux", icon: Palette },
  { name: "Web Dev", href: "/web-dev", icon: Code },
  { name: "Graphics", href: "/graphics", icon: ImageIcon },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Name on the left */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold text-black">Aman Kumar</h1>
        </motion.div>
      </div>

      {/* Desktop Navigation - Pill shaped with hover effects */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-4 py-3">
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative">
                  <Link
                    href={item.href}
                    className={`flex items-center transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/20 group relative ${
                      pathname === item.href ? 'bg-gradient-to-r from-pink-400 to-orange-500 text-white' : 'text-black hover:text-gray-600'
                    }`}
                  >
                    <item.icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 relative z-10" />
                    <motion.span
                      className="text-sm font-medium ml-2 whitespace-nowrap relative z-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: pathname === item.href ? 1 : 0,
                        x: pathname === item.href ? 0 : -10
                      }}
                      whileHover={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      exit={{
                        opacity: 0,
                        x: -10,
                        transition: { duration: 0.2, ease: "easeIn" }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {item.name}
                    </motion.span>
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                  {/* Horizontal line - visible when not hovered */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"
                    initial={{ opacity: pathname === item.href ? 0 : 1, scaleX: pathname === item.href ? 0 : 1 }}
                    animate={{
                      opacity: pathname === item.href ? 0 : 1,
                      scaleX: pathname === item.href ? 0 : 1
                    }}
                    whileHover={{
                      opacity: 0,
                      scaleX: 0,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu button - only visible on mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50 max-w-[44px] max-h-[44px]">
        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-black hover:bg-white/20 rounded-full shadow-lg w-11 h-11"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1/2 bg-white border-b border-gray-200 shadow-lg z-40"
          >
            {/* Close button inside the menu */}
            <div className="absolute top-4 right-4 z-50">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 text-black rounded-full shadow-md"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col justify-center items-center h-full space-y-6 pt-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-6 py-3 text-black hover:text-gray-600 rounded-lg transition-all duration-200 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
