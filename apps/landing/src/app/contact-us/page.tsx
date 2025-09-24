import ContactUsTemplate from "@/components/contact";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.CONTACT.title,
  description: PAGE_METADATA.CONTACT.description,
  keywords: PAGE_METADATA.CONTACT.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/contact-us`,
});

export default function ContactUsPage() {
  return <ContactUsTemplate />;
}
