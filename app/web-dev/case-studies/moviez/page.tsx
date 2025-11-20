"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Film, Search, Star, Play, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

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
              Moviez
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Movies, Series and Anime Information Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Entertainment Platform</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Frontend Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">4 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400/10 to-indigo-500/10 border border-blue-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
              src="/projectss/moviez.png"
              alt="Moviez Project Preview"
              width={800}
              height={600}
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
            Moviez is a comprehensive entertainment information platform that provides detailed
            information about movies, TV series, and anime. Built as a personal project to explore
            API integration and modern web development practices, this application demonstrates
            my ability to work with external APIs and create engaging user interfaces for content-rich applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Film className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Comprehensive Database</h3>
              <p className="text-sm text-muted-foreground">Movies, series, and anime in one platform</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Search className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Advanced Search</h3>
              <p className="text-sm text-muted-foreground">Powerful search and filtering capabilities</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Star className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Rich Details</h3>
              <p className="text-sm text-muted-foreground">Detailed information and ratings for each title</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Entertainment Data Complexity</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Managing large datasets from external APIs efficiently</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating intuitive navigation for diverse content types</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Handling API rate limits and error states gracefully</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Designing responsive layouts for various screen sizes</span>
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
            I developed Moviez using vanilla JavaScript with modern ES6+ features, integrating
            with The Movie Database (TMDB) API to provide comprehensive entertainment information.
            The application features a clean, responsive design that works seamlessly across devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">TMDB Integration</h3>
              <p className="text-sm text-green-700">Seamless API integration with proper error handling and caching</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Modern JavaScript</h3>
              <p className="text-sm text-green-700">ES6+ features with async/await for clean, maintainable code</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Responsive Design</h3>
              <p className="text-sm text-green-700">Mobile-first approach with CSS Grid and Flexbox</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Performance Optimized</h3>
              <p className="text-sm text-green-700">Lazy loading and efficient DOM manipulation</p>
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
              <h3 className="text-xl font-semibold mb-3">Content Discovery</h3>
              <p className="text-muted-foreground mb-4">Browse trending movies, popular series, and top-rated anime</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Trending content sections</li>
                <li>• Genre-based filtering</li>
                <li>• Popularity and rating sorting</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Detailed Information</h3>
              <p className="text-muted-foreground mb-4">Comprehensive details for each movie, series, and anime</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plot summaries and cast</li>
                <li>• Release dates and ratings</li>
                <li>• Trailer and poster displays</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Search Functionality</h3>
              <p className="text-muted-foreground mb-4">Powerful search with real-time results and suggestions</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-category search</li>
                <li>• Auto-complete suggestions</li>
                <li>• Advanced filter options</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Responsive Interface</h3>
              <p className="text-muted-foreground mb-4">Optimized experience across all devices and screen sizes</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mobile-first design</li>
                <li>• Touch-friendly interactions</li>
                <li>• Adaptive content layout</li>
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
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                <p className="text-muted-foreground">
                  Integrated TMDB API with proper authentication, rate limiting, and error handling
                  to fetch comprehensive movie, series, and anime data.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern JavaScript</h3>
                <p className="text-muted-foreground">
                  Utilized ES6+ features including async/await, arrow functions, and modules
                  for clean, maintainable, and efficient code.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Implemented CSS Grid and Flexbox for flexible layouts that adapt to different
                  screen sizes and provide optimal viewing experiences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Applied lazy loading, image optimization, and efficient DOM manipulation
                  techniques to ensure fast loading and smooth user interactions.
                </p>
              </div>
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
            Project Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/moviez/moviez1.png"
                alt="Moviez Homepage"
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
              
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/moviez/moviez2.png"
                alt="Moviez Movie Details"
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
                alt="Moviez Search Results"
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
              <Film className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">API Integration</h3>
              <p className="text-blue-700">Mastery of external API integration and data handling</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Search className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Modern JavaScript</h3>
              <p className="text-blue-700">Proficiency in contemporary JavaScript development</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Play className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">User Experience</h3>
              <p className="text-blue-700">Creating engaging interfaces for content discovery</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Calendar className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Project Foundation</h3>
              <p className="text-blue-700">Building blocks for larger entertainment platforms</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Moviez represents my exploration into API-driven web applications and modern JavaScript
            development. This project demonstrates my ability to work with external data sources,
            handle complex user interactions, and create responsive, content-rich web applications.
            It serves as a solid foundation for understanding how to build scalable entertainment platforms.
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
            {["HTML", "CSS", "JavaScript", "TMDB API", "GitHub Pages", "ES6+", "CSS Grid"].map((tool) => (
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
          <div className="bg-gradient-to-r from-blue-400/10 to-indigo-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Moviez Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore the entertainment information platform to discover movies, series, and anime.
            </p>
            <Button asChild size="lg">
              <a href="https://amankuamr.github.io/Moviez/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="moviez" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}