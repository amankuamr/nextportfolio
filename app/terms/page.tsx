"use client"

import { motion } from "framer-motion"
import { FileText, Copyright, AlertTriangle, Heart, Ban, Mail } from "lucide-react"
import Footer from "@/components/footer"

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    body: "By accessing or using this portfolio website, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, please refrain from using the site.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    body: "All content on this site—including designs, case studies, graphics, code, text, and branding—is the intellectual property of Aman Kumar unless otherwise credited. You may not reproduce or redistribute it without prior written permission.",
  },
  {
    icon: Heart,
    title: "Permitted Use",
    body: "You are welcome to view, share, and link to this portfolio for personal, educational, or inspirational purposes. We appreciate attribution when our work is referenced.",
  },
  {
    icon: Ban,
    title: "Prohibited Use",
    body: "You may not use this site for any unlawful purpose, attempt to disrupt its functionality, scrape or copy content at scale, or impersonate the owner. Misuse may result in blocked access.",
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer",
    body: "This site is provided \"as is\" without warranties of any kind. While we strive for accuracy, we are not liable for any errors in content or for damages arising from the use of this website.",
  },
  {
    icon: Mail,
    title: "Changes & Contact",
    body: "We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms. For questions about these terms, please contact us.",
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1
              className="text-4xl sm:text-6xl font-bold mb-6 text-black"
              style={{ fontFamily: 'BitcountGridSingle' }}
            >
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These terms outline the rules for using this portfolio. Please read them carefully.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: July 2025</p>
          </motion.section>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-black">{section.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{section.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-3 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Have a question about these terms? We&apos;re here to help.
            </p>
            <a
              href="mailto:amankumar1948sahu@gmail.com"
              className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              amankumar1948sahu@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
