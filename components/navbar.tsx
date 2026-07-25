"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Trophy, X, Play, Pause, SkipBack, SkipForward, ChevronRight } from "lucide-react"
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

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.2 } },
}

const sidebarVariants = {
  closed: { x: "100%", transition: { type: "spring" as const, damping: 30, stiffness: 350 } },
  open: { 
    x: 0,
    transition: { type: "spring" as const, damping: 28, stiffness: 220 }
  },
}

const navContainerVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 15 }
  },
}

function MobileMusicPlayer() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress } = useMusic()

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/60 rounded-2xl p-4 text-white shadow-xl shadow-black/10">
      {/* Song Info */}
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold truncate tracking-wide text-zinc-100">{currentSong.name}</h3>
          <p className="text-xs text-zinc-400 truncate mt-0.5">{currentSong.artist}</p>
        </div>
        <SiSpotify className="w-5 h-5 text-emerald-400 flex-shrink-0 animate-pulse" />
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-1 bg-zinc-800 rounded-full mb-4 cursor-pointer group" onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const newProgress = (clickX / rect.width) * 100
        const audio = document.querySelector('audio')
        if (audio) {
          audio.currentTime = (newProgress / 100) * audio.duration
        }
      }}>
        <div className="absolute inset-y-0 left-0 right-0 group-hover:scale-y-150 transition-transform origin-center" />
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={prevSong}
          className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          aria-label="Previous"
        >
          <SkipBack className="w-4 h-4" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={nextSong}
          className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          aria-label="Next"
        >
          <SkipForward className="w-4 h-4" />
        </motion.button>
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

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
          className="relative z-50"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-black hover:bg-white/20 rounded-full shadow-lg w-10 h-10 relative z-50 overflow-hidden"
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
              {/* Backdrop Overlay */}
              <motion.div
                variants={backdropVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar Sheet */}
              <motion.div
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 h-full w-[min(85%,380px)] bg-white/90 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl z-40 flex flex-col justify-between p-6 overflow-y-auto"
                style={{
                  paddingTop: 'calc(4.5rem + env(safe-area-inset-top, 0px))',
                  paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
                }}
              >
                {/* Menu items section */}
                <div className="space-y-6">
                  <div className="px-4 border-b border-gray-200/60 pb-3">
                    <h2 
                      className="text-2xl font-bold text-black"
                      style={{ fontFamily: 'BitcountGridSingle' }}
                    >
                      Menu
                    </h2>
                  </div>
                  <motion.nav 
                    variants={navContainerVariants}
                    className="flex flex-col gap-2"
                  >
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          variants={itemVariants}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                              isActive 
                                ? 'bg-blue-50/70 text-blue-600 font-medium' 
                                : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-950'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center gap-3.5">
                              <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-blue-100/80 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200/80 group-hover:text-gray-950'}`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-semibold tracking-wide">{item.name}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-blue-500 translate-x-0.5' : 'text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5'}`} />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.nav>
                </div>

                {/* Music Player Section */}
                <div className="mt-8 flex-shrink-0">
                  <MobileMusicPlayer />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
