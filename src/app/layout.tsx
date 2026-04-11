import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geniusfixer.ae"),
  title: {
    default: "Genius Fixer Technical Services LLC | Dubai's #1 Home Services",
    template: "%s | Genius Fixer Technical Services",
  },
  description:
    "Professional HVAC, Electrical, Plumbing, Painting & General Maintenance services in Dubai, UAE. Licensed technicians, 24/7 emergency support. Call +971 52 972 4924.",
  keywords: [
    "technical services Dubai",
    "HVAC maintenance Dubai",
    "electrical services Dubai",
    "plumbing Dubai",
    "painting services Dubai",
    "handyman Dubai",
    "home maintenance Dubai UAE",
    "Genius Fixer",
    "annual maintenance contract Dubai",
    "AC repair Dubai",
    "gypsum partition Dubai",
    "glass aluminum work Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://geniusfixer.ae",
    siteName: "Genius Fixer Technical Services LLC",
    title: "Genius Fixer Technical Services — Dubai's Trusted Home Services",
    description:
      "One Stop Solution for all technical services in Dubai, UAE. HVAC, Electrical, Plumbing, Painting & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Fixer Technical Services LLC | Dubai",
    description: "Professional home & commercial technical services across Dubai, UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://geniusfixer.ae",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#CC2420" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
