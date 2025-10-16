import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/common/navigation/top-navbar";
import FooterSection from "@/components/common/sections/footer-section";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SEO_CONSTANTS.DEFAULT_TITLE,
    template: `%s | ${SEO_CONSTANTS.COMPANY_NAME}`,
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS,

  // Canonical URL
  alternates: {
    canonical: SEO_CONSTANTS.COMPANY_URL,
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    url: SEO_CONSTANTS.COMPANY_URL,
    siteName: SEO_CONSTANTS.COMPANY_NAME,
    images: [
      {
        url: SEO_CONSTANTS.DEFAULT_OG_IMAGE, // full URL (https://example.com/og.png)
        width: 1200,
        height: 630,
        alt: SEO_CONSTANTS.COMPANY_NAME,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: SEO_CONSTANTS.DEFAULT_TITLE,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    images: [SEO_CONSTANTS.TWITTER_OG_IMAGE],
    creator: "@your_twitter_handle",
  },

  // Icons (favicon, apple touch, etc.)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Robots (SEO + indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
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
