import FaqTemplate from "@/components/faq";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.FAQ.title,
  description: PAGE_METADATA.FAQ.description,
  keywords: PAGE_METADATA.FAQ.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/faq`,
});

export default function FaqPage() {
  return <FaqTemplate />;
}
