import { Typography } from "@solar-verse/ui";
import React from "react";
import SectionLayout from "../common/layout/section-layout";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
import { Button } from "@solar-verse/ui";
import { CircleArrowOutUpRight } from "lucide-react";
import BlogCard from "../common/cards/blog-card";

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

export default function GetPluginSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC] relative" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Get Plug in: Solar Tips. Trends & More{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Our blog is your hub for learning, researching, and making confident
            decisions about going solar in Nigeria{" "}
          </Typography.h6>
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:!grid-cols-2  xl:!grid-cols-3 xl:!mt-20 mt-10 gap-10">
        {cards.map((card, index) => (
          <BlogCard key={index} id={index} {...card} />
        ))}
      </div>

      <Button.PrimaryOutline className="md:!mt-20 mt-10 w-fit mx-auto relative z-10">
        <Typography.h5 className="text-black mx-3">More tips</Typography.h5>
        <span className="bg-primary p-2 rounded-full">
          <CircleArrowOutUpRight className="text-white" />
        </span>
      </Button.PrimaryOutline>

      <Image
        src={IMAGE_URLS.stripeIllustration}
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
        alt="stripes"
      />
    </SectionLayout>
  );
}
