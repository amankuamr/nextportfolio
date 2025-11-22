"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Monitor, Palette, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollButtons from "@/components/custom/scroll-buttons"
import OtherCaseStudies from "@/components/other-case-studies"

export default function DarlaBrowserCaseStudy() {
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
              Darla Browser
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive Gambling Platform UI/UX Prototype
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">UI/UX Prototype</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Frontend Developer & Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">3 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-400/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8">
            <div
              className="relative group"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <Image
                src="/projectss/darla browser.png"
                alt="Darla Browser Project Preview"
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
            Darla Browser is an interactive prototype of a modern gambling platform, designed to showcase
            cutting-edge UI/UX principles in the gaming industry. This project demonstrates my ability to
            create engaging, user-friendly interfaces for complex applications while maintaining high
            standards of visual design and user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Monitor className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Modern Interface</h3>
              <p className="text-sm text-muted-foreground">Clean, intuitive design for gaming platforms</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Palette className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Visual Excellence</h3>
              <p className="text-sm text-muted-foreground">Striking visuals with smooth animations</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Interactive Elements</h3>
              <p className="text-sm text-muted-foreground">Engaging user interactions and feedback</p>
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
            The Challenge
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Industry Challenges</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating engaging interfaces for repetitive gaming experiences</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Balancing visual appeal with functional clarity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing smooth animations without performance impact</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Designing for user retention in competitive market</span>
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
            I developed a comprehensive prototype that combines modern design principles with interactive
            elements, creating an engaging user experience that could compete in the gambling platform market.
            The design focuses on visual hierarchy, smooth interactions, and user engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Modern UI Framework</h3>
              <p className="text-sm text-green-700">Built with Framer and Next.js for smooth, responsive interactions</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Interactive Components</h3>
              <p className="text-sm text-green-700">Engaging animations and micro-interactions throughout</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Visual Hierarchy</h3>
              <p className="text-sm text-green-700">Clear information architecture with intuitive navigation</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Performance Optimized</h3>
              <p className="text-sm text-green-700">Smooth animations without compromising load times</p>
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
            Key Features Implemented
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Game Selection Interface</h3>
              <p className="text-muted-foreground mb-4">Intuitive game browsing with categories and search functionality</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Grid and list view options</li>
                <li>• Filter by game type and popularity</li>
                <li>• Quick access to favorites</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">User Dashboard</h3>
              <p className="text-muted-foreground mb-4">Comprehensive user profile with balance, history, and preferences</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time balance updates</li>
                <li>• Gaming history and statistics</li>
                <li>• Personalization options</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Interactive Game Cards</h3>
              <p className="text-muted-foreground mb-4">Engaging game previews with hover effects and quick actions</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Live game previews</li>
                <li>• Quick play buttons</li>
                <li>• Rating and review system</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground mb-4">Optimized experience across desktop, tablet, and mobile devices</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mobile-first approach</li>
                <li>• Touch-friendly interactions</li>
                <li>• Adaptive layouts</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Technical Implementation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Technical Implementation
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design System Creation</h3>
                <p className="text-muted-foreground">
                  Developed a comprehensive design system with consistent colors, typography, and component
                  library to ensure visual coherence throughout the platform.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Component Development</h3>
                <p className="text-muted-foreground">
                  Built reusable React components with TypeScript, implementing complex state management
                  for interactive elements like game carousels and user dashboards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Animation Integration</h3>
                <p className="text-muted-foreground">
                  Integrated Framer Motion for smooth animations and micro-interactions, enhancing
                  user engagement without compromising performance.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                <p className="text-muted-foreground">
                  Conducted extensive testing across different devices and browsers, optimizing for
                  performance and ensuring accessibility standards.
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
              <Shield className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Portfolio Showcase</h3>
              <p className="text-blue-700">Demonstrates advanced UI/UX and frontend development skills</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Technical Proficiency</h3>
              <p className="text-blue-700">Experience with modern frameworks and animation libraries</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Palette className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Design Excellence</h3>
              <p className="text-blue-700">Creating engaging interfaces for complex applications</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Monitor className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Industry Ready</h3>
              <p className="text-blue-700">Prepared for real-world commercial projects</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Darla Browser represents a significant milestone in my development career, showcasing my
            ability to create sophisticated, interactive web applications. This prototype demonstrates
            the intersection of design and technology, proving that I can deliver high-quality user
            experiences that meet industry standards.
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
            {["Framer", "Next.js", "Shadcn", "Figma", "TypeScript", "Tailwind CSS", "Vercel"].map((tool) => (
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
          <div className="bg-gradient-to-r from-purple-400/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Darla Browser Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore the interactive prototype to see the modern gambling platform interface in action.
            </p>
            <Button asChild size="lg">
              <a href="https://darla-browser.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="darla-browser" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}