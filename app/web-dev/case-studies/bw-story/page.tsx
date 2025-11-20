"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Smartphone, Users, MessageCircle, Camera, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

export default function BWStoryCaseStudy() {
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
              BW Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Social Media App Prototype - Connecting Through Stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Social Media Prototype</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Frontend Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">3 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-400/10 to-slate-500/10 border border-gray-400/20 rounded-2xl p-8">
            <div
              className="relative group"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <Image
                src="/projectss/bwstory.png"
                alt="BW Story Project Preview"
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
            BW Story is a social media application prototype featuring a unique black and white aesthetic.
            This project explores the concept of ephemeral storytelling, allowing users to share moments
            through temporary posts that disappear after 24 hours. Built with modern web technologies,
            it demonstrates my ability to create engaging social experiences and intuitive user interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Smartphone className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-sm text-muted-foreground">Optimized for mobile social media consumption</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="font-semibold mb-2">Social Connectivity</h3>
              <p className="text-sm text-muted-foreground">Features for following, liking, and sharing content</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Camera className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="font-semibold mb-2">Story Sharing</h3>
              <p className="text-sm text-muted-foreground">Ephemeral content sharing with 24-hour lifespan</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Social Media Prototype Challenges</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating an intuitive navigation system for multiple app screens</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing engaging interactions typical of social media platforms</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Designing a cohesive user experience across different app sections</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Balancing functionality with the unique black and white aesthetic</span>
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
            I developed BW Story as a multi-page web application that simulates a complete social media
            experience. Using Bootstrap for responsive design and vanilla JavaScript for interactivity,
            I created a prototype that demonstrates modern social media patterns and user engagement features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Multi-Page Architecture</h3>
              <p className="text-sm text-green-700">5 interconnected pages simulating a complete mobile app experience</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Interactive Features</h3>
              <p className="text-sm text-green-700">Like, comment, share, and follow functionalities with smooth animations</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Story System</h3>
              <p className="text-sm text-green-700">Ephemeral content sharing with progress indicators and auto-advance</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">B&W Aesthetic</h3>
              <p className="text-sm text-green-700">Unique monochromatic design that emphasizes content over decoration</p>
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
              <h3 className="text-xl font-semibold mb-3">Feed & Discovery</h3>
              <p className="text-muted-foreground mb-4">Dynamic content feed with infinite scroll and discovery features</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personalized content algorithm</li>
                <li>• Trending posts section</li>
                <li>• Search and explore functionality</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Stories Feature</h3>
              <p className="text-muted-foreground mb-4">Ephemeral storytelling with visual progress indicators</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24-hour content lifespan</li>
                <li>• Multi-media story creation</li>
                <li>• Story highlights and archives</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Social Interactions</h3>
              <p className="text-muted-foreground mb-4">Complete social engagement system with real-time feedback</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Like, comment, and share</li>
                <li>• Follow/unfollow users</li>
                <li>• Direct messaging preview</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Profile Management</h3>
              <p className="text-muted-foreground mb-4">Comprehensive user profiles with customization options</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Profile customization</li>
                <li>• Post history and archives</li>
                <li>• Privacy and notification settings</li>
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
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Page Structure</h3>
                <p className="text-muted-foreground">
                  Created 5 interconnected HTML pages that simulate a complete mobile application
                  experience with consistent navigation and state management.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bootstrap Framework</h3>
                <p className="text-muted-foreground">
                  Utilized Bootstrap&apos;s responsive grid system and components to create a mobile-first
                  design that works seamlessly across different screen sizes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vanilla JavaScript</h3>
                <p className="text-muted-foreground">
                  Implemented interactive features using pure JavaScript including dynamic content
                  loading, form handling, and smooth page transitions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">B&W Design System</h3>
                <p className="text-muted-foreground">
                  Developed a unique design system using only black and white colors, relying on
                  typography, spacing, and subtle shadows for visual hierarchy.
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
              <Smartphone className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Mobile UX Mastery</h3>
              <p className="text-blue-700">Deepened understanding of mobile-first design and touch interactions</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <MessageCircle className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Social Patterns</h3>
              <p className="text-blue-700">Experience implementing complex social media interaction patterns</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">JavaScript Proficiency</h3>
              <p className="text-blue-700">Advanced vanilla JavaScript skills for complex web applications</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Creative Design</h3>
              <p className="text-blue-700">Ability to create engaging experiences with minimal color palette</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BW Story represents my exploration into social media design and user experience. This project
            challenged me to think about how users interact with content in a mobile environment and how
            to create engaging experiences that keep users coming back. The monochromatic aesthetic proved
            that compelling design doesn&apos;t require vibrant colors - sometimes simplicity and thoughtful
            interaction design can be even more powerful. This prototype serves as a foundation for
            understanding modern social media platforms and the psychology behind user engagement.
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
            {["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages", "Mobile-First Design", "UI/UX Design"].map((tool) => (
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
          <div className="bg-gradient-to-r from-gray-400/10 to-slate-500/10 border border-gray-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience BW Story Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore the social media prototype and experience the unique black and white storytelling platform.
            </p>
            <Button asChild size="lg">
              <a href="https://amankuamr.github.io/BWStory/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="bw-story" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}