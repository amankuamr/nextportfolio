"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Trophy, X, Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { SiSpotify } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { useMusic } from "@/lib/music-context"

// Morphing path data

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "UI/UX", href: "/ui-ux", icon: Palette },
  { name: "Web Dev", href: "/web-dev", icon: Code },
  { name: "Graphics", href: "/graphics", icon: ImageIcon },
  { name: "Achievements", href: "/achievements", icon: Trophy },
]

function MobileMusicPlayer() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress } = useMusic()

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="bg-black bg-gradient-to-br from-green-900/40 via-green-800/30 to-green-700/20 border border-gray-200 rounded-2xl p-4 text-white relative"
    >
      {/* Song Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-center justify-between gap-2 mb-4"
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium truncate">{currentSong.name}</h3>
          <p className="text-xs text-gray-300 truncate">{currentSong.artist}</p>
        </div>
        <SiSpotify className="w-5 h-5 text-green-400 flex-shrink-0 ml-2" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 30 }}
        className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const clickX = e.clientX - rect.left
          const newProgress = (clickX / rect.width) * 100
          const audio = document.querySelector('audio')
          if (audio) {
            audio.currentTime = (newProgress / 100) * audio.duration
          }
        }}
      >
        <motion.div
          className="h-full bg-green-500 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-between"
      >
        <motion.button
          onClick={prevSong}
          whileHover={{ scale: 1.15, rotate: -10, transition: { type: "spring", stiffness: 400, damping: 20 } }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Previous"
        >
          <SkipBack className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 20 } }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg shadow-green-400/70"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <Pause className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <Play className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <motion.button
          onClick={nextSong}
          whileHover={{ scale: 1.15, rotate: 10, transition: { type: "spring", stiffness: 400, damping: 20 } }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Next"
        >
          <SkipForward className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50"
              >
                {/* Animated Background - Slides down to 75% with spring */}
                <motion.div
                  initial={{ y: "-100%", height: "0%", opacity: 0 }}
                  animate={{ y: 0, height: "75dvh", opacity: 1 }}
                  exit={{ y: "-100%", height: "0%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    mass: 0.8
                  }}
                  className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 rounded-b-3xl z-40 shadow-2xl"
                  style={{
                    height: '75dvh',
                    maxHeight: 'calc(75vh - env(safe-area-inset-top, 0px))',
                    borderBottomLeftRadius: '1.5rem',
                    borderBottomRightRadius: '1.5rem',
                  }}
                />

                {/* Content Container - no close button inside */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50, scale: 0.98 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 35 }}
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
                  {/* Music Player Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 30 }}
                    className="flex-shrink-0 px-6 pt-6 pb-4"
                    style={{ paddingTop: 'calc(1.5rem + env(safe-area-inset-top, 0px))' }}
                  >
                    <MobileMusicPlayer />
                  </motion.div>

                  {/* Menu Grid - 2 Columns */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    className="flex-1 overflow-hidden px-4 pb-6"
                    style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
                  >
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.85, y: 30, rotate: -3 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: -20, rotate: 3 }}
                            transition={{
                              delay: 0.2 + index * 0.06,
                              type: "spring",
                              stiffness: 450,
                              damping: 28,
                              mass: 0.7
                            }}
                            whileHover={{ scale: 1.03, y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                            whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                          >
                            <Link
                              href={item.href}
                              className={`flex flex-col items-center justify-center space-y-1.5 px-3 py-4 text-black hover:text-blue-600 bg-white rounded-xl transition-all duration-300 hover:bg-gray-50 group min-h-0 w-full flex-1 ${
                                isActive ? 'border-2 border-blue-600' : 'border border-gray-200'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <motion.div
                                whileHover={{ scale: 1.15, rotate: 6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                                className="transition-transform duration-300"
                              >
                                <item.icon className="w-5 h-5" />
                              </motion.div>
                              <motion.span
                                className="text-sm font-medium text-center whitespace-nowrap relative z-10"
                                whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                              >
                                {item.name}
                              </motion.span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Close Button - Below the menu in separate white circle */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 20 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 500, damping: 25 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed left-1/2 -translate-x-1/2 z-60 p-3 bg-white border border-gray-200 text-black hover:bg-gray-50 rounded-full shadow-xl transition-colors duration-200"
                  style={{ top: 'calc(75dvh + env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
                  aria-label="Close menu"
                >
                  <motion.div
                    whileHover={{ rotate: 90, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                {/* Overlay for closing */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
