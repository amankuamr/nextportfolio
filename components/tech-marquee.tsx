"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNodedotjs,
  SiMongodb,
  SiGit
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { IconType } from "react-icons"

const techStack: { name: string; icon: IconType; color: string }[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" }
]

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="flex space-x-8 animate-marquee">
          {/* First set of icons */}
          {techStack.map((tech) => (
            <motion.div
              key={`${tech.name}-1`}
              className="flex-shrink-0 flex items-center justify-center w-16 h-16"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <tech.icon size={32} color={tech.color} />
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techStack.map((tech) => (
            <motion.div
              key={`${tech.name}-2`}
              className="flex-shrink-0 flex items-center justify-center w-16 h-16"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <tech.icon size={32} color={tech.color} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}