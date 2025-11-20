"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Heart, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

export default function EventOfDistinctionCaseStudy() {
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
              Event of Distinction
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Non-Profit Organization Website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Non-Profit Website</p>
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

          <div className="bg-gradient-to-r from-green-400/10 to-teal-500/10 border border-green-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
              src="/projectss/EOD.png"
              alt="Event of Distinction Project Preview"
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
            Event of Distinction is a website created for a non-profit organization focused on
            community development and charitable activities. This project represents my commitment
            to using web development skills for social good, creating an accessible and informative
            platform that helps the organization connect with their community and supporters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Heart className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-semibold mb-2">Social Impact</h3>
              <p className="text-sm text-muted-foreground">Supporting non-profit missions through technology</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-semibold mb-2">Community Focus</h3>
              <p className="text-sm text-muted-foreground">Connecting organizations with their communities</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">Inclusive design for diverse user groups</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Non-Profit Website Requirements</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating an accessible platform for diverse user groups</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Communicating mission and impact effectively</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Facilitating donations and volunteer sign-ups</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Maintaining professional appearance on limited budget</span>
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
            I developed a clean, professional website that effectively communicates the organization&apos;s
            mission while providing practical functionality for supporters. The design balances
            aesthetic appeal with usability, ensuring the site serves both informational and
            actionable purposes for the non-profit&apos;s audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Accessible Design</h3>
              <p className="text-sm text-green-700">WCAG compliant with clear navigation and readable content</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Mission-Driven Content</h3>
              <p className="text-sm text-green-700">Compelling storytelling that inspires action and support</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Call-to-Action Focus</h3>
              <p className="text-sm text-green-700">Clear pathways for donations, volunteering, and engagement</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Mobile Responsive</h3>
              <p className="text-sm text-green-700">Optimized experience across all devices and screen sizes</p>
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
              <h3 className="text-xl font-semibold mb-3">About & Mission</h3>
              <p className="text-muted-foreground mb-4">Clear presentation of organization&apos;s purpose and goals</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mission statement</li>
                <li>• History and background</li>
                <li>• Impact stories</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Programs & Services</h3>
              <p className="text-muted-foreground mb-4">Detailed information about organizational activities</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current initiatives</li>
                <li>• Upcoming events</li>
                <li>• Service descriptions</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
              <p className="text-muted-foreground mb-4">Multiple ways for community members to participate</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Volunteer opportunities</li>
                <li>• Donation options</li>
                <li>• Partnership inquiries</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Contact & Location</h3>
              <p className="text-muted-foreground mb-4">Easy access to organizational contact information</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contact forms</li>
                <li>• Location information</li>
                <li>• Social media links</li>
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
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Semantic HTML Structure</h3>
                <p className="text-muted-foreground">
                  Built with semantic HTML5 elements for better accessibility and SEO,
                  ensuring the site is usable by assistive technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Responsive CSS Design</h3>
                <p className="text-muted-foreground">
                  Implemented mobile-first responsive design using CSS Grid and Flexbox,
                  ensuring optimal viewing experience across all devices.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive JavaScript</h3>
                <p className="text-muted-foreground">
                  Added interactive elements including form validation, smooth scrolling,
                  and dynamic content loading for enhanced user experience.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Optimized images, minified code, and implemented best practices for
                  fast loading times and smooth user interactions.
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
              <Heart className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Social Good</h3>
              <p className="text-blue-700">Contributing to non-profit missions through technology</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Community Reach</h3>
              <p className="text-blue-700">Helping organizations connect with their communities</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Award className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Professional Skills</h3>
              <p className="text-blue-700">Developing websites for real-world impact</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Globe className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Accessibility Focus</h3>
              <p className="text-blue-700">Creating inclusive web experiences</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Event of Distinction represents my commitment to using web development for positive social
            impact. This project allowed me to create a meaningful platform that serves a non-profit
            organization&apos;s needs while demonstrating my ability to build accessible, user-friendly
            websites that effectively communicate important missions and facilitate community engagement.
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
            {["HTML", "CSS", "JavaScript", "Vercel", "Git", "Responsive Design", "Accessibility"].map((tool) => (
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
          <div className="bg-gradient-to-r from-green-400/10 to-teal-500/10 border border-green-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Event of Distinction Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Visit the non-profit organization website to see the impact of community-focused web design.
            </p>
            <Button asChild size="lg">
              <a href="https://eventof-distinct.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="event-of-distinction" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}