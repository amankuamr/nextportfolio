"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import ViewMyWorksPopup from "@/components/custom/view-my-works-popup"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/registry/magicui/animated-grid-pattern"

const socials = [
  { icon: Github, href: "https://github.com/amankuamr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aman-kumar-8693a820b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:amankumar1948sahu@gmail.com", label: "Email" },
]

export default function MobileHeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="relative h-[100svh] w-full overflow-hidden px-5 flex flex-col items-center justify-center bg-white">
      {/* Animated grid background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
        )}
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-5"
        >
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2.5 rounded-full bg-[conic-gradient(from_0deg,transparent,#2563eb,#1e40af,transparent)] opacity-70 blur-[1px]"
          />
          {/* Soft glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 to-blue-800/15 rounded-full blur-2xl scale-125" />

          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/profile/profile.jpeg"
              alt="Aman Kumar - Creative Developer & Designer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* Accent dots */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-4 w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-5 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-7 w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md"
          />
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.04] border border-black/5 rounded-full text-[11px] font-medium text-gray-700 mb-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
          </span>
          Available for new projects
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-black leading-tight mb-2"
          style={{ fontFamily: "font1" }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Aman Kumar
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-gray-600 leading-relaxed mb-6"
        >
          <span className="font-semibold text-black">Creative Developer & Designer</span>{" "}
          crafting digital experiences that blend beautiful design with powerful functionality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col gap-2.5 w-full max-w-xs"
        >
          <Button
            size="lg"
            className="w-full bg-black text-white hover:bg-gray-800 h-11 text-sm font-medium group rounded-full"
            onClick={() => setIsPopupOpen(true)}
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-black text-black hover:bg-black hover:text-white h-11 text-sm font-medium rounded-full"
          >
            <a
              href="https://drive.google.com/file/d/1Zlt4DDvqfDs1ndf5K1x0cJ4hQt3rid4V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex gap-3 justify-center mt-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-black hover:border-black transition-all duration-200 hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <ViewMyWorksPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
