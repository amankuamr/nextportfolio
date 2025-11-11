"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Zap, CheckCircle, ExternalLink, Home, Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KirayaWalaCaseStudy() {
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
              Kiraya Wala
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern Rental Platform UI/UX Design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Kiraya Wala (Codestam Technologies)</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">4 Months</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <img
              src="/projectss/Kirayawala/kiraya5.png"
              alt="Kiraya Wala Project Preview"
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
            Kiraya Wala is a comprehensive rental platform developed under Codestam Technologies.
            This project provided me with invaluable real-world experience in designing intuitive
            user interfaces for a complex marketplace connecting property owners, renters, and agents.
            The platform needed to handle diverse user needs while maintaining simplicity and trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Home className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Property Management</h3>
              <p className="text-sm text-muted-foreground">Streamlined listing and management for property owners</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Search className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">Advanced filtering and discovery for renters</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Booking System</h3>
              <p className="text-sm text-muted-foreground">Seamless reservation and payment flow</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Market Challenges</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Complex user journeys for both renters and property owners</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Trust and verification concerns in rental transactions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Overwhelming amount of information for property discovery</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Need for mobile-first design in a mobile-dominated market</span>
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
            I designed a modern, intuitive platform that simplifies the rental process while
            building trust and ensuring a smooth experience for all stakeholders. The design
            focuses on clarity, efficiency, and user empowerment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">User-Centric Flow</h3>
              <p className="text-sm text-green-700">Simplified journeys for listing, searching, and booking</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Trust Indicators</h3>
              <p className="text-sm text-green-700">Clear verification badges and review systems</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Smart Filtering</h3>
              <p className="text-sm text-green-700">Advanced search with personalized recommendations</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Mobile-First Design</h3>
              <p className="text-sm text-green-700">Optimized experience across all devices</p>
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
              <img
                src="/projectss/Kirayawala/kiraya1.png"
                alt="Kiraya Wala Screenshot 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="/projectss/Kirayawala/kiraya2.png"
                alt="Kiraya Wala Screenshot 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="/projectss/Kirayawala/kiraya3.png"
                alt="Kiraya Wala Screenshot 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="/projectss/Kirayawala/kiraya4.png"
                alt="Kiraya Wala Screenshot 4"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
                <h3 className="text-xl font-semibold mb-2">User Research</h3>
                <p className="text-muted-foreground">
                  Conducted interviews with renters, property owners, and real estate agents to understand
                  pain points and expectations in the rental market.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User Journey Mapping</h3>
                <p className="text-muted-foreground">
                  Created detailed user flows for different personas, identifying key touchpoints
                  and opportunities for improvement.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Wireframing & Prototyping</h3>
                <p className="text-muted-foreground">
                  Developed low and high-fidelity prototypes, iterating based on user feedback
                  and technical constraints.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Usability Testing</h3>
                <p className="text-muted-foreground">
                  Conducted multiple rounds of testing with real users to validate design decisions
                  and ensure intuitive interactions.
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
              <h3 className="text-2xl font-bold text-blue-800 mb-2">70%</h3>
              <p className="text-blue-700">Faster property discovery and booking</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">90%</h3>
              <p className="text-blue-700">User satisfaction with the platform</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">50%</h3>
              <p className="text-blue-700">Reduction in support queries</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Real-World</h3>
              <p className="text-blue-700">Hands-on experience gained</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project was a significant milestone in my design career, providing real-world
            experience working with a tech company on a complex marketplace platform. The
            collaborative environment at Codestam Technologies taught me the importance of
            cross-functional teamwork and iterative design processes.
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
            {["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "UserTesting", "Hotjar"].map((tool) => (
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
              Ready for Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let&apos;s create intuitive designs that solve real user problems and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:aman@example.com">
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ui-ux">
                  Explore More Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}