"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<CursorPosition[]>([])
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Imperative, lag-free positioning (no React re-render)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`
      }

      setTrail(prev => {
        const newTrail = [...prev, { x, y }]
        return newTrail.slice(-10)
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', updateMousePosition)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor - Hidden on mobile */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
        </motion.div>
      </div>

      {/* Color trail - Hidden on mobile */}
      {trail.map((position, index) => {
        const colors = [
          'bg-pink-400',
          'bg-purple-400',
          'bg-blue-400',
          'bg-cyan-400',
          'bg-green-400',
          'bg-yellow-400',
          'bg-orange-400',
          'bg-red-400',
          'bg-indigo-400',
          'bg-teal-400'
        ]

        return (
          <motion.div
            key={index}
            className={`hidden md:block fixed top-0 left-0 pointer-events-none z-[9998] rounded-full ${colors[index % colors.length]}`}
            style={{
              width: `${8 - index * 0.5}px`,
              height: `${8 - index * 0.5}px`,
            }}
            initial={{ x: position.x - 4, y: position.y - 4 }}
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              opacity: (10 - index) / 10
            }}
            transition={{
              duration: 0.1,
              ease: "linear"
            }}
          />
        )
      })}
    </>
  )
}
