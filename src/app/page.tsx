import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import TrustSection from "@/app/components/TrustSection";
import StatsSection from "@/app/components/StatsSection";
import DashboardPreview from "@/app/components/DashboardPreview";
import FeaturesSection from "@/app/components/FeaturesSection";
import CTASection from "@/app/components/CTASection";
import MobileSection from "@/app/components/MobileSection";
import CaseStudies from "@/app/components/CaseStudies";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "N7 — The New Foundation of Modern Banking",
  description: "N7 is the complete cloud-native core banking platform that enables financial institutions to launch, scale, and innovate at unprecedented speed.",
  keywords: ["banking", "fintech", "core banking", "N7", "cloud banking", "AI banking"],
};

export default function Home() {
  return (
    <main className="bg-[#050C17] min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <DashboardPreview />
      <FeaturesSection />
      <CTASection />
      <MobileSection />
      <CaseStudies />
      <Footer />
    </main>
  );
}
