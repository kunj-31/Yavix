import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import WhyCleaningSection from "@/components/home/WhyCleaningSection";
import WhyChooseYavixSection from "@/components/home/WhyChooseYavixSection";
import ServicesSection from "@/components/home/ServicesSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <WhyCleaningSection />
      <ServicesSection />
      <WhyChooseYavixSection />
      <ReviewsSection />
    </>
  );
}
