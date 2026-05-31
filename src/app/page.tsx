import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyN7Section from "@/app/components/WhyN7Section";
import DashboardPreview from "@/app/components/DashboardPreview";
import CoreBankingSection from "@/app/components/CoreBankingSection";
import { CTABanner } from "@/app/components/CTASection";
import MobileSection from "@/app/components/MobileSection";
import InsightsSection from "@/app/components/InsightsSection";
import CaseStudies from "@/app/components/CaseStudies";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "N7 — The New Foundation of Modern Banking",
  description:
    "N7 is the complete cloud-native core banking platform that enables financial institutions to launch, scale, and innovate at unprecedented speed.",
  keywords: ["banking", "fintech", "core banking", "N7", "cloud banking", "AI banking"],
};

export default function Home() {
  return (
    <main className="bg-[#050C17] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Desktop-1: Hero */}
      <HeroSection />

      {/* Frame 13: Solutions */}
      <WhyN7Section />

      {/* Frame 12: Cloud Banking Dashboard */}
      <DashboardPreview />

      {/* Frame 80: Core Banking / KYC */}
      <CoreBankingSection />

      {/* Frame 82: CTA — CB7 brand */}
      <CTABanner brand="CB7" />

      {/* Frame 79: White section (ticker + mobile) — N7 CTA embedded inside */}
      <MobileSection />

      {/* Frame 40: Insights */}
      <InsightsSection />

      {/* Frame 41: Case Studies carousel */}
      <CaseStudies />

      {/* Frame 43: CTA — CB7 brand */}
      <CTABanner brand="CB7" />

      {/* Frame 42: Footer */}
      <Footer />
    </main>
  );
}
