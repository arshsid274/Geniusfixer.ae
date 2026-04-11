import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import TrustMarquee from "@/components/sections/TrustMarquee";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Genius Fixer Technical Services | Dubai's #1 Home Services Provider",
  description:
    "Your trusted one-stop technical services partner in Dubai, UAE. Expert HVAC, Electrical, Plumbing, Painting & more. Licensed professionals, 24/7 emergency support. Call +971 52 972 4924.",
  alternates: { canonical: "https://geniusfixer.ae" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustMarquee />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
