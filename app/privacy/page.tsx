"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Mail, Cookie, UserX } from "lucide-react"
import Footer from "@/components/footer"

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    body: "We collect information you provide directly, such as your name and email when you contact us, along with anonymous usage data (pages visited, device type, and referral source) gathered automatically through standard analytics tools to help improve the site.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    body: "This site uses cookies and similar technologies to remember your preferences and understand how the portfolio is used. You can disable cookies in your browser settings at any time, though some features may not function as intended.",
  },
  {
    icon: Lock,
    title: "How We Use Your Data",
    body: "Any personal information you share is used solely to respond to your messages, provide requested information, and improve your experience. We do not sell, rent, or trade your personal data to third parties.",
  },
  {
    icon: UserX,
    title: "Third-Party Services",
    body: "We may use trusted third-party services (such as analytics and font providers) that collect information as described in their own privacy policies. We are not responsible for the practices of external sites linked from this portfolio.",
  },
  {
    icon: Mail,
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of any personal data you have shared with us. To exercise these rights or ask questions, reach out using the contact details below.",
  },
  {
    icon: Shield,
    title: "Data Security",
    body: "We take reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy matters. This policy explains what information we collect, how we use it, and the choices you have.
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
              Questions?
            </h2>
            <p className="text-gray-600 mb-4">
              Reach out and we&apos;ll be happy to help.
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
