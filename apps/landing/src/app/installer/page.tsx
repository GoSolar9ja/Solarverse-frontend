import InstallersTemplate from "@/components/installer";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.INSTALLER.title,
  description: PAGE_METADATA.INSTALLER.description,
  keywords: PAGE_METADATA.INSTALLER.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/installer`,
});

export default function InstallerPage() {
  return <InstallersTemplate />;
}
