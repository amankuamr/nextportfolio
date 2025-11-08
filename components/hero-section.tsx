"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 lg:py-20 h-screen flex items-start justify-center pt-16 lg:pt-32 overflow-hidden">
      {/* Animated gradient circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1.2, 1],
          opacity: [0, 0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          times: [0, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 6
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1.2, 1],
          opacity: [0, 0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          delay: 0.3,
          times: [0, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 4
        }}
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1.3, 1],
          opacity: [0, 0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          delay: 0.6,
          times: [0, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 8
        }}
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1.1, 1],
          opacity: [0, 0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          delay: 0.9,
          times: [0, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 5
        }}
        className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-full">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[20rem] lg:h-[20rem] xl:w-[24rem] xl:h-[24rem] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0"
              >
                <Image
                  src="/profile/profile.jpeg"
                  alt="Aman Kumar - Creative Developer & Designer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* Decorative elements - hidden on mobile */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="hidden lg:block absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="hidden lg:block absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-6 lg:space-y-8"
          >

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight"
              style={{ fontFamily: 'font1' }}
            >
              Creative Developer & Designer
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Crafting digital experiences that combine beautiful design with powerful functionality.
              Specializing in web development, UI/UX design, and graphics design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            >
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-base">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 text-base">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}