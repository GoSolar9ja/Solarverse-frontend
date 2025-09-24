import { IMAGE_URLS } from "@/assets/images";
import { Typography } from "@solar-verse/ui";
import React from "react";
import Image from "@/components/common/media/image";
import { CenterLayout } from "@solar-verse/ui";
import { Button } from "@solar-verse/ui";
import { cn } from "@solar-verse/utils";
import CountUp from "../common/libs/count-up";

const customerAvatars = [
  {
    name: "S",
    color: "bg-white",
    image: IMAGE_URLS.heroUserImg1,
  },
  {
    name: "M",
    color: "bg-white",
    image: IMAGE_URLS.heroUserImg2,
  },
  {
    name: "M",
    color: "bg-white",
    image: IMAGE_URLS.heroUserImg2,
  },
  {
    name: "J",
    color: "bg-white",
    image: IMAGE_URLS.heroUserImg3,
  },
  {
    name: (
      <>
        <CountUp end={500} duration={2} />+
      </>
    ),
    color: "bg-primary",
  },
];

export default function HeroSection() {
  return (
    <section className="md:!rounded-b-[60px] rounded-b-[40px] md:!h-[700px] h-[600px] relative overflow-hidden">
      <Image
        src={IMAGE_URLS.hero}
        alt="hero"
        className="w-full h-full"
        priority
      />
      <div className="absolute inset-0 w-full h-full bg-black/70 text-center flex items-center justify-center">
        <div className="max-w-[959px] mx-auto md:!px-5">
          <Typography.h1 className="text-white" weight={"bold"}>
            Switch to Solar, Save Big. Power Your Future with{" "}
            <Typography.h1 inline variant={"primary"}>
              GoSolar9ja
            </Typography.h1>
            .
          </Typography.h1>

          <Typography.h5 className="text-white/80 mt-5">
            Nigeria’s trusted platform to connect homeowners with certified
            solar installers. Get competitive bids, choose your best match, and
            manage your installation seamlessly all in one place.
          </Typography.h5>

          <CenterLayout className="flex sm:!gap-8 gap-4 mt-20 max-w-[593px] mx-auto">
            <Button.PrimarySolid className="flex-1">
              Find Installers
            </Button.PrimarySolid>
            <Button.SecondarySolid className="flex-1">
              Join as Installer
            </Button.SecondarySolid>
          </CenterLayout>

          <div className="flex flex-col sm:!flex-row gap-4 md:!gap-6 mt-8 md:!mt-14 items-center justify-center">
            {/* Customer Avatars */}
            <div className="flex items-center gap-4 md:!gap-4  bg-white/30 rounded-full px-4 md:!px-5 py-2 md:!py-3">
              <div className="flex items-center -space-x-2 md:!-space-x-3">
                {customerAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={cn(
                      "size-[40px] md:!size-[50px] rounded-full bg-gradient-to-br p-[1px] bg-white flex items-center justify-center",
                      avatar.color
                    )}
                    style={{
                      zIndex: index,
                    }}
                  >
                    {avatar.image ? (
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        className="size-full object-cover"
                      />
                    ) : (
                      <Typography.body2
                        variant="primary"
                        weight="bold"
                        className="text-white text-xs md:!text-sm"
                      >
                        {avatar.name}
                      </Typography.body2>
                    )}
                  </div>
                ))}
              </div>
              <Typography.h6
                className="text-sm md:!text-base text-white"
                weight={"bold"}
              >
                Users
              </Typography.h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
