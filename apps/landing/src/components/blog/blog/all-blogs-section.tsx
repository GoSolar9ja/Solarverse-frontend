import { IMAGE_URLS } from "@/assets/images";
import BlogCard from "@/components/common/cards/blog-card";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import React from "react";

const cards = [
  {
    title: "5 Myths About Solar Power in Nigeria Debunked",
    description:
      "5 Myths About Solar Power in Nigeria Debunked Power in Nigeria Debunke",
  },
  {
    title: "5 Myths About Solar Power in Nigeria Debunked",
    description:
      "5 Myths About Solar Power in Nigeria Debunked Power in Nigeria Debunke",
  },
  {
    title: "5 Myths About Solar Power in Nigeria Debunked",
    description:
      "5 Myths About Solar Power in Nigeria Debunked Power in Nigeria Debunke",
  },
];

export default function AllBlogsSection() {
  return (
    <section className="md:!pt-10 md:!pb-26 py-10 relative">
      <DefaultLayout>
        <Typography.h2
          weight={"medium"}
          className="max-w-[551px] mx-auto text-center"
        >
          Your Go-To Hub for All Things Solar and Sustainability
        </Typography.h2>

        <div className="grid grid-cols-1 sm:!grid-cols-2  xl:!grid-cols-3 xl:!mt-20 mt-10 gap-10 relative pb-20 z-20">
          {cards.map((card, index) => (
            <BlogCard key={index} id={index} {...card} />
          ))}
        </div>
        <Image
          src={IMAGE_URLS.stripeIllustration}
          containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
          alt="stripes"
        />
      </DefaultLayout>
    </section>
  );
}
