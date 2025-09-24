import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/common/navigation/top-navbar";
import FooterSection from "@/components/common/sections/footer-section";
import StructuredData from "@/components/common/seo/structured-data";
import { generateMetadata } from "@/lib/seo/metadata";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
  title: SEO_CONSTANTS.DEFAULT_TITLE,
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS,
  canonicalUrl: SEO_CONSTANTS.COMPANY_URL,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <link rel="icon" href="/images/gosolar-logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/gosolar-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/gosolar-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/gosolar-logo.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex flex-col">
          <TopNavBar />
          {children}
          <FooterSection />
        </div>
        {/* SEO Inspector - only in development */}
        {/* {process.env.NODE_ENV === 'development' && (
          <div data-seo-inspector>
            <SEOInspector />
          </div>
        )} */}
      </body>
    </html>
  );
}
