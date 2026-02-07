import ContactHero from "@/components/contact/ContactHero";
import BookingSection from "@/components/contact/BookingSection";
import ContactMap from "@/components/contact/ContactMap";
import SocialGallery from "@/components/contact/SocialGallery";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <ContactHero />
      <BookingSection />
      <ContactMap />
      <SocialGallery />
    </main>
  );
}
