"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Zap, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VnBoloCaseStudy() {
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
              VN Bolo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete UI/UX Design for a Modern Business Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">VN Bolo</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">3 Months</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <img
              src="/projectss/vnbolo.png"
              alt="VN Bolo Project Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
            VN Bolo approached me to design a comprehensive digital platform that would serve both their customers
            and internal team. The project required creating an intuitive website for public users and a robust
            admin panel for managing operations. The goal was to create a seamless experience that reflects the
            brand&apos;s modern and professional image.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">User-Centric Design</h3>
              <p className="text-sm text-muted-foreground">Focused on creating intuitive experiences for all user types</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Business Goals</h3>
              <p className="text-sm text-muted-foreground">Streamlined operations and improved customer engagement</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Modern Technology</h3>
              <p className="text-sm text-muted-foreground">Leveraged latest design trends and best practices</p>
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
                <span>Lack of cohesive brand identity across digital touchpoints</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Inefficient admin processes requiring multiple tools and manual work</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Poor user experience on existing platforms leading to low engagement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Need for scalable design system for future growth</span>
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
            I developed a comprehensive design solution that addressed all the identified challenges while
            creating a foundation for future growth. The solution included a modern, responsive website
            and an intuitive admin panel with streamlined workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Unified Design System</h3>
              <p className="text-sm text-green-700">Created consistent visual language across all platforms</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Intuitive Admin Panel</h3>
              <p className="text-sm text-green-700">Streamlined operations with user-friendly dashboards</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Responsive Website</h3>
              <p className="text-sm text-green-700">Optimized for all devices and screen sizes</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Scalable Architecture</h3>
              <p className="text-sm text-green-700">Built for future feature additions and growth</p>
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
                <h3 className="text-xl font-semibold mb-2">Research & Discovery</h3>
                <p className="text-muted-foreground">
                  Conducted user interviews, competitor analysis, and stakeholder workshops to understand
                  requirements and pain points.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Information Architecture</h3>
                <p className="text-muted-foreground">
                  Created user flows, site maps, and wireframes to establish the foundation of the user experience.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
                <p className="text-muted-foreground">
                  Developed high-fidelity mockups with attention to typography, color palette, and brand consistency.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prototyping & Testing</h3>
                <p className="text-muted-foreground">
                  Created interactive prototypes and conducted usability testing to validate design decisions.
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
              <h3 className="text-2xl font-bold text-blue-800 mb-2">85%</h3>
              <p className="text-blue-700">Improvement in user task completion rates</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">60%</h3>
              <p className="text-blue-700">Reduction in admin processing time</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">95%</h3>
              <p className="text-blue-700">User satisfaction score</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">50+</h3>
              <p className="text-blue-700">Reusable design components created</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The new design system not only solved immediate challenges but also established a foundation
            for future growth. The admin panel reduced operational overhead, while the website improved
            customer engagement and brand perception.
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
            {["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Google Analytics"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Interested in Similar Work?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let&apos;s discuss how I can help bring your vision to life with thoughtful design and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:aman@example.com">
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ui-ux">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}