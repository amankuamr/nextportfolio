"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Trophy, MapPin, Github, Instagram, Globe, FileText, Play, Pause, SkipBack, SkipForward, Heart, Volume2 } from "lucide-react"
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
import { SiSpotify } from "react-icons/si"
import { BackgroundLines } from "@/components/ui/background-lines"
import { useMusic } from "@/lib/music-context"

const techs = [
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
  { icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { icon: SiAdobexd, color: "#FF61F6", name: "Adobe XD" },
  { icon: SiAdobephotoshop, color: "#31A8FF", name: "Photoshop" },
  { icon: SiAdobeillustrator, color: "#FF9A00", name: "Illustrator" },
  { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: SiGit, color: "#F05032", name: "Git" },
  { icon: VscCode, color: "#007ACC", name: "VS Code" }
]

const firstRow = techs.slice(0, techs.length / 2)
const secondRow = techs.slice(techs.length / 2)

export default function AboutSection() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress, handleProgressClick } = useMusic()

  return (
    <BackgroundLines className="py-20 px-4 sm:px-6 lg:px-8 text-black relative overflow-hidden bg-white min-h-screen">
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
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg p-6 flex items-center justify-center"
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
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-3 font-cal-sans">Passionate Creator</h3>
            <p className="text-sm leading-relaxed">
              I&apos;m Aman Kumar, a creative developer and designer with over 3 years of experience crafting digital experiences that blend technical excellence with artistic vision. I specialize in web development, UI/UX design, and graphics design.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 flex flex-col gap-6"
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-1">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-red-400" />
                <h4 className="text-lg font-bold font-cal-sans">Location</h4>
              </div>
              <p className="text-xs leading-relaxed">
                India, Jharkhand, Ranchi, Tatisilwai
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-1 flex items-center justify-center">
                <a href="https://github.com/amankuamr" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Github className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-1 flex items-center justify-center">
                <a href="https://instagram.com/aman.k_sah" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-1 flex items-center justify-center">
                <a href="https://iimagii.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-1 flex items-center justify-center">
                <a href="https://drive.google.com/file/d/1Zlt4DDvqfDs1ndf5K1x0cJ4hQt3rid4V/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <FileText className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Music Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-black bg-gradient-to-bl from-green-900/50 to-transparent border border-gray-200 rounded-2xl shadow-lg p-6 text-white relative"
          >
            <div className="absolute top-2 right-2">
              <SiSpotify className="w-8 h-8 text-green-500" />
            </div>
            <div className="mb-3">
              <h4 className="text-lg font-bold font-cal-sans truncate">{currentSong.name}</h4>
              <p className="text-sm text-gray-300 truncate">{currentSong.artist}</p>
            </div>
            <div
              className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={prevSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg shadow-green-500/50"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  onClick={nextSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-3">
              <Camera className="w-5 h-5 mr-2 text-purple-400" />
              <h4 className="text-lg font-bold font-cal-sans">Beyond Code</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Photography</li>
              <li>• Gaming</li>
              <li>• Hiking</li>
              <li>• Badminton</li>
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
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
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col justify-center"
          >
            <div className="relative flex flex-col gap-2 py-0">
              <div className="flex space-x-8 animate-marquee">
                {firstRow.map((tech, index) => (
                  <motion.div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon size={32} color={tech.color} />
                  </motion.div>
                ))}
                {firstRow.map((tech, index) => (
                  <motion.div
                    key={`first-dup-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon size={32} color={tech.color} />
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-8 animate-marquee-reverse">
                {secondRow.map((tech, index) => (
                  <motion.div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon size={32} color={tech.color} />
                  </motion.div>
                ))}
                {secondRow.map((tech, index) => (
                  <motion.div
                    key={`second-dup-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon size={32} color={tech.color} />
                  </motion.div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
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
                .animate-marquee-reverse {
                  animation: marquee 30s linear infinite reverse;
                }
                .animate-marquee-reverse:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundLines>
  )
}