import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutMeSection from "@/components/AboutMeSection";
import FAQSection from "@/components/FAQSection";
import BackgroundSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import OfficeSection from "@/components/OfficeSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <PainPointsSection />
      <AboutMeSection />
      <OfficeSection />
      <FAQSection />
      <BackgroundSection />
      <CTASection />
      <Footer />
    </main>
  );
}
