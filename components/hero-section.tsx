"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const skillsY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const skillsScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8])
  const buttonsY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9])

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-16 h-16 border-2 border-black/10 rounded-lg rotate-12"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-16 w-12 h-12 bg-black/5 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-8 w-8 h-8 bg-black/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-gray-700"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ y, opacity, fontFamily: 'font1' }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Aman Kumar
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ y: subtitleY, opacity: subtitleOpacity }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              A passionate <span className="font-semibold text-black">Creative Developer & Designer</span> crafting
              digital experiences that blend beautiful design with powerful functionality.
              Specializing in modern web development, UI/UX design, and creative solutions.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ y: skillsY, scale: skillsScale }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {["React", "Next.js", "TypeScript", "UI/UX", "Figma"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="px-3 py-1 bg-gray-100 text-black text-sm font-medium rounded-full border border-gray-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{ y: buttonsY }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium group rounded-full">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-medium rounded-full">
                <a href="https://drive.google.com/file/d/1Zlt4DDvqfDs1ndf5K1x0cJ4hQt3rid4V/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/amankuamr", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aman-kumar-8693a820b/", label: "LinkedIn" },
                { icon: FileText, href: "https://drive.google.com/file/d/1Zlt4DDvqfDs1ndf5K1x0cJ4hQt3rid4V/view?usp=sharing", label: "Resume" },
                { icon: Mail, href: "mailto:amankumar1948sahu@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-black hover:border-black transition-all duration-200 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: imageY, scale: imageScale }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-gray-400/10 rounded-full blur-3xl scale-110" />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <Image
                  src="/profile/profile.jpeg"
                  alt="Aman Kumar - Creative Developer & Designer"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating gradient dots */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}