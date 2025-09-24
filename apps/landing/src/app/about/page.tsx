import AboutTemplate from "@/components/about";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.ABOUT.title,
  description: PAGE_METADATA.ABOUT.description,
  keywords: PAGE_METADATA.ABOUT.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/about`,
});

export default function AboutPage() {
  return <AboutTemplate />;
}
