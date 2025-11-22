"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<CursorPosition[]>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add current position to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }]
        // Keep only last 10 positions for trail
        return newTrail.slice(-10)
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
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
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear"
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
      </motion.div>

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