import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solarverse/ui";
import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";
import { Button } from "@solarverse/ui";
import { cn } from "@solarverse/utils";

const cards = [
  {
    img: IMAGE_URLS.homeOwnerImg,
    title: "Home Owner",
    description:
      "Keep your lights on, fridge cold, and fans spinning 24/7 even when the grid goes down.",
  },
  {
    img: IMAGE_URLS.businessCommercialImg,
    title: "Business & Commercial Property",
    description:
      "Never let power outages slow your operations. Power your offices, shops, factories, or farms with reliable solar energy.",
  },
  {
    img: IMAGE_URLS.contractorsImg,
    title: "Solar installer & Contractor",
    description:
      "Connect with verified homeowners and businesses looking to go solar. Submit bids, grow your business, and get paid faster.",
  },
];

export default function GoSolarForSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Who Is Solarverse For?{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Solar Power. For Every Home. For Every Business. For Every
            Installer.
          </Typography.h6>
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:!grid-cols-2  xl:!grid-cols-3 xl:!mt-20 mt-10 gap-10">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={cn(
              "sm:!h-[400px] w-full h-[350px]  relative overflow-hidden",
              index === 2 ? "xl:!col-span-1 sm:!col-span-2" : ""
            )}
          >
            <div
              className={cn(
                "w-full h-full max-w-[500px] relative overflow-hidden rounded-2xl mx-auto xl:!mx-0"
                // index === 2 ? "mx-auto" : ""
              )}
            >
              <div key={card.title} className={cn(" text-white h-full")}>
                <Image
                  src={card.img}
                  alt={card.title}
                  className="object-bottom hover:scale-120 transition-all  duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-[10%] to-[60%]  to-black/90 w-full h-[190px] flex flex-col justify-center rounded-b-2xl px-5 py-4">
                  <Typography.h5 weight={"semibold"}>
                    {card.title}
                  </Typography.h5>
                  <Typography.body1>{card.description}</Typography.body1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-14 relative z-10">
        <Button.PrimarySolid
          onClick={() =>
            window.open("https://solar-verse-saas.vercel.app", "_blank")
          }
          className="max-w-[286px]"
          fullWidth
        >
          Get 24/7 Power
        </Button.PrimarySolid>
        <Button.SecondarySolid
          onClick={() =>
            window.open("https://solar-verse-saas.vercel.app/sign-up", "_blank")
          }
          className="max-w-[286px]"
          fullWidth
        >
          Join As Installer
        </Button.SecondarySolid>
      </div>
      <Image
        src={IMAGE_URLS.stripeIllustration}
        alt="powerup"
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
      />
    </SectionLayout>
  );
}
