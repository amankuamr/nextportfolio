"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import TechMarquee from "@/components/tech-marquee"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
