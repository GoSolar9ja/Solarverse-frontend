import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solar-verse/ui";
import BiscuitBgIllustration from "@/assets/illustrations/biscuit-bg-illustration";
import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";

const steps = [
  {
    img: IMAGE_URLS.tellUsImg,
    title: "Tell Us about Your Home",
    description:
      "Submit a simple request your location, energy needs, and property type.",
  },
  {
    img: IMAGE_URLS.compareQuotesImg,
    title: "Compare Quotes from Certified Installers",
    description:
      "Browse installer profiles, compare transparent bids, and check reviews.",
  },
  {
    img: IMAGE_URLS.bookYourInstallerImg,
    title: "Book Your Preferred Installer",
    description:
      "Choose a quote, schedule a date, and chat securely after payment.",
  },
  {
    img: IMAGE_URLS.trackYourProjectImg,
    title: "Track Your Project Online",
    description:
      "Monitor installation progress, milestones, and payment status from your dashboard.",
  },
  {
    img: IMAGE_URLS.celebrateEnergyIndependenceImg,
    title: "Celebrate Energy Independence",
    description: "Go solar, save on bills, and reduce your carbon footprint!",
  },
];

export default function HowGoSolarWorks() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            How GoSolar9ja Works{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Steps that helps you navigate your way to good solar installation
            with affordable price bid
          </Typography.h6>
        </div>
      }
    >
      <div className="grid grid-cols-1 justify-items-center lg:!grid-cols-3 sm:!grid-cols-2 gap-10 mt-20 text-white">
        {steps.map((step, index) => (
          <div
            key={index}
            className="max-w-[376px] bg-primary overflow-hidden  rounded-2xl relative "
          >
            <BiscuitBgIllustration className="absolute inset-0" />
            <div className="px-6 pt-5 pb-10  relative z-10">
              <div className="rounded-2xl   ">
                <div className="size-[51px] p-2 bg-white rounded-full ml-auto flex items-center justify-center text-2xl">
                  <Image src={step.img} alt={step.title} />
                </div>

                <div className="mt-10 space-y-5">
                  <Typography.h4 weight={"semibold"}>
                    {step.title}
                  </Typography.h4>

                  <Typography.h5>{step.description}</Typography.h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
