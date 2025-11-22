import HeroSection from "@/components/hero-section"
import MobileHeroSection from "@/components/mobile-hero-section"
import TechMarquee from "@/components/tech-marquee"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import AchievementsSection from "@/components/achievements-section"
import ExperienceSection from "@/components/testimonials-section"
import HobbiesSection from "@/components/hobbies-section"
import ScrollButtons from "@/components/custom/scroll-buttons"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div id="hero" className="hidden lg:block">
        <HeroSection />
      </div>
      <div className="lg:hidden">
        <MobileHeroSection />
      </div>

      {/* Tech Marquee */}
      <div id="tech-marquee">
        <TechMarquee />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Featured Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Achievements Section */}
      <div id="achievements">
        <AchievementsSection />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <ExperienceSection />
      </div>

      {/* Hobbies Section */}
      <div id="hobbies">
        <HobbiesSection />
      </div>

      {/* Footer */}
      <Footer />
      <ScrollButtons />
    </div>
  )
}
