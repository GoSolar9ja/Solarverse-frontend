import HomeTemplate from "@/components/home";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import StructuredData from "@/components/common/seo/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.HOME.title,
  description: PAGE_METADATA.HOME.description,
  keywords: PAGE_METADATA.HOME.keywords,
  canonicalUrl: SEO_CONSTANTS.COMPANY_URL,
});

export default function Home() {
  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData type="Service" />
      <HomeTemplate />
    </>
  );
}
