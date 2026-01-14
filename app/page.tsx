import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-360">
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
