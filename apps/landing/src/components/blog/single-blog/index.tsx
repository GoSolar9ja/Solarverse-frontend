"use client";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { BlogPost, blogPosts } from "@/lib/blog-data";

export default function SingleBlogTemplate({ id }: { id: string }) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  // Find the blog post by ID
  const blogPost: BlogPost | undefined = blogPosts.find(
    (post) => post.id === id
  );

  // If blog post not found, show a message
  if (!blogPost) {
    return (
      <section className="md:!pb-20 pb-10">
        <DefaultLayout>
          <button
            className="bg-[#1112141A] p-2 mt-5 rounded-full"
            onClick={handleBack}
          >
            <ArrowLeft />
          </button>
          <div className="mt-5 max-w-[1048px] mx-auto">
            <Typography.h2>Blog Post Not Found</Typography.h2>
            <Typography.body1>
              The blog post you&#39;re looking for doesn&#39;t exist or has been
              removed.
            </Typography.body1>
          </div>
        </DefaultLayout>
      </section>
    );
  }

  // Split content into paragraphs
  const paragraphs = blogPost.content.split("\n\n");

  return (
    <section className="md:!pb-20 pb-10">
      <DefaultLayout>
        <button
          className="bg-[#1112141A] p-2 mt-5 rounded-full"
          onClick={handleBack}
        >
          <ArrowLeft />
        </button>

        <div className="mt-5 max-w-[1048px] mx-auto">
          <Typography.h4 weight={"medium"} variant={"primary"}>
            {blogPost.title}
          </Typography.h4>

          <Image
            containerClassName="md:h-[500px] aspect-video w-full  mt-5 rounded-2xl"
            src={blogPost.img}
            alt="Blog Image"
          />

          <div className="flex mt-5 gap-8">
            <Typography.body1>
              {blogPost.date}
              <Typography.body2 inline className="ml-2">
                {blogPost.time}{" "}
              </Typography.body2>
            </Typography.body1>
            <Typography.body1 weight={"medium"}>
              {blogPost.author}
            </Typography.body1>
          </div>

          <Typography.body1
            className="my-5"
            weight={"medium"}
            variant={"fadedDark"}
          >
            {blogPost.excerpt}
          </Typography.body1>

          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => {
              // Check if this is a heading (contains ":")
              if (
                paragraph.includes(":") &&
                !paragraph.includes(" ") &&
                paragraph.split(":").length === 2
              ) {
                return (
                  <Typography.h5 key={index} weight="semibold">
                    {paragraph}
                  </Typography.h5>
                );
              }

              // Check if this is a list item (starts with specific words)
              if (
                paragraph.startsWith("Myth:") ||
                paragraph.startsWith("Truth:") ||
                paragraph.startsWith("Verified") ||
                paragraph.startsWith("Ratings") ||
                paragraph.startsWith("Transparent") ||
                paragraph.startsWith("Secure") ||
                paragraph.startsWith("The Solarverse") ||
                paragraph.startsWith("Upfront") ||
                paragraph.startsWith("Free") ||
                paragraph.startsWith("Financing") ||
                paragraph.startsWith("Long-Term")
              ) {
                const [heading, ...rest] = paragraph.split("\n");
                const content = rest.join("\n");
                return (
                  <div key={index} className="mb-4">
                    <Typography.body1 weight="semibold" className="mb-2">
                      {heading}
                    </Typography.body1>
                    {content && <Typography.body1>{content}</Typography.body1>}
                  </div>
                );
              }

              // Regular paragraph
              return (
                <Typography.body1 key={index}>{paragraph}</Typography.body1>
              );
            })}
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
