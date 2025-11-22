"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Briefcase, Palette, Star, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherGraphicsProjects from "@/components/other-graphics-projects"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function PostersDesignCaseStudy() {
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
          <Link href="/graphics">
            <Button variant="ghost" className="text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Graphics Design
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
              Posters Designs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lead designer for Tech Pragati Tech Fest posters, supporting my team in creating promotional materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Tech Pragati Tech Fest</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Lead Graphics Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
              <p className="text-muted-foreground">10 Promotional Posters</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <div
              className="relative group"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <Image
                src="/graphics design/poster/poster7.png"
                alt="Posters Design Preview"
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

        {/* Project Overview */}
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
            As the lead graphics designer for Tech Pragati Tech Fest, I took charge of creating a comprehensive
            set of promotional posters. Working closely with my team, I developed 10 unique poster designs that
            effectively communicated the event&apos;s theme, attracted participants, and built excitement around
            the tech festival. Each poster was crafted to be visually striking while maintaining brand consistency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Team Leadership</h3>
              <p className="text-sm text-muted-foreground">Guided and supported team members throughout the design process</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Palette className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Creative Direction</h3>
              <p className="text-sm text-muted-foreground">Established design standards and visual guidelines</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold mb-2">Event Promotion</h3>
              <p className="text-sm text-muted-foreground">Created impactful promotional materials for maximum reach</p>
            </div>
          </div>
        </motion.section>

        {/* The Challenge */}
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Design Requirements</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Create 10 unique poster designs for different event aspects</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Maintain consistent branding across all promotional materials</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Design for both digital and print distribution</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Lead and mentor junior team members in design execution</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* The Solution */}
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
            I approached this project with a structured design methodology, establishing clear guidelines
            and workflows for the team. By creating a cohesive design system and providing hands-on
            guidance, I ensured that all 10 posters maintained high quality and brand consistency while
            allowing creative expression within the established framework.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Brand Consistency</h3>
              <p className="text-sm text-green-700">Unified visual language across all promotional materials</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Team Collaboration</h3>
              <p className="text-sm text-green-700">Effective leadership and support for team members</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Creative Variety</h3>
              <p className="text-sm text-green-700">10 unique designs catering to different event themes</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Multi-Format Ready</h3>
              <p className="text-sm text-green-700">Optimized for both digital and print distribution</p>
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
              <h3 className="text-xl font-semibold mb-3">Brand Guidelines</h3>
              <p className="text-muted-foreground mb-4">Established comprehensive design standards for consistency</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Color palette adherence</li>
                <li>• Typography standards</li>
                <li>• Logo usage guidelines</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Team Mentorship</h3>
              <p className="text-muted-foreground mb-4">Guided junior designers through the creative process</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Design feedback sessions</li>
                <li>• Skill development support</li>
                <li>• Quality control oversight</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Event-Specific Designs</h3>
              <p className="text-muted-foreground mb-4">Tailored posters for different Tech Fest activities</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Workshop promotions</li>
                <li>• Competition announcements</li>
                <li>• Speaker highlights</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Distribution Ready</h3>
              <p className="text-muted-foreground mb-4">Prepared assets for various marketing channels</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Social media formats</li>
                <li>• Print specifications</li>
                <li>• Web banner sizes</li>
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
            Design Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
                <p className="text-muted-foreground">
                  Developed a comprehensive design strategy for the Tech Fest, identifying key themes,
                  target audiences, and promotional goals for each poster.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Brand System Creation</h3>
                <p className="text-muted-foreground">
                  Established design guidelines including color schemes, typography, and visual elements
                  to ensure consistency across all promotional materials.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Led design sessions with team members, providing creative direction and technical
                  guidance while fostering individual growth and creativity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design Execution</h3>
                <p className="text-muted-foreground">
                  Created 10 unique poster designs, each optimized for different marketing channels
                  and event promotion needs, ensuring high visual impact.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Final Review & Delivery</h3>
                <p className="text-muted-foreground">
                  Conducted quality reviews, made final adjustments, and prepared all assets
                  for distribution across various platforms and print formats.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Screenshots */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Poster Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "poster1.png", "poster2.png", "poster3.png", "poster4.png", "poster5.png",
              "poster6.png", "poster7.png", "poster8.png", "poster9.png", "poster10.png"
            ].map((poster, index) => (
              <div
                key={poster}
                className="relative group"
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              >
                <Image
                  src={`/graphics design/poster/${poster}`}
                  alt={`Tech Pragati Poster ${index + 1}`}
                  width={400}
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
            ))}
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
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Team Development</h3>
              <p className="text-blue-700">Successfully mentored and developed team members&apos; design skills</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Event Success</h3>
              <p className="text-blue-700">Comprehensive promotional campaign supporting Tech Fest objectives</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Palette className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Design Excellence</h3>
              <p className="text-blue-700">10 high-quality, brand-consistent poster designs delivered</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Leadership Skills</h3>
              <p className="text-blue-700">Demonstrated effective team leadership and creative direction</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Tech Pragati Tech Fest poster project showcased my ability to lead a design team while
            delivering high-quality promotional materials. By creating 10 unique posters and establishing
            design standards, I contributed significantly to the event&apos;s marketing success. The experience
            enhanced my leadership skills and demonstrated the impact of cohesive visual communication
            in event promotion.
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
            {["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "Color Theory", "Typography", "Print Design"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <OtherGraphicsProjects currentSlug="/graphics/design-process/posters-design" />
        <ScrollButtons />
      </div>
    </div>
  )
}