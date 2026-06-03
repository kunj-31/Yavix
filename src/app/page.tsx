import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import WhyCleaningSection from "@/components/home/WhyCleaningSection";
import CleaningMethodSection from "@/components/home/CleaningMethodSection";
import ServicesSection from "@/components/home/ServicesSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <WhyCleaningSection />
      <CleaningMethodSection />
      <ServicesSection />
      <ReviewsSection />
    </>
  );
}
