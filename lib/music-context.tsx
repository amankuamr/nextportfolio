"use client"

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react"

export interface Song {
  name: string
  artist: string
  src: string
  duration: number
}

const songs: Song[] = [
  { name: "A Moment Apart", artist: "Odeszy", src: "/musics/music.mp4", duration: 180 },
  { name: "This Girl", artist: "Kungs", src: "/musics/music2.mp3", duration: 240 },
]

interface MusicContextType {
  isPlaying: boolean
  currentSongIndex: number
  progress: number
  volume: number
  currentSong: Song
  togglePlay: () => void
  nextSong: () => void
  prevSong: () => void
  setVolume: (vol: number) => void
  handleProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider")
  }
  return context
}

interface MusicProviderProps {
  children: ReactNode
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
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

  const value: MusicContextType = {
    isPlaying,
    currentSongIndex,
    progress,
    volume,
    currentSong,
    togglePlay,
    nextSong,
    prevSong,
    setVolume,
    handleProgressClick,
    audioRef,
  }

  return (
    <MusicContext.Provider value={value}>
      {children}
      <audio ref={audioRef} />
    </MusicContext.Provider>
  )
}