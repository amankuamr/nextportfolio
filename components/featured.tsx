"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, FileText, Figma } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Featured() {
    const featuredItems = [
        {
            title: "Hornt",
            description: "A concept design for a touring app designed in Figma using latest techniques",
            technologies: ["Figma", "UI/UX Design", "Concept Design"],
            liveUrl: "/ui-ux/case-studies/hornet",
            githubUrl: "https://www.figma.com/design/EIclgpRliMUyV0UiTDwK3u/Hornet-Touring?node-id=0-1&t=huPLsnAyZkBn9bkH-1",
            githubLabel: "Figma",
            githubIcon: Figma,
            imageSrc: "/casestudybg/Hornet/banner.png",
            alt: "Hornt Project"
        },
        {
            title: "Big Deal",
            description: "Car rental service UI/UX with animations - College final year major project with team collaboration",
            technologies: ["Figma", "Framer", "UI/UX Design"],
            liveUrl: "/ui-ux/case-studies/big-deal",
            githubUrl: "https://bigdeal.framer.ai/",
            imageSrc: "/homecustom/bigdeal.png",
            alt: "Big Deal Project"
        },
        {
            title: "Imagi",
            description: "A game gallery platform where I upload my gameplay screenshots. Built with modern web technologies for seamless user experience.",
            technologies: ["Next.js", "Framer", "Tailwind CSS", "TypeScript"],
            liveUrl: "/web-dev/case-studies/imagi",
            githubUrl: "https://iimagii.vercel.app",
            imageSrc: "/homecustom/imagi.png",
            alt: "Imagi Project"
        },
        {
            title: "Tech Pragati Logo and T-Shirt Designs",
            description: "Lead graphics designer for Tech Pragati branding. Created logo, t-shirt designs, and promotional materials that prepared me for workshops.",
            technologies: ["Adobe Illustrator", "Photoshop", "T-Shirt Design", "Branding", "Promotional Design"],
            liveUrl: "/graphics/design-process/tech-pragati",
            imageSrc: "/homecustom/logo.png",
            alt: "Tech Pragati Logo"
        }
    ]

    const cardRef1 = useRef<HTMLDivElement>(null)
    const cardRef2 = useRef<HTMLDivElement>(null)
    const cardRef3 = useRef<HTMLDivElement>(null)
    const cardRef4 = useRef<HTMLDivElement>(null)

    const { scrollYProgress: progress1 } = useScroll({
        target: cardRef1,
        offset: ["start end", "end start"]
    })
    const { scrollYProgress: progress2 } = useScroll({
        target: cardRef2,
        offset: ["start end", "end start"]
    })
    const { scrollYProgress: progress3 } = useScroll({
        target: cardRef3,
        offset: ["start end", "end start"]
    })
    const { scrollYProgress: progress4 } = useScroll({
        target: cardRef4,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(progress1, [0, 1], [0, -100])
    const y2 = useTransform(progress2, [0, 1], [0, -200])
    const y3 = useTransform(progress3, [0, 1], [0, -300])
    const y4 = useTransform(progress4, [0, 1], [0, -400])

    const refs = [cardRef1, cardRef2, cardRef3, cardRef4]
    const ys = [y1, y2, y3, y4]

    return (
        <div className="hidden lg:block w-full max-w-6xl mx-auto space-y-12 pb-12">
            {featuredItems.map((item, index) => {
                const isReversed = index % 2 === 1; // Alternate layout: odd indices reversed
                return (
                    <motion.div
                        key={index}
                        ref={refs[index]}
                        style={{ y: ys[index] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex w-full gap-8 items-center"
                        >
                            {isReversed ? <>
                                {/* Left side: Product card (small) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex-[1] h-96"
                                >
                                    <Card className="h-full overflow-hidden bg-white border border-gray-200 shadow-none rounded-2xl">
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-xl font-bold text-black font-cal-sans">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="pb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>

                                        <CardFooter className="pt-0 flex gap-2">
                                            <Button asChild size="sm" className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors duration-200 rounded-full">
                                                <Link href={item.liveUrl} className="flex items-center justify-center">
                                                    <FileText className="w-4 h-4 mr-2" />
                                                    <span className="font-medium">{item.githubUrl ? "Case Study" : "Design Process"}</span>
                                                </Link>
                                            </Button>
                                            {item.githubUrl && (
                                                <Button asChild variant="outline" size="sm" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-full">
                                                    <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                                        {React.createElement(item.githubIcon || ExternalLink, { className: "w-4 h-4 mr-2" })}
                                                        <span className="font-medium">{item.githubLabel || "Live"}</span>
                                                    </a>
                                                </Button>
                                            )}
                                        </CardFooter>
                                    </Card>
                                </motion.div>

                                {/* Right side: Rectangle block with image (big) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex-[3]"
                                >
                                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </>
                                : <>
                                    <>
                                        {/* Left side: Rectangle block with image (big) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                            viewport={{ once: true }}
                                            className="flex-[3]"
                                        >
                                            <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                                                <Image
                                                    src={item.imageSrc}
                                                    alt={item.alt}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Right side: Product card (small) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                                            viewport={{ once: true }}
                                            className="flex-[1] h-96"
                                        >
                                            <Card className="h-full overflow-hidden bg-white border border-gray-200 shadow-none rounded-2xl">
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-xl font-bold text-black font-cal-sans">
                                                        {item.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </CardDescription>
                                                </CardHeader>

                                                <CardContent className="pb-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </CardContent>

                                                <CardFooter className="pt-0 flex gap-2">
                                                    <Button asChild size="sm" className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors duration-200 rounded-full">
                                                        <Link href={item.liveUrl} className="flex items-center justify-center">
                                                            <FileText className="w-4 h-4 mr-2" />
                                                            <span className="font-medium">{item.githubUrl ? "Case Study" : "Design Process"}</span>
                                                        </Link>
                                                    </Button>
                                                    {item.githubUrl && (
                                                        <Button asChild variant="outline" size="sm" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-full">
                                                            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                                                {React.createElement(item.githubIcon || ExternalLink, { className: "w-4 h-4 mr-2" })}
                                                                <span className="font-medium">{item.githubLabel || "Live"}</span>
                                                            </a>
                                                        </Button>
                                                    )}
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    </>
                                </>
                            }
                        </motion.div>
                    </motion.div>
                )
            })}
        </div >
    )
}