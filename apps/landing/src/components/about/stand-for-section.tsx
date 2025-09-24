"use client";

import { Typography } from "@solar-verse/ui";
import React, { useEffect, useState } from "react";
import SectionLayout from "../common/layout/section-layout";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
import { cn } from "@solar-verse/utils";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
const cardData = [
  {
    img: IMAGE_URLS.justiceScaleImg,
    title: "Transparency",
    description: "No middlemen. Clear pricing. Real reviews.",
  },
  {
    img: IMAGE_URLS.handGlobeImg,
    title: "Accessibility",
    description: "Everyone deserves clean energy, no matter their budget.",
  },
  {
    img: IMAGE_URLS.handBulbImg,
    title: "Empowerment",
    description: "Users stay in control of their projects.",
  },
  {
    img: IMAGE_URLS.starThumbImg,
    title: "Sustainability",
    description:
      "Helping Nigeria reduce reliance on diesel and unstable power grids.",
  },
];

export default function StandForSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "mt-20 " }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>What We stand For</Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Qualities we possess that makes our users confident
          </Typography.h6>
        </div>
      }
    >
      <div className="flex xl:!flex-row  flex-col justify-between items-center xl:!items-start mt-20 xl:!pl-20 gap-20">
        <div className="relative max-w-[445px]  mx-auto xl:!mx-0 w-full xl:!flex-1 h-[470px] order-2 xl:!order-1 mt-10">
          <div className=" relative  rounded-[30px] h-full overflow-hidden">
            <Image src={IMAGE_URLS.standForImg} alt="home and business" />
          </div>

          <div className="absolute bottom-0 -left-1/2 top-1/2 bg-gradient-to-b from-0% to-100% from-secondary-200 to-secondary-100 rounded-full w-[395px] h-[382px] -z-10 pl-1 p-3">
            <div className="size-full border border-dashed border-white rounded-full" />
          </div>
        </div>

        <div className="xl:!flex-1 grid xl:!grid-cols-1 xl:!justify-items-end   justify-items-center md:!grid-cols-2 grid-cols-1 gap-10 w-full xl:!w-auto order-1 xl:!order-2">
          {cardData.map((card, index) => (
            <Card key={index} index={index} {...card} />
          ))}
        </div>
      </div>
      <Image
        src={IMAGE_URLS.stripeIllustration}
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px] -z-10 "
        alt="stripes"
      />
    </SectionLayout>
  );
}

const Card = (props: {
  index: number;
  title: string;
  description: string;
  img: string;
}) => {
  const isResponsive = useMediaQuery("(min-width: 1280px)");
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div
      className={cn(
        "bg-[#FCFCFC] md:!h-[179px] py-5 w-full max-w-[540px] border-l-4 border-l-primary rounded-lg flex flex-col justify-center sm:!px-8 px-5"
      )}
      style={{
        transform: isResponsive
          ? `translateX(-${props.index * 80}px)`
          : "translateX(0)",
      }}
    >
      <div className="flex justify-between">
        <Typography.h4 weight={"medium"}>{props.title}</Typography.h4>
        <Image
          containerClassName="size-[30px]"
          src={props.img}
          alt={props.title}
        />
      </div>
      <Typography.h4 className="text-[#11121480] pr-5 mt-3">
        {props.description}
      </Typography.h4>
    </div>
  );
};
