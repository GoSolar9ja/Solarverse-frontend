import SingleBlogTemplate from "@/components/blog/single-blog";
import React from "react";
import { blogPosts } from "@/lib/blog-data";
import { generateMetadata as generatePageMetadata } from "@/lib/seo/metadata";
import { SEO_CONSTANTS } from "@/lib/seo/constants";
import type { Metadata } from "next";

// Generate metadata for the blog post
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    } as Metadata;
  }

  return generatePageMetadata({
    title: `${blogPost.title} | Solarverse Blog`,
    description: blogPost.excerpt,
    canonicalUrl: `${SEO_CONSTANTS.COMPANY_URL}/blog/${id}`,
  });
}

export default function SingleBlogPage({ params }: { params: { id: string } }) {
  return <SingleBlogTemplate id={params.id} />;
}
