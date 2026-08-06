"use client"

import { useState, useEffect, useCallback, memo, useRef, useLayoutEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion"
import { Home, Palette, Code, ImageIcon, Trophy, Play, Pause, SkipBack, SkipForward, ChevronRight } from "lucide-react"
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

// GPU-composited only: opacity — no layout triggers
const backdropVariants = {
  closed: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } },
  open:   { opacity: 1, transition: { duration: 0.22, ease: "easeOut" as const } },
}

// cubic-bezier tweens are more predictable than spring on mobile GPU
const sidebarVariants = {
  closed: {
    x: "100%",
    transition: { type: "tween" as const, duration: 0.28, ease: [0.32, 0, 0.67, 0] as const }
  },
  open: {
    x: 0,
    transition: { type: "tween" as const, duration: 0.32, ease: [0.33, 1, 0.68, 1] as const }
  },
}

const navContainerVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.08 }
  }
}

const itemVariants = {
  closed: { opacity: 0, x: 16, transition: { duration: 0.1 } },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "tween" as const, duration: 0.22, ease: [0.33, 1, 0.68, 1] as const }
  },
}

// Memoized: won't re-render when the sidebar open/close state changes
const MobileMusicPlayer = memo(function MobileMusicPlayer() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress } = useMusic()

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/60 rounded-2xl p-4 text-white shadow-xl shadow-black/10">
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold truncate tracking-wide text-zinc-100">{currentSong.name}</h3>
          <p className="text-xs text-zinc-400 truncate mt-0.5">{currentSong.artist}</p>
        </div>
        <SiSpotify className="w-5 h-5 text-emerald-400 flex-shrink-0 animate-pulse" />
      </div>

      <div
        className="relative w-full h-1 bg-zinc-800 rounded-full mb-4 cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const newProgress = ((e.clientX - rect.left) / rect.width) * 100
          const audio = document.querySelector('audio')
          if (audio) audio.currentTime = (newProgress / 100) * audio.duration
        }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSong}
          className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          aria-label="Previous"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shadow-md flex items-center justify-center"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying
            ? <Pause className="w-5 h-5 fill-current" />
            : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>
        <button
          onClick={nextSong}
          className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          aria-label="Next"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const indicatorX = useSpring(0, { stiffness: 400, damping: 30, mass: 0.8 })
  const indicatorWidth = useSpring(0, { stiffness: 400, damping: 30, mass: 0.8 })
  const indicatorOpacity = useMotionValue(0)

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(v => !v), [])

  // Preserve scrollbar width to prevent layout shift on scroll lock
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

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useLayoutEffect(() => {
    if (!navRef.current) return
    const activeItem = navItems.find((item) => item.href === pathname)
    if (!activeItem) return
    const node = itemRefs.current[activeItem.name]
    if (!node) return
    const navRect = navRef.current.getBoundingClientRect()
    const itemRect = node.getBoundingClientRect()
    const extraLeft = 12
    const extraRight = 0
    indicatorX.set(itemRect.left - navRect.left - extraLeft)
    indicatorWidth.set(itemRect.width + extraLeft + extraRight)
    indicatorOpacity.set(1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
            <h1
              className="text-xl font-bold text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: 'DelailtaSignature' }}
            >
              Aman Kumar
            </h1>
          </Link>
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          ref={navRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-2 py-2 relative overflow-hidden min-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-2 bottom-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg pointer-events-none"
            style={{
              x: indicatorX,
              width: indicatorWidth,
              opacity: indicatorOpacity,
            }}
          />
          <div className="flex items-center justify-between relative z-10 px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <div
                  key={item.name}
                  ref={(el) => { itemRefs.current[item.name] = el }}
                  className="relative select-none"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center transition-colors duration-200 px-3 py-2 rounded-full relative min-w-[80px] justify-center ${
                      isActive ? 'text-white' : 'text-black hover:text-gray-600'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                    </span>
                  </Link>
                </div>
              )
            })}
          </div>
        </motion.div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-black hover:bg-white/20 rounded-full shadow-lg w-10 h-10 relative overflow-hidden"
          style={{ WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.span
              className="absolute w-4 h-0.5 bg-black rounded-full"
              variants={{ closed: { rotate: 0, y: -6 }, open: { rotate: 45, y: 0 } }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute w-4 h-0.5 bg-black rounded-full"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute w-4 h-0.5 bg-black rounded-full"
              variants={{ closed: { rotate: 0, y: 6 }, open: { rotate: -45, y: 0 } }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </motion.div>
        </Button>
      </div>

      {/* Mobile Menu — sibling-level to avoid nested z-index stacking */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop: opacity only, no blur = much faster on mobile GPU */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed inset-0 bg-black/50 z-[45]"
              onClick={close}
              style={{ willChange: "opacity" }}
            />

            {/* Sidebar: only translate animates = GPU composite layer, zero layout thrash */}
            <motion.div
              key="sidebar"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed top-0 right-0 bottom-0 h-full w-[min(85%,380px)] bg-white border-l border-gray-100 shadow-2xl z-[50] flex flex-col justify-between overflow-y-auto"
              style={{
                willChange: "transform",
                paddingTop: 'calc(4.5rem + env(safe-area-inset-top, 0px))',
                paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
              }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 px-4 mb-3">
                  <div className="h-1.5 w-[12%] rounded-full bg-red-500" />
                  <div className="h-1.5 w-[12%] rounded-full bg-blue-500" />
                  <div className="h-1.5 w-[12%] rounded-full bg-black" />
                </div>

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
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-1"
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-full transition-colors duration-200 group ${
                            isActive
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
                          }`}
                          onClick={close}
                          style={{ WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
                        >
                          <div className="flex items-center gap-3.5">
<div className={`p-2 transition-colors duration-200 ${
    isActive
       ? 'bg-blue-100 text-blue-600'
       : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-950'
} rounded-full`}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide">{item.name}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? 'text-blue-400 translate-x-0.5' : 'text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5'
                          }`} />
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.nav>
              </div>

              <div className="mt-8 flex-shrink-0">
                <MobileMusicPlayer />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
