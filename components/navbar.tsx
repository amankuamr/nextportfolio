"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

// Morphing path data

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
          <Link href="/">
            <h1 className="text-xl font-bold text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer" style={{ fontFamily: 'DelailtaSignature' }}>Aman Kumar</h1>
          </Link>
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
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8
                      }}
                      style={{
                        boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(30, 64, 175, 0.2)"
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
        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                variant="ghost"
                size="icon"
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
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64 bg-white shadow-lg border border-gray-200 rounded-lg ml-2 mt-2">
            {/* Menu Content */}
            <div className="px-4 py-6">
              {/* Menu Items */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-black hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium group cursor-pointer w-full"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
