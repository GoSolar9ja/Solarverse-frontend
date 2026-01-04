import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solarverse/ui";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
import { Button } from "@solarverse/ui";
import { BriefcaseBusiness, ParkingMeter, Rocket, Wallet } from "lucide-react";
import ValidationApprovalIcon from "@/assets/icons/validation-approval-icon";

const features = [
  {
    icon: <BriefcaseBusiness />,
    title: "Only Real Jobs",
    description:
      "No more chasing cold leads. We connect you with verified homeowners ready to go solar.",
  },
  {
    icon: <ParkingMeter />,
    title: "Get Bids. Win Projects On Your Terms.",
    description:
      "Pick projects that fit your expertise, location, and schedule. You're in control.",
  },
  {
    icon: <ValidationApprovalIcon />,
    title: "Your Office, All in One Dashboard",
    description:
      "Chat with clients, submit bids, update progress, upload proof -  everything in one place.",
  },
  {
    icon: <Wallet />,
    title: "Secure Payments. No Delays.",
    description:
      "We ensure you get paid after every completed job, safely and on time.",
  },
  {
    icon: <Rocket />,
    title: "Boost Your Brand",
    description:
      "Every job you complete builds your public profile and credibility. <br/> More stars = more clients.",
  },
];
export default function WhyJoinHubSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC] relative" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Why Join Our Solar Installer Hub?{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            The hot opportunities we bring to you as an installer
          </Typography.h6>
        </div>
      }
    >
      <div className="flex justify-between items-center gap-10 flex-col lg:!flex-row   lg:!text-start lg:!mt-20 mt-10 relative z-20">
        <div className="flex-1 max-w-[625px]">
          <ul className="space-y-12 pt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-5">
                <div className="bg-primary rounded-full size-[50px] flex items-center justify-center flex-shrink-0">
                  {React.cloneElement(feature.icon, {
                    className: "text-white",
                  })}
                </div>

                <div>
                  <Typography.h5 weight={"semibold"}>
                    {feature.title}
                  </Typography.h5>
                  <Typography.body1>
                    <span
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                  </Typography.body1>
                </div>
              </li>
            ))}
          </ul>
          <Button.PrimarySolid
            className="md:!mt-20 mt-10 max-w-[286px] mx-auto sm:!mx-0"
            fullWidth
            onClick={() =>
              window.open(
                "https://solar-verse-saas.vercel.app/sign-up",
                "_blank"
              )
            }
          >
            Join As Installer
          </Button.PrimarySolid>
        </div>

        <div className="lg:!max-w-[610px] max-w-[700px] w-full lg:!flex-1 lg:!h-[722px] sm:!h-[600px] h-[500px] bg-gradient-to-b pl-2 overflow-hidden from-0% to-100% from-secondary-200 to-secondary-100 rounded-[100px]  flex-shrink-0 rounded-br-none">
          <Image
            src={IMAGE_URLS.hubImg}
            containerClassName="rounded-tl-[100px] rounded-bl-[100px] overflow-hidden"
            className="object-top"
            alt="hero"
          />
        </div>
      </div>
      <Image
        src={IMAGE_URLS.stripeIllustration}
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
        alt="stripes"
      />
    </SectionLayout>
  );
}
