"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code, Camera, Trophy, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-black relative overflow-hidden" style={{ background: 'white, radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 119, 198, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          style={{ fontFamily: 'BitcountGridSingle' }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Profile Image - Large Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 flex items-center justify-center"
          >
            <Image
              src="/profile/profile.jpeg"
              alt="Aman Kumar - Creative Developer"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-3 font-cal-sans">Passionate Creator</h3>
            <p className="text-sm leading-relaxed">
              I&apos;m Aman Kumar, a creative developer and designer with over 3 years of experience crafting digital experiences that blend technical excellence with artistic vision. I specialize in web development, UI/UX design, and graphics design.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-3">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <h4 className="text-lg font-bold font-cal-sans">Skills</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Web Development</li>
              <li>• UI/UX Design</li>
              <li>• Graphics Design</li>
              <li>• Branding & Digital Assets</li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-3">
              <Award className="w-5 h-5 mr-2 text-orange-400" />
              <h4 className="text-lg font-bold font-cal-sans">Experience</h4>
            </div>
            <p className="text-sm leading-relaxed">
              3+ years in digital design and development. Worked at Codestam Technologies, completed internships at Plasmid, and led design teams for tech events.
            </p>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-3">
              <Camera className="w-5 h-5 mr-2 text-purple-400" />
              <h4 className="text-lg font-bold font-cal-sans">Beyond Code</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">Photography</span>
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">Gaming</span>
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">Hiking</span>
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">Badminton</span>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-3">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
              <h4 className="text-lg font-bold font-cal-sans">Highlights</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Google UX Certified</li>
              <li>• Tech Fest Leadership</li>
              <li>• Multiple Design Awards</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex items-center justify-between"
          >
            <div>
              <h4 className="text-lg font-bold mb-2 font-cal-sans">Let&apos;s Create Together</h4>
              <p className="text-sm">
                Ready to bring your ideas to life?
              </p>
            </div>
            <Button asChild className="bg-white text-black hover:bg-gray-200">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}