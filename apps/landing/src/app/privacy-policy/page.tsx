import PrivacyPolicyTemplate from "@/components/privacy-policy";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.PRIVACY_POLICY.title,
  description: PAGE_METADATA.PRIVACY_POLICY.description,
  keywords: PAGE_METADATA.PRIVACY_POLICY.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/privacy-policy`,
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyTemplate />;
}
