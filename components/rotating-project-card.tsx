"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, PenTool } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Hornet",
    readTime: "5 min read",
    description: "Concept design for a touring app using latest Figma techniques, featuring both low-fidelity wireframes and high-fidelity prototypes",
    image: "/casestudybg/Hornet/banner.png",
    href: "/ui-ux/case-studies/hornet",
    category: "ui-ux"
  },
  {
    title: "Big Deal",
    readTime: "4 min read",
    description: "Car rental service UI/UX with animations - College final year major project with team collaboration",
    image: "/projectss/bigdeal/deal1.png",
    href: "/ui-ux/case-studies/big-deal",
    category: "ui-ux"
  },
  {
    title: "Reboot",
    readTime: "3 min read",
    description: "An ecommerce website for shoes and footwear with modern design and smooth animations.",
    image: "/projectss/reboot.png",
    href: "/web-dev/case-studies/reboot",
    category: "web-dev"
  },
  {
    title: "Imagi",
    readTime: "3 min read",
    description: "A game gallery platform where I upload my gameplay screenshots with a clean, modern interface.",
    image: "/projectss/imagi.png",
    href: "/web-dev/case-studies/imagi",
    category: "web-dev"
  }
]

function CategoryIcon({ category }: { category: string }) {
  if (category === "ui-ux") {
    return <PenTool className="w-6 h-6 text-white" />
  }
  if (category === "web-dev") {
    return <Code className="w-6 h-6 text-white" />
  }
  return null
}

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 17, mass: 0.8 },
  },
  exit: { opacity: 0, x: -24, transition: { duration: 0.2 } },
} as const

const buttonVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 12, mass: 0.6 },
  },
  exit: { opacity: 0, x: -20, scale: 0.9, transition: { duration: 0.18 } },
} as const

export default function RotatingProjectCard() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const project = projects[index]

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
      <AnimatePresence>
        <motion.div
          key={`bg-${project.title}`}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-x-0 -top-16 h-1/3 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={`content-${project.title}`}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 flex h-full flex-col justify-between p-5 text-white"
        >
          <motion.div variants={itemVariants} className="flex items-start gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-white/10 backdrop-blur-md flex items-center justify-center">
              <CategoryIcon category={project.category} />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold truncate">{project.title}</h3>
              <p className="text-xs text-gray-300 mt-0.5">{project.readTime}</p>
            </div>
          </motion.div>

          <div>
            <motion.h4 variants={itemVariants} className="text-sm font-semibold mb-1 truncate">
              {project.title}
            </motion.h4>
            <motion.p variants={itemVariants} className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
              {project.description}
            </motion.p>
            <motion.div variants={buttonVariants} className="mt-3 flex justify-end">
              <motion.a
                href={project.href}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Read Now
                <span className="w-2 h-2 rounded-full bg-blue-600" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
