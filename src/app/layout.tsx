import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N7 — The New Foundation of Modern Banking",
  description:
    "N7 is the complete cloud core banking platform that transforms financial institutions with AI-powered infrastructure.",
  keywords: ["banking", "fintech", "core banking", "N7", "AI banking"],
  openGraph: {
    title: "N7 — Modern Banking Infrastructure",
    description:
      "Transform your banking with N7's AI-powered cloud core banking platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased min-h-screen bg-n7-dark text-white">
        {children}
      </body>
    </html>
  );
}
