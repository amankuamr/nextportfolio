"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

// Function to generate multiple box shadows for stars
const generateBoxShadows = (n: number) => {
  let shadows = []
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    shadows.push(`${x}px ${y}px #FFF`)
  }
  return shadows.join(', ')
}

export default function StarfieldAnimation() {
  const [shadowsSmall, setShadowsSmall] = useState('')
  const [shadowsMedium, setShadowsMedium] = useState('')
  const [shadowsBig, setShadowsBig] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setShadowsSmall(generateBoxShadows(700))
    setShadowsMedium(generateBoxShadows(200))
    setShadowsBig(generateBoxShadows(100))
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const mouseX = ((e.clientX - centerX) / (rect.width / 2)) * 5
        const mouseY = ((e.clientY - centerY) / (rect.height / 2)) * 5
        setMousePosition({ x: mouseX, y: mouseY })
      }
    }

    const bgElement = bgRef.current
    if (bgElement) {
      bgElement.addEventListener('mousemove', handleMouseMove)
      return () => bgElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        transform: `translate3d(-${mousePosition.x}%, -${mousePosition.y}%, 0)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Stars layer 1 - small */}
      <motion.div
        className="absolute w-px h-px bg-transparent"
        style={{
          boxShadow: shadowsSmall,
          animation: 'animStar 50s linear infinite'
        }}
      />
      <motion.div
        className="absolute w-px h-px bg-transparent top-[2000px]"
        style={{
          boxShadow: shadowsSmall
        }}
      />

      {/* Stars layer 2 - medium */}
      <motion.div
        className="absolute w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: shadowsMedium,
          animation: 'animStar 100s linear infinite'
        }}
      />
      <motion.div
        className="absolute w-[2px] h-[2px] bg-transparent top-[2000px]"
        style={{
          boxShadow: shadowsMedium
        }}
      />

      {/* Stars layer 3 - big */}
      <motion.div
        className="absolute w-[3px] h-[3px] bg-transparent"
        style={{
          boxShadow: shadowsBig,
          animation: 'animStar 150s linear infinite'
        }}
      />
      <motion.div
        className="absolute w-[3px] h-[3px] bg-transparent top-[2000px]"
        style={{
          boxShadow: shadowsBig
        }}
      />

      <style jsx>{`
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  )
}