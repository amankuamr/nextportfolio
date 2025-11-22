"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function MoviezCaseStudy() {
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
          <Link href="/ui-ux">
            <Button variant="ghost" className="text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to UI/UX Projects
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
              Moviez
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Movies, Series and Anime Information Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Personal Project</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">UI/UX Designer & Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">Side Project</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
              src="/projectss/moviez/moviez1.png"
              alt="Moviez Project Preview"
              className="w-full h-auto rounded-lg shadow-lg pointer-events-none" draggable={false}
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
            Moviez is a comprehensive movies, series, and anime information service that leverages the TMDB (The Movie Database) API as its backend. This side project was created to test and enhance my knowledge in backend development and API integration, while implementing the latest UI trends for an appealing user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Entertainment Hub</h3>
              <p className="text-sm text-muted-foreground">Centralized platform for movies, series, and anime information</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">API Integration</h3>
              <p className="text-sm text-muted-foreground">Seamless integration with TMDB for real-time data</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Modern UI Trends</h3>
              <p className="text-sm text-muted-foreground">Latest design patterns with calm, professional colors</p>
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
                <span>Lack of a unified platform for entertainment information across movies, series, and anime</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Need to practice backend development and API integration skills</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing modern UI trends while maintaining professional aesthetics</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ensuring responsive design across all devices for optimal user experience</span>
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
            I developed Moviez as a full-stack application that combines modern frontend design with robust backend API integration. The platform provides comprehensive entertainment information with an intuitive interface that follows the latest UI trends while maintaining a calm and professional color scheme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Unified Entertainment Platform</h3>
              <p className="text-sm text-green-700">Single destination for movies, series, and anime information</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">TMDB API Integration</h3>
              <p className="text-sm text-green-700">Real-time data fetching with efficient API management</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Modern UI Design</h3>
              <p className="text-sm text-green-700">Latest trends with professional color palette</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Responsive Experience</h3>
              <p className="text-sm text-green-700">Optimized for all devices and screen sizes</p>
            </div>
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Design Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/moviez/moviez2.png"
                alt="Moviez Screenshot 1"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg pointer-events-none" draggable={false}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="text-sm font-medium">Protected Content</p>
                  <p className="text-xs">Right-click disabled</p>
                </div>
              </div>
            </div>
            </div>
            <div className="space-y-4">
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/moviez/moviez3.png"
                alt="Moviez Screenshot 2"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg pointer-events-none" draggable={false}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="text-sm font-medium">Protected Content</p>
                  <p className="text-xs">Right-click disabled</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Design Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Research & Planning</h3>
                <p className="text-muted-foreground">
                  Analyzed existing entertainment platforms and identified opportunities for improvement in user experience and information architecture.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">API Integration Design</h3>
                <p className="text-muted-foreground">
                  Planned the backend architecture for efficient TMDB API integration, including data caching and error handling strategies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Created wireframes and high-fidelity designs incorporating latest UI trends with a calm, professional color scheme.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                <p className="text-muted-foreground">
                  Implemented the full-stack solution with thorough testing of API integration and responsive design across devices.
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
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Enhanced Skills</h3>
              <p className="text-blue-700">Improved backend development and API integration expertise</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Modern UI</h3>
              <p className="text-blue-700">Successfully implemented latest design trends</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Professional Design</h3>
              <p className="text-blue-700">Achieved calm and appealing color scheme</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Full-Stack Project</h3>
              <p className="text-blue-700">Complete application from design to deployment</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Moviez successfully demonstrated my ability to create modern, functional applications that integrate complex APIs while maintaining excellent user experience. The project served as a valuable learning experience in full-stack development and modern UI design principles.
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
            {["Figma", "React", "Next.js", "TMDB API", "Tailwind CSS", "TypeScript"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="moviez" />
        <ScrollButtons />
      </div>
    </div>
  )
}