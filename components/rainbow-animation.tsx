"use client"

import { motion } from "framer-motion"

export default function RainbowAnimation() {
  const rainbows = Array.from({ length: 25 }, (_, i) => i + 1)

  const getRandomColors = () => {
    const colorSets = [
      ['rgb(232 121 249)', 'rgb(96 165 250)', 'rgb(94 234 212)'],
      ['rgb(232 121 249)', 'rgb(94 234 212)', 'rgb(96 165 250)'],
      ['rgb(94 234 212)', 'rgb(232 121 249)', 'rgb(96 165 250)'],
      ['rgb(94 234 212)', 'rgb(96 165 250)', 'rgb(232 121 249)'],
      ['rgb(96 165 250)', 'rgb(94 234 212)', 'rgb(232 121 249)'],
      ['rgb(96 165 250)', 'rgb(232 121 249)', 'rgb(94 234 212)']
    ]
    return colorSets[0] // Use first set to avoid Math.random during render
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal light beams */}
      <div className="absolute bottom-0 left-0 w-full h-0 shadow-[0_0_50vh_40vh_white]"></div>
      <div className="absolute bottom-0 left-0 w-0 h-full shadow-[0_0_35vw_25vw_white]"></div>

      {/* Rainbow beams */}
      {rainbows.map((i) => {
        const colors = getRandomColors()
        const animationTime = 45 - (45 / 25 / 2) * i
        const delay = -(i / 25) * 45

        return (
          <motion.div
            key={i}
            className="absolute top-0 w-0 h-screen origin-top-right"
            style={{
              transform: 'rotate(10deg)',
              right: '-25vw',
              boxShadow: `
                -130px 0 80px 40px white,
                -50px 0 50px 25px ${colors[0]},
                0 0 50px 25px ${colors[1]},
                50px 0 50px 25px ${colors[2]},
                130px 0 80px 40px white
              `
            }}
            animate={{
              right: ['-25vw', '125vw']
            }}
            transition={{
              duration: animationTime,
              ease: 'linear',
              repeat: Infinity,
              delay: delay
            }}
          />
        )
      })}
    </div>
  )
}