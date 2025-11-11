"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { uiUxProjects } from "@/lib/ui-ux-projects"

interface CaseStudy {
  slug: string
  title: string
  description: string
  image: string
}

interface OtherCaseStudiesProps {
  currentSlug: string
}

const caseStudies: CaseStudy[] = uiUxProjects.map(project => ({
  slug: project.liveUrl.split('/').pop() || '',
  title: project.title,
  description: project.description,
  image: project.image
}))

export default function OtherCaseStudies({ currentSlug }: OtherCaseStudiesProps) {
  const otherStudies = caseStudies.filter(study => study.slug !== currentSlug).slice(0, 3)

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'BitcountGridSingle' }}>
        View Other Case Studies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherStudies.map((study) => (
          <Link key={study.slug} href={`/ui-ux/case-studies/${study.slug}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'BitcountGridSingle' }}>
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {study.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    View Case Study
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  )
}