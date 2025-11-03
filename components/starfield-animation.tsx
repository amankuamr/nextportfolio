"use client"

import { motion } from "framer-motion"

// Function to generate multiple box shadows for stars
const generateBoxShadows = (n: number) => {
  const shadows = []
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    shadows.push(`${x}px ${y}px #FFF`)
  }
  return shadows.join(', ')
}

export default function StarfieldAnimation() {
  const shadowsSmall = generateBoxShadows(700)
  const shadowsMedium = generateBoxShadows(200)
  const shadowsBig = generateBoxShadows(100)

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