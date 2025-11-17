"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Briefcase, Code, Palette, Star, Settings, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

export default function NayansukhAdminCaseStudy() {
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
              Admin Panel (Nayansukh)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Functional Admin Dashboard Design and Development for Nayansukh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Nayansukh</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Frontend Developer & Designer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-400/10 to-indigo-500/10 border border-purple-400/20 rounded-2xl p-8">
            <Image
              src="/projectss/nayansukh/panel1.png"
              alt="Nayansukh Admin Panel Preview"
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
            I designed and developed a functional admin panel for Nayansukh with proper frontend functionality.
            The task was to create a simple and functional panel with appropriate colors matching the main
            website theme. Using HTML, CSS, JavaScript, and Bootstrap, I built a comprehensive admin interface
            that provides all necessary management capabilities while maintaining visual consistency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Settings className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Admin Functionality</h3>
              <p className="text-sm text-muted-foreground">Complete admin panel with working frontend features</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Palette className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Theme Consistency</h3>
              <p className="text-sm text-muted-foreground">Colors perfectly matching the main website theme</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Management Tools</h3>
              <p className="text-sm text-muted-foreground">Comprehensive tools for content and user management</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Admin Panel Requirements</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Create a functional admin panel with working frontend components</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implement colors that perfectly match the main website theme</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Design intuitive navigation and user management interfaces</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ensure responsive design and cross-browser compatibility</span>
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
            I developed a comprehensive admin panel that meets all the client&apos;s requirements. Using HTML,
            CSS, JavaScript, and Bootstrap, I created a functional dashboard with proper theming that
            seamlessly integrates with the main Nayansukh website. The panel includes all necessary
            administrative features with an intuitive user interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Functional Frontend</h3>
              <p className="text-sm text-green-700">Working admin panel with interactive JavaScript components</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Theme Integration</h3>
              <p className="text-sm text-green-700">Perfect color matching with the main website design</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Bootstrap Framework</h3>
              <p className="text-sm text-green-700">Responsive design using Bootstrap components and utilities</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">User Management</h3>
              <p className="text-sm text-green-700">Comprehensive admin tools for managing users and content</p>
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
              <h3 className="text-xl font-semibold mb-3">Dashboard Overview</h3>
              <p className="text-muted-foreground mb-4">Central dashboard displaying key metrics and quick actions</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Statistics widgets</li>
                <li>• Recent activities</li>
                <li>• Quick navigation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">User Management</h3>
              <p className="text-muted-foreground mb-4">Complete user administration and role management</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User listings</li>
                <li>• Role assignments</li>
                <li>• Profile management</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Content Management</h3>
              <p className="text-muted-foreground mb-4">Tools for managing website content and data</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Content editing</li>
                <li>• Media management</li>
                <li>• Settings configuration</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Analytics & Reports</h3>
              <p className="text-muted-foreground mb-4">Data visualization and reporting capabilities</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Performance metrics</li>
                <li>• Usage statistics</li>
                <li>• Report generation</li>
              </ul>
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
                src="/projectss/nayansukh/panel1.png"
                alt="Nayansukh Admin Panel - Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <Image
                src="/projectss/nayansukh/panel2.png"
                alt="Nayansukh Admin Panel - Management View"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/projectss/nayansukh/panel3.png"
                alt="Nayansukh Admin Panel - Analytics"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <Image
                src="/projectss/nayansukh/panel4.png"
                alt="Nayansukh Admin Panel - Settings"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
                <h3 className="text-xl font-semibold mb-2">Design Planning</h3>
                <p className="text-muted-foreground">
                  Analyzed the main website theme and extracted color schemes and design patterns
                  to ensure perfect visual consistency in the admin panel.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">HTML Structure</h3>
                <p className="text-muted-foreground">
                  Built semantic HTML structure for the admin interface with proper form elements,
                  navigation, and content organization.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">CSS Styling & Bootstrap</h3>
                <p className="text-muted-foreground">
                  Applied custom CSS with Bootstrap framework to create responsive layouts and
                  maintain the client&apos;s preferred color scheme throughout.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">JavaScript Functionality</h3>
                <p className="text-muted-foreground">
                  Implemented interactive JavaScript features including form validation, dynamic
                  content loading, and admin panel functionality.
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
              <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Functional Admin Panel</h3>
              <p className="text-blue-700">Delivered working admin dashboard with all required features</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Theme Consistency</h3>
              <p className="text-blue-700">Perfect visual integration with the main website design</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Technical Implementation</h3>
              <p className="text-blue-700">Clean, maintainable code using modern web technologies</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Client Satisfaction</h3>
              <p className="text-blue-700">Successfully met all client requirements and expectations</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Nayansukh admin panel project demonstrates my ability to create functional admin interfaces
            that seamlessly integrate with existing website designs. By maintaining perfect color consistency
            and implementing proper frontend functionality, I delivered a comprehensive admin solution that
            meets professional standards while being tailored to the client&apos;s specific needs.
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
            {["HTML", "CSS", "JavaScript", "Bootstrap", "Admin Panel Design", "Theme Integration", "Responsive Design"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="nayansukh-admin" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}