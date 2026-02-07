import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutMeSection from "@/components/AboutMeSection";
import FAQSection from "@/components/FAQSection";
import BackgroundSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";
import OfficeSection from "@/components/OfficeSection";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <PainPointsSection />
      <AboutMeSection />
      <OfficeSection />
      <FAQSection />
      <BackgroundSection />
      <CTASection />
    </main>
  );
}
