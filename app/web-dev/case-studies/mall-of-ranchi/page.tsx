"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Gamepad2, Zap, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollButtons from "@/components/custom/scroll-buttons"
import OtherCaseStudies from "@/components/other-case-studies"

export default function MallOfRanchiCaseStudy() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/web-dev">
            <Button variant="ghost" className="text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Web Development Projects
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>
              Mall Of Ranchi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive Lottery Slot Game with Real-Time Admin Control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Client Project</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Codestam Technologies</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/mallof.png"
                alt="Mall Of Ranchi Project Preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="text-sm font-medium">Protected Content</p>
                  <p className="text-xs">Right-click disabled</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Mall Of Ranchi is an innovative lottery slot game developed for Codestam Technologies. The project features
            a dynamic main game page where players participate in real-time lottery draws, connected to an admin panel
            that controls the game mechanics. Players enter 6-digit numbers, competing across 12 exciting rounds with
            valuable prizes, including a Skoda car as the grand prize.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Interactive Gaming</h3>
              <p className="text-sm text-muted-foreground">Engaging lottery experience with real-time updates</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Real-Time Sync</h3>
              <p className="text-sm text-muted-foreground">Firebase-powered live data synchronization</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Trophy className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Prize System</h3>
              <p className="text-sm text-muted-foreground">12-round competition with valuable rewards</p>
            </div>
          </div>
        </motion.section>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            The Problem
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Challenges Faced</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Need for an engaging, interactive lottery game for Mall Of Ranchi</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Real-time synchronization between player interface and admin control panel</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing a fair and transparent 6-digit number lottery system</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Managing 12 rounds with winner selection and prize distribution</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            The Solution
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I developed a comprehensive lottery game platform using Next.js and Firebase real-time database.
            The solution includes a player-facing game interface and a separate admin panel for game management,
            ensuring seamless real-time communication and an exciting user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Real-Time Integration</h3>
              <p className="text-sm text-green-700">Firebase-powered live updates between admin and player interfaces</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Interactive UI</h3>
              <p className="text-sm text-green-700">Engaging user interface with smooth animations and transitions</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Admin Control</h3>
              <p className="text-sm text-green-700">Comprehensive admin panel for managing game rounds and winners</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Prize Management</h3>
              <p className="text-sm text-green-700">Automated winner selection and prize distribution system</p>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Real-Time Lottery System</h3>
              <p className="text-muted-foreground mb-4">6-digit number lottery with instant result updates</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Live number drawing from admin panel</li>
                <li>• Instant winner announcements</li>
                <li>• Real-time participant updates</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">12-Round Competition</h3>
              <p className="text-muted-foreground mb-4">Structured game flow with escalating excitement</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Progressive round system</li>
                <li>• Winner tracking across rounds</li>
                <li>• Prize value progression</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Admin Dashboard</h3>
              <p className="text-muted-foreground mb-4">Comprehensive control panel for game management</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Number input and validation</li>
                <li>• Round management</li>
                <li>• Winner selection controls</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Prize Distribution</h3>
              <p className="text-muted-foreground mb-4">Automated system for fair prize allocation</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Skoda car as grand prize</li>
                <li>• Multiple prize tiers</li>
                <li>• Transparent winner selection</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Development Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Development Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planning & Architecture</h3>
                <p className="text-muted-foreground">
                  Designed the system architecture focusing on real-time communication between player and admin interfaces.
                  Planned the 12-round structure and prize distribution logic.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Built responsive user interfaces for both player and admin experiences using Next.js and modern UI techniques.
                  Implemented engaging animations and interactive elements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Firebase Integration</h3>
                <p className="text-muted-foreground">
                  Integrated Firebase real-time database for seamless data synchronization. Implemented secure admin controls
                  and real-time updates for lottery numbers and winner announcements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing & Deployment</h3>
                <p className="text-muted-foreground">
                  Conducted thorough testing for real-time functionality and user experience. Ensured fair lottery mechanics
                  and deployed the application for live use at Mall Of Ranchi.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Client Project</h3>
              <p className="text-blue-700">Successfully delivered for Codestam Technologies</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Real-Time Technology</h3>
              <p className="text-blue-700">Advanced Firebase integration expertise</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">User Engagement</h3>
              <p className="text-blue-700">Interactive lottery experience for participants</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Scalable Solution</h3>
              <p className="text-blue-700">Flexible system for future game variations</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Mall Of Ranchi lottery game represents a successful implementation of real-time web technologies
            in a gaming context. This project demonstrates my ability to create engaging, interactive applications
            with complex state management and live data synchronization, delivering value for both the client
            and end users through an exciting lottery experience.
          </p>
        </motion.section>

        {/* Tools Used */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Real-time Database", "Framer Motion", "Vercel", "Git"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Live Demo */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Mall Of Ranchi
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out the live version of the lottery game in action.
            </p>
            <Button asChild size="lg">
              <a href="https://mall-of-ranchi.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="mall-of-ranchi" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}