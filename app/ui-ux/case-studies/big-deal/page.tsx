"use client"

import { motion} from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, Users, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/custom/scroll-buttons"
import { BentoGridShowcase } from "@/components/ui/bento-product-features"

export default function BigDealCaseStudy() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


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
              Big Deal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Car Rental Service with Modern UI/UX and Fluid Animations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">College Project</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">UI/UX Designer & Team Member</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">Final Year Project</p>
            </div>
          </div>

          <div
            className="relative w-full h-[300px] md:h-[400px] bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: 'url(/casestudybg/bigdeal/parallax.png)',
              backgroundAttachment: 'fixed',
              backgroundSize: isMobile ? 'cover' : '80%',
              backgroundColor: '#f0f0f0'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1
                className="text-6xl sm:text-8xl font-bold text-white drop-shadow-lg"
                style={{ fontFamily: 'BitcountGridSingle' }}
              >
                Big Deal
              </h1>
            </motion.div>
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
            Big Deal is a comprehensive car rental service platform that I developed as a major project for my college final year, collaborating with two teammates. The project focused on creating an intuitive and visually appealing user experience for car rentals, combining modern UI/UX design with fluid animations. We used Figma to create design components and Framer to bring the design to life with seamless animations and hosting capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">Major project with 2 teammates for final year</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Car Rental Service</h3>
              <p className="text-sm text-muted-foreground">Complete platform for vehicle rental bookings</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Project Challenges</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating a comprehensive car rental platform with complex booking flows</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Managing team collaboration and design consistency across multiple contributors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing fluid animations without traditional coding knowledge</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ensuring seamless user experience from design to live implementation</span>
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
            Our team developed Big Deal using a modern design-to-development workflow. We started with Figma to create comprehensive design systems including blocks, materials, buttons, and navigation components. Framer served as the bridge between design and implementation, providing a no-code environment for creating fluid animations and hosting the final website.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Figma Design System</h3>
              <p className="text-sm text-green-700">Comprehensive component library for consistent design</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Framer Implementation</h3>
              <p className="text-sm text-green-700">No-code platform for fluid animations and hosting</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Team Collaboration</h3>
              <p className="text-sm text-green-700">Coordinated workflow between team members</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Live Platform</h3>
              <p className="text-sm text-green-700">Fully functional website with seamless user experience</p>
            </div>
          </div>
        </motion.section>

        {/* Design Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Design Features
          </h2>
          <BentoGridShowcase
            integration={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <div
                  className="relative group mb-4"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ userSelect: 'none' }}
                >
                  <Image
                    src="/projectss/bigdeal/deal1.png"
                    alt="Big Deal Home Screen"
                    width={400}
                    height={300}
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
                <h3 className="text-xl font-semibold mb-2">Home Screen</h3>
                <p className="text-muted-foreground">Intuitive landing page with car listings and search functionality.</p>
              </div>
            }
            trackers={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">Booking Flow</h3>
                <p className="text-muted-foreground">Seamless booking process with date and car selection.</p>
              </div>
            }
            statistic={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">User Dashboard</h3>
                <p className="text-muted-foreground">Personalized dashboard for managing bookings and preferences.</p>
              </div>
            }
            focus={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">Car Details</h3>
                <p className="text-muted-foreground">Detailed car information with images and specifications.</p>
              </div>
            }
            productivity={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">Payment Integration</h3>
                <p className="text-muted-foreground">Secure payment processing for rentals.</p>
              </div>
            }
            shortcuts={
              <div className="p-6 bg-gray-50 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">Admin Panel</h3>
                <p className="text-muted-foreground">Comprehensive admin interface for managing cars, bookings, and users.</p>
              </div>
            }
          />
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
                  Analyzed car rental market, user needs, and competitor platforms to define project scope and requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Figma Design System</h3>
                <p className="text-muted-foreground">
                  Created comprehensive design components including blocks, materials, buttons, and navigation bars for consistency.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Framer Implementation</h3>
                <p className="text-muted-foreground">
                  Used Framer&apos;s no-code environment to assemble components, add fluid animations, and prepare for hosting.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration & Testing</h3>
                <p className="text-muted-foreground">
                  Coordinated with teammates for seamless integration, conducted testing, and deployed the live website.
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
              <h3 className="text-2xl font-bold text-blue-800 mb-2">UI/UX Mastery</h3>
              <p className="text-blue-700">Significantly upgraded design and animation capabilities</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Team Experience</h3>
              <p className="text-blue-700">Valuable collaboration skills with project teammates</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">No-Code Proficiency</h3>
              <p className="text-blue-700">Mastered Framer for design-to-live implementation</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Live Project</h3>
              <p className="text-blue-700">Successfully deployed functional car rental platform</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Big Deal was a transformative project that bridged the gap between design and implementation. Working with teammates taught me the importance of collaboration, while Framer&apos;s capabilities opened new possibilities for bringing designs to life without traditional coding. This project marked a significant milestone in my UI/UX journey and final year academic achievement.
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
            {["Figma", "Framer", "UI/UX Design", "Team Collaboration", "No-Code Development"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="big-deal" />
        <ScrollButtons />
      </div>
    </div>
  )
}