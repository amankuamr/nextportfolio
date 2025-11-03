"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import StarfieldAnimation from "@/components/starfield-animation"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}>
      <StarfieldAnimation />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>About Me</h2>
            <p className="text-xl mb-6" style={{ fontFamily: 'Home Writing', fontSize: '1.25rem' }}>
              I&apos;m a passionate creative developer and designer with over 5 years of experience
              in crafting digital experiences. I love combining technical expertise with artistic
              vision to create solutions that not only work beautifully but also tell a story.
            </p>
            <p className="text-xl mb-8" style={{ fontFamily: 'Home Writing', fontSize: '1.25rem' }}>
              When I&apos;m not coding or designing, you can find me exploring new technologies,
              contributing to open-source projects, or sketching ideas for my next big project.
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-200">
              <Link href="#contact">Let&apos;s Work Together</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/profile/profile.jpeg"
                alt="Aman Kumar - Creative Developer"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}