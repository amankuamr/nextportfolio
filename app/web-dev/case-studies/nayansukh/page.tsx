"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, User, Briefcase, Code, Palette, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function NayansukhCaseStudy() {
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
              Nayansukh
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete Website Design and Frontend Development for Nayansukh Client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Nayansukh</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Full-Stack Developer & Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">4 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-400/10 to-indigo-500/10 border border-purple-400/20 rounded-2xl p-8">
            <div
              className="relative group"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <Image
                src="/projectss/nayansukh/nayan1.png"
                alt="Nayansukh Project Preview"
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
            I designed and developed a complete website for the Nayansukh client, handling both the design
            and frontend implementation. The project involved creating multiple pages with appropriate
            colors as requested by the client, using HTML, CSS, and Bootstrap for the frontend coding.
            The website was built to meet the client&apos;s specific requirements while maintaining a professional
            and user-friendly interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <User className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Client Collaboration</h3>
              <p className="text-sm text-muted-foreground">Direct work with client on design and color preferences</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Full-Stack Approach</h3>
              <p className="text-sm text-muted-foreground">Complete design and development from concept to delivery</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Delivered according to exact client specifications</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Client Requirements</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Create a multi-page website with consistent design across all pages</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implement specific color scheme as requested by the client</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ensure responsive design that works on all devices</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Deliver both design mockups and functional frontend code</span>
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
            I approached this project with a comprehensive design and development strategy. Starting with
            understanding the client&apos;s vision and color preferences, I created wireframes and mockups
            before implementing the frontend using HTML, CSS, and Bootstrap. The result was a cohesive,
            professional website that met all the client&apos;s requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Custom Design</h3>
              <p className="text-sm text-green-700">Tailored design matching client&apos;s brand and color preferences</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Bootstrap Framework</h3>
              <p className="text-sm text-green-700">Responsive and consistent layout using Bootstrap components</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Multi-Page Website</h3>
              <p className="text-sm text-green-700">Complete website with multiple interconnected pages</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Client Collaboration</h3>
              <p className="text-sm text-green-700">Direct communication and iteration based on client feedback</p>
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
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground mb-4">Mobile-first approach ensuring great experience on all devices</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mobile optimized layouts</li>
                <li>• Tablet compatibility</li>
                <li>• Desktop experience</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Custom Color Scheme</h3>
              <p className="text-muted-foreground mb-4">Implementation of client&apos;s preferred color palette throughout</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Brand color integration</li>
                <li>• Consistent color usage</li>
                <li>• Accessibility considerations</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Multi-Page Structure</h3>
              <p className="text-muted-foreground mb-4">Well-organized content across multiple interconnected pages</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Homepage</li>
                <li>• About/Services pages</li>
                <li>• Contact information</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Bootstrap Components</h3>
              <p className="text-muted-foreground mb-4">Utilization of Bootstrap for consistent and professional UI elements</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Navigation menus</li>
                <li>• Form elements</li>
                <li>• Grid layouts</li>
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
                <h3 className="text-xl font-semibold mb-2">Client Consultation</h3>
                <p className="text-muted-foreground">
                  Initial meetings with the client to understand their vision, brand requirements,
                  and specific color preferences for the website.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design Phase</h3>
                <p className="text-muted-foreground">
                  Created wireframes and mockups incorporating the client&apos;s color scheme and
                  design preferences across all planned pages.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Implemented the design using HTML for structure, CSS for styling with the
                  client&apos;s color palette, and Bootstrap for responsive components.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Client Review & Delivery</h3>
                <p className="text-muted-foreground">
                  Presented the completed website to the client, incorporated any final feedback,
                  and delivered the final product meeting all requirements.
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
              <div
                className="relative group"
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              >
                <Image
                  src="/projectss/nayansukh/nayan2.png"
                  alt="Nayansukh Website - Page 1"
                  width={600}
                  height={400}
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
              <div
                className="relative group"
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              >
                <Image
                  src="/projectss/nayansukh/nayan3.png"
                  alt="Nayansukh Website - Page 2"
                  width={600}
                  height={400}
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
            <div className="space-y-4">
              <div
                className="relative group"
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              >
                <Image
                  src="/projectss/nayansukh/nayan4.png"
                  alt="Nayansukh Website - Page 3"
                  width={600}
                  height={400}
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
              <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Client Satisfaction</h3>
              <p className="text-blue-700">Delivered exactly according to client specifications and color preferences</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Professional Delivery</h3>
              <p className="text-blue-700">Complete website with multiple pages and consistent branding</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Palette className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Design Implementation</h3>
              <p className="text-blue-700">Successful translation of client vision into functional website</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Technical Skills</h3>
              <p className="text-blue-700">Demonstrated full-stack design and development capabilities</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Nayansukh project showcases my ability to work closely with clients to understand their
            vision and deliver a complete website solution. From initial design concepts to final implementation,
            the project demonstrates comprehensive skills in both design and frontend development. The client&apos;s
            specific color requirements were successfully integrated throughout the multi-page website,
            resulting in a cohesive and professional online presence.
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
            {["HTML", "CSS", "Bootstrap", "Figma", "VS Code", "Chrome DevTools", "Git"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="nayansukh" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}