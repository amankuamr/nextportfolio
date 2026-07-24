"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Trophy, X, Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { SiSpotify } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { useMusic } from "@/lib/music-context"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "UI/UX", href: "/ui-ux", icon: Palette },
  { name: "Web Dev", href: "/web-dev", icon: Code },
  { name: "Graphics", href: "/graphics", icon: ImageIcon },
  { name: "Achievements", href: "/achievements", icon: Trophy },
]

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, y: "-100%" },
  open: { 
    opacity: 1, 
    height: "75dvh", 
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  },
}

const contentVariants = {
  closed: { opacity: 0, y: -50, scale: 0.98 },
  open: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { delay: 0.05, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  },
}

const itemVariants = {
  closed: { opacity: 0, scale: 0.9, y: 20 },
  open: (i: number) => ({ 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { delay: 0.1 + i * 0.04, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
}

const closeButtonVariants = {
  closed: { opacity: 0, scale: 0.8, y: 20 },
  open: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { delay: 0.25, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  },
}

function MobileMusicPlayer() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress } = useMusic()

  return (
    <div className="bg-black bg-gradient-to-br from-green-900/40 via-green-800/30 to-green-700/20 border border-gray-200 rounded-2xl p-4 text-white">
      {/* Song Info */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium truncate">{currentSong.name}</h3>
          <p className="text-xs text-gray-300 truncate">{currentSong.artist}</p>
        </div>
        <SiSpotify className="w-5 h-5 text-green-400 flex-shrink-0 ml-2" />
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer" onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const newProgress = (clickX / rect.width) * 100
        const audio = document.querySelector('audio')
        if (audio) {
          audio.currentTime = (newProgress / 100) * audio.duration
        }
      }}>
        <motion.div
          className="h-full bg-green-500 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevSong}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Previous"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg shadow-green-400/70"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button
          onClick={nextSong}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Next"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkTouch = () => setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    checkTouch()
  }, [])

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
      <div className="md:hidden fixed top-4 right-4 z-50">
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

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Android 15 Style Mobile Menu - Background animates down to 75% */}
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50"
              >
                {/* Animated Background - Slides down to 75% with optimized tween */}
                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 rounded-b-3xl z-40 shadow-2xl"
                  style={{
                    height: '75dvh',
                    maxHeight: 'calc(75vh - env(safe-area-inset-top, 0px))',
                    borderBottomLeftRadius: '1.5rem',
                    borderBottomRightRadius: '1.5rem',
                  }}
                />

                {/* Content Container - uses variants for staggered animation */}
                <motion.div
                  variants={contentVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 left-0 right-0 z-50 flex flex-col rounded-b-3xl overflow-hidden"
                  style={{
                    height: '75dvh',
                    maxHeight: 'calc(75vh - env(safe-area-inset-top, 0px))',
                    paddingLeft: 'env(safe-area-inset-left, 0px)',
                    paddingRight: 'env(safe-area-inset-right, 0px)',
                    borderBottomLeftRadius: '1.5rem',
                    borderBottomRightRadius: '1.5rem',
                  }}
                >
                  {/* Music Player Section - static, no animations */}
                  <div className="flex-shrink-0 px-6 pt-6 pb-4" style={{ paddingTop: 'calc(1.5rem + env(safe-area-inset-top, 0px))' }}>
                    <MobileMusicPlayer />
                  </div>

                  {/* Menu Grid - 2 Columns with staggerChildren */}
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      closed: { opacity: 0, y: 20 },
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.1,
                        }
                      },
                      closed: { opacity: 0, y: -10 },
                    }}
                    className="flex-1 overflow-hidden px-4 pb-6"
                    style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
                  >
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                          <motion.div
                            key={item.name}
                            variants={itemVariants}
                            whileHover={isTouch ? undefined : { scale: 1.02, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
                            whileTap={{ scale: 0.97, transition: { duration: 0.08 } }}
                          >
                            <Link
                              href={item.href}
                              className={`flex flex-col items-center justify-center space-y-1.5 px-3 py-4 text-black hover:text-blue-600 bg-white rounded-xl transition-all duration-300 hover:bg-gray-50 group min-h-0 w-full flex-1 ${
                                isActive 
                                  ? 'border-2 border-blue-600' 
                                  : 'border-2 border-gray-200'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="transition-transform duration-300">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="text-sm font-medium text-center whitespace-nowrap relative z-10">
                                {item.name}
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Close Button - Below the menu in separate white circle */}
                <motion.button
                  variants={closeButtonVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed left-1/2 -translate-x-1/2 z-60 p-3 bg-white border border-gray-200 text-black hover:bg-gray-50 rounded-full shadow-xl transition-colors duration-200"
                  style={{ top: 'calc(75dvh + env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
                  aria-label="Close menu"
                >
                  <motion.div
                    whileHover={isTouch ? undefined : { rotate: 90, transition: { duration: 0.3, ease: "easeOut" } }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                {/* Overlay for closing */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 bg-black/20 z-30"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
