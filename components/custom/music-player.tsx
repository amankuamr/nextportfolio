"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, ChevronRight, SkipBack, SkipForward } from "lucide-react"

const songs = [
  { name: "A Moment Apart", artist: "Odeszy", src: "/musics/music.mp4", duration: 180 },
  { name: "This Girl", artist: "Kungs", src: "/musics/music2.mp3", duration: 240 },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentSong = songs[currentSongIndex]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    const audio = audioRef.current
    if (audio) {
      if (!isPlaying) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length)
    setProgress(0)
  }

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setProgress(0)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleTimeUpdate = () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100
        setProgress(progressPercent)
      }
      const handleEnded = () => {
        nextSong()
      }
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('ended', handleEnded)
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [currentSongIndex])

  useEffect(() => {
    const audio = audioRef.current
    if (audio && currentSong.src) {
      audio.src = currentSong.src
      audio.load()
      if (isPlaying) {
        audio.play()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong.src])

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newProgress = (clickX / rect.width) * 100
    setProgress(newProgress)
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = (newProgress / 100) * audio.duration
    }
  }

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

      {/* Hidden Audio Element */}
      <audio ref={audioRef} />
    </div>
  )
}