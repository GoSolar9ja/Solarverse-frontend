import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solarverse/ui";
import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";
import { Pin } from "lucide-react";
import { Button } from "@solarverse/ui";

const bullets = [
  "Get matched with verified leads",
  "Build a credible online profile",
  "Earn faster with secure payments",
  "Grow your reputation and client base",
];

export default function InstallSolarSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Install Solar. Get paid. Grow your business{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            We connect you directly with homeowners actively seeking solar
            installations no cold calls, no ads, just real jobs.
          </Typography.h6>
        </div>
      }
    >
      <div className="flex justify-between items-center gap-10 flex-col lg:!flex-row  text-center lg:!text-start lg:!mt-20 mt-10">
        <div>
          <Typography.h4>Are you a certified solar installer?</Typography.h4>
          <Typography.h5 className="text-[#11121499]">
            Ready to power more homes and grow your business?
          </Typography.h5>

          <ul className="mt-10 space-y-5  w-fit mx-auto lg:!mx-0">
            {bullets.map((text) => (
              <li key={text} className="flex gap-4">
                <Pin className="rotate-45 text-primary" />
                <Typography.h5>{text}</Typography.h5>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            <Button.SecondarySolid
              className="mt-10 max-w-[286px] mx-auto lg:!mx-0"
              fullWidth
            >
              Learn More
            </Button.SecondarySolid>
            <Button.PrimarySolid
              className="mt-10 max-w-[286px] mx-auto lg:!mx-0"
              fullWidth
            >
              Join As Installer
            </Button.PrimarySolid>
          </div>
        </div>

        <div className="lg:!max-w-[648px] max-w-[700px] w-full lg:!flex-1 lg:!h-[496px] h-[350px] bg-gradient-to-b pl-2 overflow-hidden from-0% to-100% from-secondary-200 to-secondary-100 rounded-[100px]  flex-shrink-0 rounded-br-none">
          <Image
            src={IMAGE_URLS.installSolar}
            containerClassName="rounded-tl-[100px] rounded-bl-[100px] overflow-hidden"
            alt="hero"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
