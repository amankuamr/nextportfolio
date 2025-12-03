"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import OtherCaseStudies from "@/components/other-case-studies"
import ScrollButtons from "@/components/custom/scroll-buttons"

export default function PortfolioWebsiteCaseStudy() {

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

                {/* Hero Section with Logo */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 mb-16 flex justify-center"
                >
                    <div className="relative">
                        <Image
                            src="/casestudybg/Portfolio_Website/Logo.png"
                            alt="Portfolio Website Logo"
                            width={800}
                            height={800
                            }
                            className="w-auto h-auto max-w-xs md:max-w-lg lg:max-w-xl"
                        />
                    </div>
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
                            <p className="text-muted-foreground">Self</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Duration</h3>
                            <p className="text-muted-foreground">1 Month</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Read Time</h3>
                            <p className="text-muted-foreground">5 Min</p>
                        </div>
                    </div>
                </motion.section>

                {/* Project Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
                        Project Overview
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        I have created this portfolio website UI design (single page) as a personal project to check my capability with UI design and Auto Layout. This project represents a comprehensive exploration of modern web design principles, focusing on creating an intuitive and visually appealing single-page layout that effectively showcases creative work and professional skills.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        The design emphasizes clean typography, strategic use of whitespace, and a cohesive color palette that enhances readability and user engagement. By leveraging Figma&apos;s Auto Layout features, I ensured the design is fully responsive and adaptable across different screen sizes, demonstrating proficiency in creating scalable UI components and maintaining design consistency throughout the interface.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This personal project served as both a technical challenge and a creative outlet, allowing me to experiment with advanced design techniques while building a portfolio piece that effectively communicates my design philosophy and technical expertise in UI/UX design.
                    </p>
                </motion.section>

                {/* Bento Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Block 1 - Large (top-left, spans 2x2) */}
                        <div className="md:col-span-2 md:row-span-2 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Portfolio_Website/banner.png"
                                alt="Portfolio Website Banner"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 2 - Small (top-right) */}
                        <div className="bg-blue-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Portfolio_Website/grid1.png"
                                alt="Portfolio Website Design Grid 1"
                                width={200}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 3 - Small (middle-right) */}
                        <div className="bg-green-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Portfolio_Website/home.png"
                                alt="Portfolio Website Home Screen"
                                width={200}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Block 4 - Wide (bottom-left, spans 2) */}
                        <div className="md:col-span-2 bg-purple-50 rounded-lg overflow-hidden">
                            <Image
                                src="/casestudybg/Portfolio_Website/grid2.png"
                                alt="Portfolio Website Design Grid 2"
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
                                    <h4 className="font-semibold text-red-800 mb-2">Single-Page Layout Complexity</h4>
                                    <p className="text-red-700 text-sm">Designing a comprehensive single-page layout that effectively organizes and presents diverse content sections without overwhelming the user.</p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-red-800 mb-2">Responsive Design Challenges</h4>
                                    <p className="text-red-700 text-sm">Ensuring the design adapts seamlessly across different screen sizes while maintaining visual hierarchy and usability.</p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-red-800 mb-2">Visual Consistency</h4>
                                    <p className="text-red-700 text-sm">Maintaining consistent typography, spacing, and color usage throughout the entire single-page design.</p>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-6 text-green-600">Solutions</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Modular Section Design</h4>
                                    <p className="text-green-700 text-sm">Created distinct, well-defined sections with clear visual separation and logical flow to guide user attention.</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Auto Layout Implementation</h4>
                                    <p className="text-green-700 text-sm">Utilized Figma&apos;s Auto Layout features to create flexible, responsive components that adapt to different screen sizes.</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h4 className="font-semibold text-green-800 mb-2">Design System Creation</h4>
                                    <p className="text-green-700 text-sm">Developed a cohesive design system with standardized typography, colors, and spacing rules applied consistently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Opacity Line */}
                    <div className="w-full h-0.5 bg-black/20 mt-16 mb-0"></div>

                    {/* Banner Image Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex justify-center">
                            <Image
                                src="/casestudybg/Portfolio_Website/banner3.png"
                                alt="Portfolio Website Banner"
                                width={800}
                                height={600}
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
                                    The portfolio website design was created using Figma&apos;s advanced design features and Auto Layout capabilities. I started by defining the project goals and target audience, then developed a comprehensive design system that includes typography, color palettes, and reusable components to ensure consistency across all sections.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Key components include responsive navigation, hero sections, project showcases, and contact forms, all built with scalability in mind. The design incorporates modern UI principles with clean aesthetics, intuitive user flows, and accessibility standards to create an engaging experience for potential clients and employers.
                                </p>
                                {/* Colours Image below paragraph */}
                                <Image
                                    src="/casestudybg/Portfolio_Website/Colours.png"
                                    alt="Portfolio Website Colours"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-64 bg-black/20"></div>

                            {/* Right Side - Cards Image */}
                            <div className="flex-1 flex justify-center">
                                <Image
                                    src="/casestudybg/Portfolio_Website/cards.png"
                                    alt="Portfolio Website Cards"
                                    width={500}
                                    height={400}
                                    className=""
                                />
                            </div>
                        </div>
                    </motion.section>
                    {/* Research and Implementation Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Research Column */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold" style={{ fontFamily: 'BitcountGridSingle' }}>
                                    Research
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The research phase involved analyzing current portfolio website trends, user expectations, and competitor designs. I conducted user interviews and surveys to understand what potential clients and employers look for in a designer&apos;s portfolio. This included studying navigation patterns, content hierarchy, and visual storytelling techniques that effectively communicate design skills and project outcomes.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Key insights from the research informed the overall structure, ensuring the portfolio presents work in a logical sequence that guides visitors through the designer&apos;s journey, from concept to execution. The research also helped identify the most effective ways to showcase different types of projects, from UI/UX designs to graphics and web development work.
                                </p>
                            </div>

                            {/* Implementation Column */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold" style={{ fontFamily: 'BitcountGridSingle' }}>
                                    Implementation
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The implementation focused on translating research insights into a cohesive single-page design using Figma&apos;s advanced features. I created a modular component system that ensures consistency across all sections while maintaining visual interest. The Auto Layout system was crucial for creating responsive designs that work seamlessly across different screen sizes and devices.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Special attention was given to performance optimization, accessibility standards, and user experience flows. The final implementation includes smooth animations, intuitive navigation, and a clean aesthetic that reflects the designer&apos;s professional approach. Each section was carefully crafted to tell a story, from the initial concept to the polished final product.
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </motion.section>

                {/* Footer Image Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}

                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex justify-center">
                        <Image
                            src="/casestudybg/Portfolio_Website/footer1.png"
                            alt="Portfolio Website Footer"
                            width={700}
                            height={300}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                </motion.section>

                {/* Final Verdict Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'BitcountGridSingle' }}>
                        Final Verdict
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This portfolio website design project stands as a testament to the power of thoughtful UI/UX design in creating impactful digital experiences. By seamlessly integrating modern design principles with practical functionality, the project successfully transforms complex design challenges into an intuitive, visually compelling single-page layout. The strategic use of Auto Layout, consistent design systems, and responsive components ensures that the portfolio not only showcases technical proficiency but also creates an engaging narrative that effectively communicates the designer&apos;s capabilities to potential clients and employers. Ultimately, this project demonstrates how strategic design decisions can elevate a simple portfolio into a powerful professional tool that bridges creativity with user-centered functionality.
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
                        {["Figma", "UI/UX Design", "Auto Layout", "Design Systems"].map((tool) => (
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
                        <p className="text-gray-700 mb-4">Explore the complete Figma design file for this portfolio website project.</p>
                        <a
                            href="https://www.figma.com/proto/WPSHFJ14ceMTxQNyaXKwV0/Untitled?node-id=14-2&t=hsstiRsvgarzNOls-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                            </svg>
                            Live Preview
                        </a>
                    </div>
                </motion.section>

                <OtherCaseStudies currentSlug="portfolio-website" />
                <ScrollButtons />
            </div>
        </div>
    )
}

