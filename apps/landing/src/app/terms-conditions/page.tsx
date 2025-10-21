import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";
import TermsConditionsTemplate from "@/components/terms-conditions";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.TERMS_CONDITIONS.title,
  description: PAGE_METADATA.TERMS_CONDITIONS.description,
  keywords: PAGE_METADATA.TERMS_CONDITIONS.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/terms-conditions`,
});

export default function TermsConditionsPage() {
  return <TermsConditionsTemplate />;
}
