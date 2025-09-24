"use client";
import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solar-verse/ui";
import RoughCardBg from "@/assets/illustrations/rough-card-bg";
import { CenterLayout } from "@solar-verse/ui";
import PulseWaveIcon from "@/assets/icons/pulse-wave-icon";
import { cn } from "@solar-verse/utils";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

const data = [
  "Home/Business owners choose and schedule",
  "Verified installers submit quotes",
  "Our system tracks everything",
  "24/7 Full Customer",
];
export default function HowWeWorkSection() {
  const isResponsive = useMediaQuery("(min-width:1280px)");

  return (
    <SectionLayout
      sectionProps={{ className: "md:!mt-14 mt-10" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>What We stand For</Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Qualities we possess that makes our users confident
          </Typography.h6>
        </div>
      }
    >
      <div className="grid xl:!grid-cols-4 sm:!grid-cols-2 grid-cols-1 justify-items-center gap-10  mx-auto xl:!max-w-full max-w-[720px]  mt-10 overflow-hidden sm:!pl-16">
        {data.map((text, index) => (
          <div className="flex items-center " key={index}>
            <div className="flex-1 relative ">
              <RoughCardBg />
              <CenterLayout className="size-full  absolute inset-0 px-8  text-center">
                <Typography.h5 weight={"medium"} className="text-white">
                  {text}
                </Typography.h5>
              </CenterLayout>
            </div>
            <div
              className={cn(
                {
                  invisible:
                    (isResponsive && index === 3) ||
                    (!isResponsive && index % 2),
                },
                "sm:!block hidden"
              )}
            >
              <PulseWaveIcon />
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
