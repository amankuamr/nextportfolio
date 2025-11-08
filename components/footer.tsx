"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Mail, MapPin, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarfieldAnimation from "@/components/starfield-animation"

const footerLinks = {
  services: [
    { name: "Web Development", href: "/web-dev" },
    { name: "UI/UX Design", href: "/ui-ux" },
    { name: "Graphics Design", href: "/graphics" },
    { name: "Consulting", href: "/consulting" }
  ],
  company: [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" }
  ],
  social: [
    { name: "GitHub", href: "https://github.com/amankuamr", icon: Github },
    { name: "Instagram", href: "https://instagram.com/aman.k_sah", icon: Instagram },
    { name: "Portfolio", href: "https://iimagii.vercel.app", icon: Globe },
    { name: "Email", href: "mailto:amankumar1948sahu@gmail.com", icon: Mail }
  ]
}

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}>
      <StarfieldAnimation />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'DelailtaSignature' }}>
                Aman Kumar
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creative developer and designer crafting digital experiences that combine beautiful design with powerful functionality.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'BitcountGridSingle' }}>Let&apos;s Work Together</h4>
              <p className="text-gray-300 mb-6">
                Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can create something amazing together.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">amankumar1948sahu@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span className="text-sm">9572112176</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-red-400" />
                  <span className="text-sm">India, Jharkhand, Ranchi, Tatisilwai</span>
                </div>
              </div>

              <Button asChild className="bg-white text-black hover:bg-gray-200 border-0">
                <a href="mailto:amankumar1948sahu@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © 2024 Aman Kumar. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-6 mt-4 md:mt-0"
              >
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}