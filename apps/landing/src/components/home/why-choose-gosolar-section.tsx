import { Typography } from "@solarverse/ui";
import React from "react";
import SectionLayout from "../common/layout/section-layout";
import RoughBgIllustration from "@/assets/illustrations/rough-bg-illustration";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
import WaterDownIcon from "@/assets/icons/waterfall-down-icon";
import VerifiedPersonIcon from "@/assets/icons/verified-person-icon";
import MoneyBagIcon from "@/assets/icons/money-bag-icon";
import SquareChartIcon from "@/assets/icons/square-chart-icon";
import HandShakeIcon from "@/assets/icons/handshake-icon";

const features = [
  {
    icon: <VerifiedPersonIcon />,
    title: "Verified Installers Only",
    description: "All providers are vetted, reviewed, and certified.",
  },
  {
    icon: <WaterDownIcon />,
    title: "Transparent Bidding System",
    description: "No hidden fees. Let installers compete for your business.",
  },
  {
    icon: <MoneyBagIcon />,
    title: "Flexible Financing Options",
    description: "Partner lenders available for affordable payment plans.",
  },
  {
    icon: <SquareChartIcon />,
    title: "Smart Project Dashboard",
    description: "Real-time updates, secure payments, and support.",
  },
  {
    icon: <HandShakeIcon />,
    title: "Ongoing Support",
    description:
      "From request to post-installation review, we've got your back.",
  },
];

export default function WhyChooseGosolarSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-[756px]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Why Thousands Choose Solarverse
          </Typography.h2>
          {/* <Typography.h6 className="text-[#11121499] mt-2">
            Our features provided that makes users choose us{" "}
          </Typography.h6> */}
        </div>
      }
    >
      <div className="flex gap-20 md:!mt-20 mt-10 xl:!justify-between justify-center ">
        <div className=" flex-1 hidden xl:!block">
          <div className="relative  flex flex-col h-[550px]">
            <RoughBgIllustration className="w-full absolute -top-5 left-0" />

            <Image
              containerClassName="mx-auto scale-80"
              src={IMAGE_URLS.solarHouseWithCloudImg}
              objectFit="contain"
              alt="solar-house-with-cloud"
            />
          </div>
        </div>

        <div className=" xl:!flex-1">
          <ul className="space-y-12 pt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-5">
                <div className="bg-primary-100 rounded-full size-[50px] flex items-center justify-center">
                  {feature.icon}
                </div>

                <div>
                  <Typography.h5 weight={"semibold"}>
                    {feature.title}
                  </Typography.h5>
                  <Typography.body1>{feature.description}</Typography.body1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
