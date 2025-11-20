"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ShoppingCart, CreditCard, Truck, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/scroll-buttons"

export default function RebootCaseStudy() {
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
              Reboot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern Ecommerce Platform for Premium Footwear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Type</h3>
              <p className="text-muted-foreground">Ecommerce Platform</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">6 Weeks</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400/10 to-red-500/10 border border-orange-400/20 rounded-2xl p-8">
            <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
              <Image
                src="/projectss/reboot.png"
                alt="Reboot Project Preview"
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
            Reboot is a comprehensive ecommerce platform specializing in premium footwear. This project
            showcases my ability to build full-featured online stores with modern technologies, secure
            authentication, and seamless user experiences. The platform includes everything from product
            browsing to secure checkout, demonstrating real-world ecommerce development skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <ShoppingCart className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-semibold mb-2">Complete Ecommerce</h3>
              <p className="text-sm text-muted-foreground">Full shopping experience from browse to purchase</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Shield className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-semibold mb-2">Secure Authentication</h3>
              <p className="text-sm text-muted-foreground">Firebase-powered user management and security</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CreditCard className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-semibold mb-2">Payment Integration</h3>
              <p className="text-sm text-muted-foreground">Secure checkout with multiple payment options</p>
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
            <h3 className="text-xl font-semibold text-red-800 mb-4">Ecommerce Complexities</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implementing secure user authentication and session management</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Creating a seamless shopping cart and checkout experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Managing complex product data and inventory systems</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ensuring responsive design across all devices and screen sizes</span>
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
            I built Reboot as a full-featured ecommerce platform using modern web technologies.
            The solution combines powerful frontend frameworks with robust backend services to
            deliver a professional shopping experience that rivals commercial platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Full-Stack Architecture</h3>
              <p className="text-sm text-green-700">Next.js frontend with Firebase backend for complete functionality</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Secure Authentication</h3>
              <p className="text-sm text-green-700">Firebase Auth with email/password and social login options</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Advanced Cart System</h3>
              <p className="text-sm text-green-700">Persistent shopping cart with local storage and user accounts</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-green-800">Responsive Design</h3>
              <p className="text-sm text-green-700">Mobile-first design with Bootstrap and custom responsive components</p>
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
              <h3 className="text-xl font-semibold mb-3">User Authentication</h3>
              <p className="text-muted-foreground mb-4">Secure login/signup with Firebase Authentication</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Email/password authentication</li>
                <li>• Password reset functionality</li>
                <li>• Protected routes and user sessions</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Product Catalog</h3>
              <p className="text-muted-foreground mb-4">Comprehensive product browsing with advanced filtering</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Category-based navigation</li>
                <li>• Search and filter options</li>
                <li>• Product details and reviews</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Shopping Cart</h3>
              <p className="text-muted-foreground mb-4">Full-featured cart with persistence and real-time updates</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Add/remove items dynamically</li>
                <li>• Quantity adjustments</li>
                <li>• Cart persistence across sessions</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Checkout Process</h3>
              <p className="text-muted-foreground mb-4">Secure and user-friendly checkout flow</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-step checkout wizard</li>
                <li>• Address and payment forms</li>
                <li>• Order confirmation and tracking</li>
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
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend Architecture</h3>
                <p className="text-muted-foreground">
                  Built the user interface using Next.js with TypeScript, implementing component-based
                  architecture for maintainable and scalable code.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Authentication System</h3>
                <p className="text-muted-foreground">
                  Integrated Firebase Authentication for secure user management, including signup,
                  login, password reset, and protected route handling.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">State Management</h3>
                <p className="text-muted-foreground">
                  Implemented complex state management for shopping cart, user sessions, and product
                  data using React hooks and context API.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Polish</h3>
                <p className="text-muted-foreground">
                  Enhanced the user experience with Framer Motion animations, Bootstrap responsive
                  design, and attention to detail in every interaction.
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
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
                <Image
                  src="/projectss/reboot/reboot1.png"
                  alt="Reboot Homepage"
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
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
                <Image
                  src="/projectss/reboot/reboot02.png"
                  alt="Reboot Product Page"
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
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
                <Image
                  src="/projectss/reboot/reboot03.png"
                  alt="Reboot Cart"
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
              <div className="relative group" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
                <Image
                  src="/projectss/reboot/reboot01.png"
                  alt="Reboot Checkout"
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
              <ShoppingCart className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Full Ecommerce</h3>
              <p className="text-blue-700">Complete online shopping platform with all essential features</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Secure Platform</h3>
              <p className="text-blue-700">Firebase-powered authentication and data security</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Production Ready</h3>
              <p className="text-blue-700">Scalable architecture suitable for real business use</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Truck className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Modern Stack</h3>
              <p className="text-blue-700">Experience with industry-standard development tools</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reboot represents a comprehensive demonstration of my full-stack development capabilities.
            This project showcases my ability to build complex, production-ready applications that
            handle real-world requirements like user authentication, payment processing, and inventory
            management. It serves as a solid foundation for understanding modern ecommerce development.
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
            {["Next.js", "Framer", "Bootstrap", "Firebase", "Authentication", "TypeScript", "Vercel"].map((tool) => (
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
          <div className="bg-gradient-to-r from-orange-400/10 to-red-500/10 border border-orange-400/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
              Experience Reboot Live
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore the complete ecommerce platform to see the shopping experience in action.
            </p>
            <Button asChild size="lg">
              <a href="https://rebooot.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          </div>
        </motion.section>

        <OtherCaseStudies currentSlug="reboot" category="web-dev" />
        <ScrollButtons />
      </div>
    </div>
  )
}