"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Palette, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherGraphicsProjects from "@/components/other-graphics-projects"

export default function VNBoloCarouselDesignProcess() {
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
              VN Bolo Carousel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Website advertisement carousel designed with VN Bolo color scheme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">VN Bolo</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Website Carousel</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Platform</h3>
              <p className="text-muted-foreground">Canva</p>
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
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Brand Consistency</h3>
                <p className="text-muted-foreground">
                  Analyzed VN Bolo&apos;s existing brand identity and color scheme to ensure the carousel design maintains visual consistency across all slides and elements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Layers className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Carousel Layout Design</h3>
                <p className="text-muted-foreground">
                  Created multiple carousel slides with engaging visuals, clear messaging, and call-to-action elements. Designed smooth transitions and interactive elements for web implementation.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advertisement Optimization</h3>
                <p className="text-muted-foreground">
                  Optimized the carousel for web advertisement purposes, ensuring fast loading, mobile responsiveness, and compelling content that drives user engagement and conversions.
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
            Design Screenshots
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
              <img
                src="/graphics design/vncarousal/4.png"
                alt="VN Bolo Carousel Design - Main View"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <img
                  src="/graphics design/vncarousal/1.png"
                  alt="VN Bolo Carousel Design - Slide 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/graphics design/vncarousal/2.png"
                  alt="VN Bolo Carousel Design - Slide 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/graphics design/vncarousal/3.png"
                  alt="VN Bolo Carousel Design - Slide 3"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
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
            {["Canva", "Digital Design Tools", "Brand Guidelines", "Web Advertising"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Other Graphics Projects */}
        <OtherGraphicsProjects currentSlug="/graphics/design-process/vn-bolo-carousel" />
      </div>
    </div>
  )
}