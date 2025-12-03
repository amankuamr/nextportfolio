"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function HornetCaseStudy() {

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Floating Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="fixed left-4 bottom-6 md:left-60 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 z-50"
            >
                <Link href="/ui-ux">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center p-3 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 md:w-4 md:h-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                        <span className="hidden md:inline-block ml-2 text-sm font-medium">Back</span>
                    </motion.div>
                </Link>
            </motion.div>

            <div className="max-w-4xl mx-auto">

                {/* Hero Section with Image */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 mb-16"
                >
                    <div
                        className="relative w-full h-[400px] md:h-[500px] bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/casestudybg/Hornet/hornetabs.png)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </motion.section>

                {/* Project Details */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Project Type</h3>
                            <p className="text-muted-foreground">Concept Design</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Duration</h3>
                            <p className="text-muted-foreground">3 Months</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Read Time</h3>
                            <p className="text-muted-foreground">6 Min</p>
                        </div>
                    </div>
                </motion.section>

                {/* Brief Overview */}
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
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Hornt is a comprehensive concept design for a touring mobile application, created entirely in Figma using the latest design techniques. This project showcases both low-fidelity wireframes and high-fidelity prototypes, demonstrating the complete design process from initial concepts to polished user interfaces. The app focuses on providing travel enthusiasts with an intuitive platform for planning, booking, and experiencing tours with seamless navigation and engaging visual design.
                    </p>
                </motion.section>

                {/* Bento Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
                        {/* Block 1 - Large (top-left, spans 2x2) */}
                        <div className="md:col-span-2 md:row-span-2 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Hornet/grid1.png"
                                alt="Low Fidelity Wireframes"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 2 - Small (top-right) */}
                        <div className="bg-blue-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Hornet/grid2.png"
                                alt="Figma Design Tool"
                                width={200}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 3 - Small (middle-right) */}
                        <div className="bg-green-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Hornet/grid3.png"
                                alt="High Fidelity Prototypes"
                                width={200}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 4 - Wide (bottom-left, spans 2) */}
                        <div className="md:col-span-2 bg-purple-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Hornet/banner.png"
                                alt="Hornt Concept Design Banner"
                                width={400}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Problems and Solutions */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'BitcountGridSingle' }}>
                        Problems and Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Problems Column */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-6 text-red-600">Problems</h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-red-800 mb-2">Design System Creation</h4>
                                    <p className="text-red-700 text-sm">Building a cohesive design system with consistent components, spacing, and typography across multiple screens.</p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-red-800 mb-2">User Flow Complexity</h4>
                                    <p className="text-red-700 text-sm">Designing intuitive navigation for complex touring workflows while maintaining visual clarity.</p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-red-800 mb-2">Fidelity Balance</h4>
                                    <p className="text-red-700 text-sm">Transitioning from low-fidelity wireframes to high-fidelity prototypes without losing the design vision.</p>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-6 text-green-600">Solutions</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Component Library</h4>
                                    <p className="text-green-700 text-sm">Created reusable Figma components ensuring consistency across all screens and interactions.</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Iterative Design Process</h4>
                                    <p className="text-green-700 text-sm">Progressive enhancement from wireframes to prototypes with regular design reviews and refinements.</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Design Handoff Preparation</h4>
                                    <p className="text-green-700 text-sm">Organized design files with proper naming, documentation, and developer-friendly specifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Opacity Line */}
                <div className="w-full h-0.5 bg-black/20 mb-0"></div>

                {/* Phone Image Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex justify-center">
                        <Image
                            src="/casestudybg/Hornet/phonehalf.png"
                            alt="Hornt App Design"
                            width={3000}
                            height={3750}
                            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto"
                        />
                    </div>
                </motion.section>

                {/* Design Process Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                        {/* Left Side - Design Process Text */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold" style={{ fontFamily: 'BitcountGridSingle' }}>
                                Design Process & Components
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Hornt app concept was created using Figma&apos;s latest design features and components. I started by researching touring app user needs and market trends, then built a comprehensive design system with reusable components including navigation bars, cards, buttons, and interactive elements. The design incorporates modern UI principles with fluid animations, intuitive user flows, and a clean aesthetic that prioritizes usability for travel enthusiasts.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Key components include custom icon sets, responsive layouts, interactive prototypes, and a consistent color palette that reflects the adventurous spirit of touring. Each screen was carefully crafted to provide seamless user experiences while maintaining visual hierarchy and accessibility standards.
                            </p>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block w-px h-64 bg-black/20"></div>

                        {/* Right Side - Sets Image */}
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/casestudybg/Hornet/sets.png"
                                alt="Hornt Design Components"
                                width={500}
                                height={400}
                                className=""
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Parallel Lines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center space-y-2 py-8 px-4"
                >
                    <div className="w-full max-w-md h-px bg-black/20"></div>
                    <div className="w-full max-w-md h-px bg-black/20"></div>
                </motion.div>

                {/* Images Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        <div className="w-full max-w-xs">
                            <Image
                                src="/casestudybg/Hornet/Home.png"
                                alt="Hornt Home Screen"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="w-full max-w-xs">
                            <Image
                                src="/casestudybg/Hornet/tripview.png"
                                alt="Hornt Trip View"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="w-full max-w-xs sm:col-span-2 lg:col-span-1">
                            <Image
                                src="/casestudybg/Hornet/Tourinfo.png"
                                alt="Hornt Tour Info"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Challenges and Inspiration */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
                        Challenges & Inspiration
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Creating the Hornt concept design presented several unique challenges in Figma. Balancing low-fidelity wireframes with high-fidelity prototypes required careful consideration of when to introduce visual details without overwhelming the user experience. One major challenge was designing complex navigation flows for tour planning while maintaining intuitive simplicity. Inspiration came from studying successful travel apps and understanding how users interact with location-based services, weather data, and booking systems. The goal was to create a design that feels both adventurous and trustworthy, using color psychology and typography to evoke the excitement of exploration while ensuring accessibility and usability for all users.
                    </p>

                    <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
                        Final Reviews & Outcomes
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The Hornt concept design received positive feedback for its innovative approach to touring app interfaces. The combination of low-fidelity sketches showing the design thinking process and high-fidelity screens demonstrating the final user experience helped showcase the complete design methodology. Reviewers appreciated the attention to detail in micro-interactions, the thoughtful information architecture, and the cohesive visual language throughout the app. This Figma-based concept design serves as a comprehensive portfolio piece demonstrating proficiency in modern UI/UX design principles, user research, prototyping, and design system creation for mobile applications.
                    </p>
                </motion.section>

                {/* Tools & Technologies */}
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
                    <div className="flex flex-wrap gap-4 mb-6">
                        {["Figma", "UI/UX Design", "Concept Design", "Wireframing", "Prototyping"].map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">View Design File</h3>
                        <p className="text-gray-700 mb-4">Explore the complete Figma design file for this Hornt touring app concept.</p>
                        <a
                            href="https://www.figma.com/design/EIclgpRliMUyV0UiTDwK3u/Hornet-Touring?node-id=0-1&t=huPLsnAyZkBn9bkH-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                            </svg>
                            View on Figma
                        </a>
                    </div>
                </motion.section>

                <OtherCaseStudies currentSlug="hornet" />
                <ScrollButtons />
            </div>
        </div>
    )
}
