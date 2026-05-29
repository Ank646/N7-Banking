import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import TrustSection from "@/app/components/TrustSection";
import WhyN7Section from "@/app/components/WhyN7Section";
import DashboardPreview from "@/app/components/DashboardPreview";
import CoreBankingSection from "@/app/components/CoreBankingSection";
import CTASection from "@/app/components/CTASection";
import Frame38Separator from "@/app/components/Frame38Separator";
import MobileSection from "@/app/components/MobileSection";
import InsightsSection from "@/app/components/InsightsSection";
import CaseStudies from "@/app/components/CaseStudies";
import { NewsletterStrip } from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "N7 — The New Foundation of Modern Banking",
  description: "N7 is the complete cloud-native core banking platform that enables financial institutions to launch, scale, and innovate at unprecedented speed.",
  keywords: ["banking", "fintech", "core banking", "N7", "cloud banking", "AI banking"],
};

export default function Home() {
  return (
    <main className="bg-[#050C17] min-h-screen">
      {/* ── Dark page 1 ───────────────────────────────────────── */}
      <Navbar />
      <HeroSection />
      <TrustSection />
      <WhyN7Section />
      <DashboardPreview />
      <CoreBankingSection />
      <CTASection />

      {/* ── Frame 38 separator (ticker) ───────────────────────── */}
      <Frame38Separator />

      {/* ── White page: Digital banking + Frame 85 phones ──────── */}
      <MobileSection />

      {/* ── Dark page 2 ───────────────────────────────────────── */}
      <InsightsSection />
      <CaseStudies />
      <NewsletterStrip />
      <Footer />
    </main>
  );
}
