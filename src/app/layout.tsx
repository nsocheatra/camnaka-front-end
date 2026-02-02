import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "CAM NAKA CO., LTD. - Import & Export Mother and Baby Products",
  description:
    "Your trusted partner in importing and exporting high-quality mother and baby products in Cambodia.",
  keywords: [
    "CAM NAKA",
    "import export",
    "mother and baby products",
    "Cambodia",
    "baby care",
    "mother care",
    "wholesale",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CAM NAKA CO., LTD.",
    title: "CAM NAKA CO., LTD. - Import & Export Mother and Baby Products",
    description:
      "Your trusted partner in importing and exporting high-quality mother and baby products in Cambodia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAM NAKA CO., LTD. - Import & Export Mother and Baby Products",
    description:
      "Your trusted partner in importing and exporting high-quality mother and baby products in Cambodia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
