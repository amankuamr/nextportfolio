"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, ChevronRight, SkipBack, SkipForward } from "lucide-react"
import { useMusic } from "@/lib/music-context"

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { isPlaying, currentSong, togglePlay, nextSong, prevSong, progress, handleProgressClick } = useMusic()

  return (
    <div className="hidden md:block fixed bottom-8 left-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative flex items-center space-x-2"
      >
        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Pause className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Play className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Expand Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>

        {/* Expanded Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full mb-4 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-4 w-[200px]"
            >
              {/* Song Info */}
              <div className="mb-3">
                <h3 className="text-sm font-medium text-black truncate">{currentSong.name}</h3>
                <p className="text-xs text-gray-600 truncate">{currentSong.artist}</p>
              </div>

              {/* Progress Bar */}
              <div
                className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer"
                onClick={handleProgressClick}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  onClick={prevSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>

                <motion.button
                  onClick={nextSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}