import { Typography } from "@solar-verse/ui";
import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { CenterLayout } from "@solar-verse/ui";
import { cn } from "@solar-verse/utils";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Sign Up & Get Verified",
      description:
        "Register, upload your certificates and past work get approved in hours.",
    },
    {
      id: 2,
      title: "Find Jobs You Want",
      description:
        "Browse available installation requests near you. No pressure.",
    },
    {
      id: 3,
      title: "Submit a Smart Quote",
      description:
        "Set your price, timeline, and proposal. Homeowners choose the best fit.",
    },
    {
      id: 4,
      title: "Do the Job. Get Paid. Repeat.",
      description:
        "Install, upload completion proof, get rated, and receive your payment. Easy.",
    },
  ];

  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC] relative" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            How It Works (Simple Facts){" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Steps to guide your co-operations with us as an installer{" "}
          </Typography.h6>
        </div>
      }
    >
      <ul className="grid lg:!grid-cols-2 grid-cols-1 gap-10 md:!mt-20 mt-10 max-w-[700px] mx-auto lg:!max-w-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className={cn(
              "bg-[#FCFCFC] md:!h-[179px] py-5 w-full  border-l-4 border-l-primary rounded-lg flex flex-col justify-center sm:!px-8 px-5"
            )}
          >
            <div className="flex justify-between">
              <Typography.h4 weight={"medium"}>{step.title}</Typography.h4>
              <CenterLayout className="h-[61px] w-[54px] flex-shrink-0 bg-primary-100 rounded-full translate-y-[-50%] text-white">
                <Typography.h6 weight={"medium"}>{step.id}</Typography.h6>
              </CenterLayout>
            </div>
            <Typography.h4 className="text-[#11121480] pr-5 ">
              {step.description}
            </Typography.h4>
          </div>
        ))}
      </ul>
    </SectionLayout>
  );
}
