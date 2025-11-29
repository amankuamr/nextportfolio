"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "@/components/footer"

const images = Array.from({ length: 16 }, (_, i) => `/Photography/image${i + 1}.jpeg`)

// Define spans based on image aspect ratios
const imageSpans = [
    { col: 1, row: 2 }, // image1: 2048x2808 vertical
    { col: 1, row: 2 }, // image2: 2048x2808 vertical
    { col: 1, row: 2 }, // image3: 2048x2808 vertical
    { col: 1, row: 2 }, // image4: 1792x2400 vertical
    { col: 1, row: 2 }, // image5: 2304x4096 vertical
    { col: 1, row: 2 }, // image6: 4330x5773 vertical
    { col: 1, row: 2 }, // image7: 2880x5120 vertical
    { col: 1, row: 2 }, // image8: 4330x5773 vertical
    { col: 2, row: 1 }, // image9: 3000x1996 horizontal
    { col: 1, row: 2 }, // image10: 4330x5773 vertical
    { col: 1, row: 2 }, // image11: 4330x5773 vertical
    { col: 2, row: 1 }, // image12: 5773x4330 horizontal
    { col: 1, row: 2 }, // image13: 4330x5773 vertical
    { col: 1, row: 2 }, // image14: 3072x4319 vertical
    { col: 1, row: 2 }, // image15: 2720x3473 vertical
    { col: 1, row: 2 }, // image16: 2162x3840 vertical
]

export default function PhotographyPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-4xl sm:text-6xl font-bold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>
                                    Photography
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                    A collection of my photographic work capturing moments and stories
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Bento Grid */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
                                {images.map((src, index) => {
                                    const span = imageSpans[index]
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className={`relative overflow-hidden rounded-lg group cursor-pointer ${span.col === 2
                                                ? 'col-span-1 sm:col-span-2 row-span-1'
                                                : 'col-span-1 row-span-2'
                                                }`}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Photography ${index + 1}`}
                                                fill
                                                loading="lazy"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-pink-400/10 to-orange-500/10 border border-pink-400/20 rounded-2xl p-8"
                            >
                                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'BitcountGridSingle' }}>
                                    Interested in My Work?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Let&apos;s discuss how my photography skills can capture your vision
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="mailto:aman@example.com" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                                        Get In Touch
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
