"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, User, Briefcase, Code, Palette, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

export default function PortfolioOldCaseStudy() {
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
              Portfolio (Old)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              First Portfolio Website - Web Development Journey Begins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Personal Portfolio</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">2 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-400/10 to-indigo-500/10 border border-purple-400/20 rounded-2xl p-8">
            <Image
              src="/projectss/portfolio(old).png"
              alt="Portfolio Old Project Preview"
              width={800}
              height={600}
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
            This was my very first portfolio website, created when I was just starting my web development
            journey. Built with pure HTML, CSS, JavaScript, and Bootstrap, this project represents a
            significant milestone in my learning process. It showcases my initial attempts at creating
            a professional online presence and demonstrates the foundational skills I&apos;ve developed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <User className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Personal Branding</h3>
              <p className="text-sm text-muted-foreground">First attempt at creating an online professional identity</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Learning Milestone</h3>
              <p className="text-sm text-muted-foreground">Demonstrating fundamental web development skills</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Growth Journey</h3>
              <p className="text-sm text-muted-foreground">Foundation for future portfolio iterations</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Beginner Developer Challenges</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Limited experience with HTML, CSS, and JavaScript fundamentals</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Understanding responsive design principles and mobile compatibility</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating an effective layout that showcases work and personality</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Balancing aesthetics with functionality on a beginner skill level</span>
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
            I approached this project as a learning experience, focusing on implementing best practices
            I was learning at the time. Using Bootstrap for rapid prototyping and custom CSS for styling,
            I created a clean, professional portfolio that effectively presented my work and skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Bootstrap Framework</h3>
              <p className="text-sm text-green-700">Utilized Bootstrap components for consistent, responsive design</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Vanilla JavaScript</h3>
              <p className="text-sm text-green-700">Implemented interactive elements with pure JavaScript</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Clean HTML Structure</h3>
              <p className="text-sm text-green-700">Semantic HTML for better accessibility and SEO</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Custom Styling</h3>
              <p className="text-sm text-green-700">Personalized CSS to reflect individual design preferences</p>
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
              <h3 className="text-xl font-semibold mb-3">About Section</h3>
              <p className="text-muted-foreground mb-4">Personal introduction and professional background</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personal story</li>
                <li>• Skills overview</li>
                <li>• Career objectives</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Portfolio Showcase</h3>
              <p className="text-muted-foreground mb-4">Display of projects and work samples</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Project galleries</li>
                <li>• Case studies</li>
                <li>• Live demos</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
              <p className="text-muted-foreground mb-4">Technical competencies and expertise areas</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Programming languages</li>
                <li>• Frameworks & tools</li>
                <li>• Design skills</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <p className="text-muted-foreground mb-4">Ways to get in touch and connect</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contact forms</li>
                <li>• Social media links</li>
                <li>• Professional networks</li>
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
                <h3 className="text-xl font-semibold mb-2">HTML Foundation</h3>
                <p className="text-muted-foreground">
                  Built semantic HTML structure following best practices for accessibility
                  and search engine optimization from the ground up.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bootstrap Integration</h3>
                <p className="text-muted-foreground">
                  Leveraged Bootstrap framework for responsive grid system, components,
                  and utilities to accelerate development and ensure consistency.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom CSS Styling</h3>
                <p className="text-muted-foreground">
                  Applied custom CSS for unique branding, animations, and visual elements
                  that reflect personal style and design preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">JavaScript Interactions</h3>
                <p className="text-muted-foreground">
                  Implemented vanilla JavaScript for interactive elements including form
                  validation, smooth scrolling, and dynamic content loading.
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
              <Image
                src="/projectss/portfolioold/portfolio1.png"
                alt="Portfolio Old Homepage"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <Image
                src="/projectss/portfolioold/portfolio2.png"
                alt="Portfolio Old About Section"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/projectss/portfolioold/portfolio3.png"
                alt="Portfolio Old Projects"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <Image
                src="/projectss/portfolioold/portfolio4.png"
                alt="Portfolio Old Contact"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Skill Development</h3>
              <p className="text-blue-700">Mastered fundamental web technologies and best practices</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Professional Presence</h3>
              <p className="text-blue-700">Established online professional identity and credibility</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Palette className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Design Growth</h3>
              <p className="text-blue-700">Developed understanding of user experience and visual design</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Learning Foundation</h3>
              <p className="text-blue-700">Built confidence and foundation for advanced web development</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This first portfolio website marks the beginning of my web development journey. While simple
            in scope, it represents countless hours of learning, experimentation, and growth. It taught
            me the importance of clean code, responsive design, and user-centered thinking - principles
            that continue to guide my work today. This project was not just about creating a website;
            it was about establishing a professional identity and proving to myself that I could bring
            ideas to life through code.
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
            {["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages", "VS Code", "Chrome DevTools"].map((tool) => (
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
          <div className="bg-gradient-to-r from-purple-400/10 to-indigo-500/10 border border-purple-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Portfolio (Old) Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Take a trip back in time to see my first portfolio website and witness the beginning of my web development journey.
            </p>
            <Button asChild size="lg">
              <a href="https://amankumarr.vercel.app" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="portfolio-old" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}