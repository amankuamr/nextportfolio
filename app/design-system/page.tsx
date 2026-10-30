"use client"

import { ArrowLeft, Palette, Type, Square, MousePointerClick, Box, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const sections = [
  {
    title: "Typography",
    icon: Type,
    description: "Font families, sizes, weights, and line heights used throughout the portfolio.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Font Families</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Geist Sans (Primary)</p>
                <p className="text-2xl font-light" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Geist Mono (Code)</p>
                <p className="text-2xl font-light" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                  const hello = &quot;world&quot;
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Metal Mania (Display)</p>
                <p className="text-2xl font-light" style={{ fontFamily: 'var(--font-metal-mania)' }}>
                  Creative Developer
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Chillax (Headings)</p>
                <p className="text-2xl font-semibold" style={{ fontFamily: 'font-chillax-semibold' }}>
                  Beautiful Typography
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Type Scale</h3>
            <div className="space-y-3">
              {[
                { label: "Display", class: "text-5xl font-bold", text: "Aman Kumar" },
                { label: "Heading 1", class: "text-4xl font-bold", text: "Creative Developer" },
                { label: "Heading 2", class: "text-3xl font-semibold", text: "UI/UX Designer" },
                { label: "Heading 3", class: "text-2xl font-semibold", text: "Web Developer" },
                { label: "Body Large", class: "text-lg", text: "Building digital experiences with modern web technologies." },
                { label: "Body", class: "text-base", text: "Standard body text for paragraphs and descriptions." },
                { label: "Small", class: "text-sm", text: "Secondary text and captions." },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className={`${item.class} text-black`}>{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "Color Palette",
    icon: Palette,
    description: "Primary, secondary, and accent colors used across the portfolio.",
    content: (
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Primary Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Black", value: "#000000", text: "white" },
              { name: "White", value: "#FFFFFF", text: "black", border: true },
              { name: "Gray 50", value: "#F9FAFB", text: "black" },
              { name: "Gray 100", value: "#F3F4F6", text: "black" },
              { name: "Gray 200", value: "#E5E7EB", text: "black" },
              { name: "Gray 300", value: "#D1D5DB", text: "black" },
              { name: "Gray 400", value: "#9CA3AF", text: "black" },
              { name: "Gray 500", value: "#6B7280", text: "white" },
              { name: "Gray 600", value: "#4B5563", text: "white" },
              { name: "Gray 700", value: "#374151", text: "white" },
              { name: "Gray 800", value: "#1F2937", text: "white" },
              { name: "Gray 900", value: "#111827", text: "white" },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className={`h-20 rounded-lg ${color.border ? "border border-gray-200" : ""}`}
                  style={{ backgroundColor: color.value }}
                />
                <div>
                  <p className="text-sm font-medium text-black">{color.name}</p>
                  <p className="text-xs text-gray-500 font-mono">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Accent Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Blue 600", value: "#2563EB" },
              { name: "Blue 700", value: "#1D4ED8" },
              { name: "Blue 800", value: "#1E40AF" },
              { name: "Red 500", value: "#EF4444" },
              { name: "Green 500", value: "#22C55E" },
              { name: "Yellow 400", value: "#FACC15" },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
                <div>
                  <p className="text-sm font-medium text-black">{color.name}</p>
                  <p className="text-xs text-gray-500 font-mono">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    ),
  },
  {
    title: "Buttons",
    icon: MousePointerClick,
    description: "Interactive button components with various styles, sizes, and states.",
    content: (
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Button Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Button States</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button>
              Next
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </div>
        </Card>
      </div>
    ),
  },
  {
    title: "Cards",
    icon: Square,
    description: "Container components for grouping related content and actions.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
            <p className="text-gray-600">A simple card component with padding and border.</p>
          </Card>
          <Card className="p-6 border-2 border-black">
            <h3 className="text-lg font-semibold mb-2">Bordered Card</h3>
            <p className="text-gray-600">Card with a thicker border for emphasis.</p>
          </Card>
          <Card className="p-6 bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Muted Card</h3>
            <p className="text-gray-600">Card with a subtle background color.</p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "Badges",
    icon: Layers,
    description: "Small status indicators and labels for categorization.",
    content: (
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Badge Variants</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md border border-gray-200">Default</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200">Primary</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-md border border-green-200">Success</span>
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm font-medium rounded-md border border-yellow-200">Warning</span>
            <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-md border border-red-200">Danger</span>
          </div>
        </Card>
      </div>
    ),
  },
  {
    title: "Animations",
    icon: Zap,
    description: "Motion and transition effects used throughout the portfolio.",
    content: (
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Hover Effects</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="group">
              Hover Me
              <ArrowLeft className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="group">
              Scale Effect
              <ArrowLeft className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
            </Button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Transition Speeds</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" className="transition-colors duration-150">Fast (150ms)</Button>
            <Button variant="ghost" className="transition-colors duration-300">Normal (300ms)</Button>
            <Button variant="ghost" className="transition-colors duration-500">Slow (500ms)</Button>
          </div>
        </Card>
      </div>
    ),
  },
]

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <Palette className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Design System</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6" style={{ fontFamily: 'font1' }}>
            Design System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive showcase of the design principles, components, and patterns used throughout this portfolio.
            Built with modern web technologies and best practices.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title} className="scroll-mt-24" id={section.title.toLowerCase().replace(/\s+/g, "-")}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-black rounded-lg">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black">{section.title}</h2>
                  <p className="text-gray-600 mt-1">{section.description}</p>
                </div>
              </div>
              {section.content}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-10 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            This design system is a living document. Components and patterns may evolve over time.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
