import HeroSection from "@/components/hero-section"
import MobileHeroSection from "@/components/mobile-hero-section"
import TechMarquee from "@/components/tech-marquee"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import AchievementsSection from "@/components/achievements-section"
import ExperienceSection from "@/components/testimonials-section"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <div className="lg:hidden">
        <MobileHeroSection />
      </div>

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* About Section */}
      <AboutSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
