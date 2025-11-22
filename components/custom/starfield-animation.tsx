"use client"

import React from "react"
import { motion } from "framer-motion"

// Function to generate multiple box shadows for stars
const generateBoxShadows = (n: number, seed?: number) => {
  const shadows = []
  // Use a seeded random function for consistent results
  let randomSeed = seed || 12345
  const seededRandom = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280
    return randomSeed / 233280
  }

  for (let i = 0; i < n; i++) {
    const x = Math.floor(seededRandom() * 2000)
    const y = Math.floor(seededRandom() * 2000)
    shadows.push(`${x}px ${y}px #FFF`)
  }
  return shadows.join(', ')
}

export default function StarfieldAnimation() {
  // Use consistent seeds for server and client
  const shadowsSmall = generateBoxShadows(700, 12345)
  const shadowsMedium = generateBoxShadows(200, 67890)
  const shadowsBig = generateBoxShadows(100, 11111)

  return (
    <div className="absolute inset-0 overflow-hidden">
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