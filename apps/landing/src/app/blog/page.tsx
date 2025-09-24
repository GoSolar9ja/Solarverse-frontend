import BlogTemplate from "@/components/blog/blog";
import React from "react";
import { generateMetadata } from "@/lib/seo/metadata";
import { PAGE_METADATA, SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PAGE_METADATA.BLOG.title,
  description: PAGE_METADATA.BLOG.description,
  keywords: PAGE_METADATA.BLOG.keywords,
  canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/blog`,
});

export default function BlogPage() {
  return <BlogTemplate />;
}
