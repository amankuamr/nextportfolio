"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Gamepad2, Upload, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollButtons from "@/components/custom/scroll-buttons"
import OtherCaseStudies from "@/components/other-case-studies"

export default function ImagiCaseStudy() {
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
              Imagi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Game Gallery Platform for Sharing Gameplay Screenshots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Personal Project</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">2 Months</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/imagi.png"
                alt="Imagi Project Preview"
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
            Imagi is a personal project I developed to create a dedicated platform for sharing and showcasing
            my gaming screenshots. As an avid gamer, I wanted a space where I could upload, organize, and
            display my gameplay moments in an elegant and user-friendly way. The platform serves as both
            a personal gallery and a potential showcase for gaming content creators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Gaming Focus</h3>
              <p className="text-sm text-muted-foreground">Specialized platform for gaming screenshots</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Upload className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Easy Upload</h3>
              <p className="text-sm text-muted-foreground">Simple interface for uploading and managing images</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Gallery View</h3>
              <p className="text-sm text-muted-foreground">Beautiful grid layout for browsing screenshots</p>
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
                <span>Lack of a dedicated space for gaming content organization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Generic image sharing platforms don&apos;t cater to gaming aesthetics</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Need for a platform that understands gaming context and metadata</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating an engaging user experience for both uploaders and viewers</span>
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
            I built Imagi as a modern web application that combines the best of image galleries with
            gaming-specific features. The platform provides an intuitive interface for uploading screenshots,
            organizing them by games, and showcasing them in an attractive, responsive gallery format.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Gaming-Centric Design</h3>
              <p className="text-sm text-green-700">UI tailored for gaming screenshots with appropriate color schemes and layouts</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Responsive Gallery</h3>
              <p className="text-sm text-green-700">Beautiful grid layout that works across all devices</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Easy Upload Process</h3>
              <p className="text-sm text-green-700">Drag-and-drop functionality with instant preview</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Modern Tech Stack</h3>
              <p className="text-sm text-green-700">Built with Next.js, TypeScript, and Tailwind for performance</p>
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
              <h3 className="text-xl font-semibold mb-3">Image Upload & Management</h3>
              <p className="text-muted-foreground mb-4">Simple drag-and-drop interface for uploading screenshots with automatic optimization</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multiple file upload support</li>
                <li>• Image compression and optimization</li>
                <li>• Batch operations for management</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Gallery Display</h3>
              <p className="text-muted-foreground mb-4">Responsive grid layout with hover effects and smooth animations</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Masonry-style layout</li>
                <li>• Lightbox for full-size viewing</li>
                <li>• Infinite scroll for large collections</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Gaming Integration</h3>
              <p className="text-muted-foreground mb-4">Features specifically designed for gaming content</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Game categorization</li>
                <li>• Screenshot metadata</li>
                <li>• Gaming-focused UI elements</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
              <p className="text-muted-foreground mb-4">Fast loading and smooth user experience</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lazy loading images</li>
                <li>• CDN integration</li>
                <li>• Optimized bundle size</li>
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
                <h3 className="text-xl font-semibold mb-2">Planning & Design</h3>
                <p className="text-muted-foreground">
                  Started with wireframes and mockups, focusing on the user experience for both uploading
                  and viewing gaming screenshots. Considered gaming aesthetics and user behavior patterns.
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
                  Built the user interface using Next.js and TypeScript, implementing responsive design
                  and smooth animations with Framer Motion. Created reusable components for the gallery.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
                <p className="text-muted-foreground">
                  Integrated image upload functionality and database storage for managing the screenshot
                  collection. Implemented proper error handling and loading states.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                <p className="text-muted-foreground">
                  Conducted thorough testing across different devices and browsers. Optimized images
                  and implemented performance best practices for fast loading times.
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
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Personal Project</h3>
              <p className="text-blue-700">Showcase of technical skills and creativity</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Modern Stack</h3>
              <p className="text-blue-700">Experience with cutting-edge web technologies</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Portfolio Piece</h3>
              <p className="text-blue-700">Demonstrates full-stack development capabilities</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Learning Experience</h3>
              <p className="text-blue-700">Hands-on practice with modern development tools</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Imagi represents my passion for both gaming and web development. This project allowed me to
            combine my interests while learning new technologies and implementing best practices. It serves
            as a foundation for future gaming-related projects and demonstrates my ability to create
            engaging, user-focused web applications.
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
            {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Figma", "Git"].map((tool) => (
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
              Experience Imagi Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out the live version of Imagi to see the gaming screenshot gallery in action.
            </p>
            <Button asChild size="lg">
              <a href="https://iimagii.vercel.app" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="imagi" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}