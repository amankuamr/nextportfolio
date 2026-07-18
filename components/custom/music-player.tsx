"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, ChevronRight, SkipBack, SkipForward, ListMusic } from "lucide-react"
import { useMusic } from "@/lib/music-context"

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
  const {
    isPlaying,
    currentSong,
    currentSongIndex,
    songs,
    togglePlay,
    nextSong,
    prevSong,
    selectSong,
    progress,
    handleProgressClick,
  } = useMusic()

  return (
    <div className="hidden md:block fixed bottom-8 left-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative flex flex-col items-center space-y-2"
      >
        {/* Capsule holding the Arrow button */}
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-1.5 flex flex-col items-center">
          {/* Expand/Arrow Button */}
          <motion.button
            onClick={() => {
              setIsExpanded((v) => {
                const next = !v
                if (!next) setIsPlaylistOpen(false)
                return next
              })
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Player"
            className={`p-2 rounded-full transition-colors duration-300 ${
              isExpanded ? "bg-white/25 text-black" : "hover:bg-white/20"
            }`}
          >
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          </motion.button>

          {/* Expanded Player Panel (opens to the right of the capsule) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute left-full ml-4 bottom-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-[200px]"
              >
                {/* Header: Song Info + Playlist toggle */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-black truncate">{currentSong.name}</h3>
                    <p className="text-xs text-gray-600 truncate">{currentSong.artist}</p>
                  </div>
                  <motion.button
                    onClick={() => setIsPlaylistOpen((v) => !v)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Playlist"
                    className={`flex-shrink-0 p-1.5 rounded-md transition-colors ${
                      isPlaylistOpen ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <ListMusic className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-2 bg-gray-200 rounded-full mb-3 cursor-pointer"
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
                    className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <SkipBack className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>

                  <motion.button
                    onClick={nextSong}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <SkipForward className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Playlist Menu (opens beside the player panel) */}
                <AnimatePresence>
                  {isPlaylistOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-full ml-3 bottom-0 bg-white border border-gray-200 rounded-lg shadow-xl p-2 w-[220px]"
                    >
                      <p className="px-2 pt-1 pb-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Playlist
                      </p>
                      <div className="flex flex-col gap-1 max-h-[260px] overflow-y-auto overflow-x-hidden">
                        {songs.map((song, index) => {
                          const isCurrent = index === currentSongIndex
                          return (
                            <motion.div
                              key={`${song.name}-${index}`}
                              onClick={() => {
                                if (isCurrent) {
                                  togglePlay()
                                } else {
                                  selectSong(index)
                                }
                              }}
                              whileTap={{ scale: 0.98 }}
                              role="button"
                              tabIndex={0}
                              className={`flex items-center gap-2.5 w-full min-w-0 text-left px-2 py-2 rounded-md transition-colors cursor-pointer ${
                                isCurrent ? "bg-blue-50" : "hover:bg-gray-100"
                              }`}
                            >
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  if (isCurrent) {
                                    togglePlay()
                                  } else {
                                    selectSong(index)
                                  }
                                }}
                                aria-label={isCurrent && isPlaying ? "Pause" : "Play"}
                                className={`flex items-center justify-center w-8 h-8 rounded-md flex-shrink-0 transition-transform hover:scale-105 ${
                                  isCurrent
                                    ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {isCurrent && isPlaying ? (
                                  <Pause className="w-3.5 h-3.5" />
                                ) : (
                                  <Play className="w-3.5 h-3.5" />
                                )}
                              </button>
                              <div className="min-w-0 flex-1">
                                <p
                                  className={`text-sm font-medium truncate ${
                                    isCurrent ? "text-black" : "text-gray-800"
                                  }`}
                                >
                                  {song.name}
                                </p>
                                <p className="text-xs text-gray-600 truncate">{song.artist}</p>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Play/Pause Button (Spotify circle, below the capsule) */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="relative flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg w-12 h-12 hover:bg-white/20 transition-all duration-300"
        >
          {/* Circular progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="#1DB954"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 22}
              strokeDashoffset={2 * Math.PI * 22 * (1 - progress / 100)}
              style={{ transition: "stroke-dashoffset 0.2s linear" }}
            />
          </svg>

          {/* Spotify icon (turns red when playing) */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-8 h-8 transition-colors duration-300 ${
              isPlaying ? "text-red-500" : "text-[#1DB954]"
            }`}
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.766.481-1.124.241-3.084-1.884-6.964-2.307-11.541-1.264-.437.1-.881-.191-.981-.639-.099-.47.191-.881.639-.981 5.021-1.155 9.321-.64 12.804 1.464.359.181.5.706.203 1.18zm1.44-3.18c-.299.44-.945.59-1.385.291-3.504-2.155-8.845-2.781-12.984-1.519-.529.16-1.09-.139-1.25-.668-.16-.529.139-1.09.668-1.25 4.781-1.45 10.781-.75 14.845 1.744.44.271.585 1.011.106 1.402zm.124-3.559C15.524 8.641 8.684 8.421 4.624 9.641c-.641.191-1.32-.161-1.511-.801-.191-.641.161-1.32.801-1.511 4.684-1.421 12.504-1.181 17.564 1.499.599.36.795 1.14.435 1.739-.36.599-1.139.795-1.739.435z" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}