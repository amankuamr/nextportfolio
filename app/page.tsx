import HeroSection from "@/components/hero-section"
import TechMarquee from "@/components/tech-marquee"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
