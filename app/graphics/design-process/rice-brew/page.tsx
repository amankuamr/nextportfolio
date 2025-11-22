"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Palette, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherGraphicsProjects from "@/components/other-graphics-projects"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function RiceBrewDesignProcess() {
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
              Rice Brew Can Mockup
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beverage can packaging design for Rice Brew
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Rice Brew</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Can Mockup Design</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <p className="text-muted-foreground">Codestam Technologies</p>
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
                <h3 className="text-xl font-semibold mb-2">Brand Research</h3>
                <p className="text-muted-foreground">
                  Conducted thorough research on Rice Brew&apos;s brand identity, target audience, and beverage market trends. Analyzed competitor packaging designs and current design standards for canned beverages.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Layers className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mockup Creation</h3>
                <p className="text-muted-foreground">
                  Designed multiple can mockup variations incorporating Rice Brew&apos;s logo, color scheme, and messaging. Created realistic 3D renders to showcase how the design would appear on actual packaging.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Finalization</h3>
                <p className="text-muted-foreground">
                  Refined the design based on feedback, ensuring optimal readability, visual appeal, and brand consistency. Prepared final mockups for presentation and production.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Screenshot */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
            Design Preview
          </h2>
          <div className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8">
            <div
              className="relative group"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <Image
                src="/graphics design/Ricebrew.png"
                alt="Rice Brew Can Mockup Design"
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
            {["Adobe Illustrator", "Photoshop", "3D Rendering Software", "Figma"].map((tool) => (
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
        <OtherGraphicsProjects currentSlug="/graphics/design-process/rice-brew" />
        <ScrollButtons />
      </div>
    </div>
  )
}