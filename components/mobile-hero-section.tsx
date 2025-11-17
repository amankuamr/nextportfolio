"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MobileHeroSection() {
  return (
    <section className="relative py-0 px-4 overflow-hidden h-screen flex flex-col justify-start pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating geometric shapes - adjusted for mobile */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-5 w-12 h-12 border-2 border-black/10 rounded-lg rotate-12"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-5 w-8 h-8 bg-black/5 rounded-full"
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center space-y-2">
        {/* Profile Image - Top for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-gray-400/10 rounded-full blur-2xl scale-110" />

            {/* Main image container */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl"
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
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
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
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
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
              className="absolute top-1/2 -right-3 w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-gray-700"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-black leading-tight"
            style={{ fontFamily: 'font1' }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-gray-600 leading-relaxed max-w-lg"
          >
            A passionate <span className="font-semibold text-black">Creative Developer & Designer</span> crafting
            digital experiences that blend beautiful design with powerful functionality.
            Specializing in modern web development, UI/UX design, and creative solutions.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {["React", "Next.js", "TypeScript", "UI/UX", "Figma"].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="px-2 py-1 bg-black/10 text-black text-xs font-medium rounded-full border border-black/20"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col gap-1 pt-0"
          >
            <Button asChild size="sm" className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm font-medium group">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium">
              <a href="https://drive.google.com/file/d/1Zlt4DDvqfDs1ndf5K1x0cJ4hQt3rid4V/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex gap-3 justify-center pt-0"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aman@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-black hover:border-black transition-all duration-200 hover:shadow-lg group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}