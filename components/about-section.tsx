"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Trophy, MapPin, Github, Instagram, Globe, FileText, Play, Pause, SkipBack, SkipForward, Heart, Volume2 } from "lucide-react"
import { SiSpotify } from "react-icons/si"
import { BackgroundLines } from "@/components/ui/background-lines"
import { useMusic } from "@/lib/music-context"





export default function AboutSection() {
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress, handleProgressClick } = useMusic()

  const usefulImages = [
    "/useful/image1.jpeg",
    "/useful/image2.jpeg",
    "/useful/image3.jpeg",
    "/useful/image4.jpeg",
    "/useful/image5.jpeg",
    "/useful/image6.jpg",
    "/useful/image7.jpg",
    "/useful/image8.jpg",
    "/useful/image9.jpeg"
  ]




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
          {"About Me".split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="inline-block hover:text-red-500 transition-colors duration-200"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Profile Image - Large Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-white border border-gray-200"
          >
            <Image
              src="/profile/profile.jpeg"
              alt="Aman Kumar - Creative Developer"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-center"
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
            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-red-400" />
                <h4 className="text-lg font-bold font-cal-sans">Location</h4>
              </div>
              <p className="text-xs leading-relaxed">
                India, Jharkhand, Ranchi, Tatisilwai
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 flex items-center justify-center">
                <a href="https://github.com/amankuamr" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Github className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 flex items-center justify-center">
                <a href="https://instagram.com/aman.k_sah" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 flex items-center justify-center">
                <a href="https://iimagii.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 flex items-center justify-center">
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
            className="col-span-1 row-span-1 bg-black bg-gradient-to-br from-green-900/40 via-green-800/30 to-green-700/20 border border-gray-200 rounded-2xl p-6 text-white relative"
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Heart className="w-4 h-4" />
              </motion.button>
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
                  className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg shadow-green-400/70"
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-6"
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
            className="col-span-1 row-span-1 bg-white border border-gray-200 rounded-2xl p-6"
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

          {/* Useful Images Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white border border-gray-200 rounded-2xl p-0 overflow-hidden h-full"
          >
            <div className="flex h-full animate-marquee">
              {usefulImages.map((img, index) => (
                <Image
                  key={`first-${index}`}
                  src={img}
                  alt={`Useful image ${index + 1}`}
                  width={160}
                  height={200}
                  className="flex-shrink-0 object-cover"
                />
              ))}
              {usefulImages.map((img, index) => (
                <Image
                  key={`first-dup-${index}`}
                  src={img}
                  alt={`Useful image ${index + 1}`}
                  width={160}
                  height={200}
                  className="flex-shrink-0 object-cover"
                />
              ))}
            </div>
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
                animation: marquee 20s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </BackgroundLines>
  )
}