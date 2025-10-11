import { Typography } from "@solar-verse/ui";
import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Star } from "lucide-react";
import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";
import ReviewsSlider from "../common/slider/reviews-slider";

const reviews = [
  {
    name: "Chika O., Abuja",
    description:
      "I saved over ₦300,000 on my solar installation by comparing bids on Solarverse. Everything was seamless!",
    rating: 5,
  },
  {
    name: "Engineer Sodiq A.",
    description:
      "As an installer, I’ve reached more customers through this platform than through ads. It’s the future!",
    rating: 5,
  },
];

export default function HomeAndBusinessSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-full" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Homes and Businesses, Powered Smarter, Saving Bigger{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Reviews from verified users
          </Typography.h6>
        </div>
      }
    >
      <div className="flex flex-col xl:!flex-row justify-between items-center xl:!items-start mt-20 xl:!pl-20 gap-20 xl:!gap-0">
        <div className="relative max-w-[445px] w-full xl:!flex-1 h-[402px] order-2 xl:!order-1">
          <div className=" relative  rounded-[30px] h-full overflow-hidden">
            <div className="bg-white p-3 -mt-3 z-20 absolute top-0 right-0 rounded-full w-fit">
              <Star className="text-primary fill-primary size-[52px]" />
            </div>

            <Image
              src={IMAGE_URLS.homeAndBusinessImg}
              alt="home and business"
            />
          </div>

          <div className="absolute bottom-0 -left-1/2 top-1/2 bg-gradient-to-b from-0% to-100% from-secondary-200 to-secondary-100 rounded-full w-[395px] h-[382px] -z-10 pl-1 p-3">
            <div className="size-full border border-dashed border-white rounded-full" />
          </div>
        </div>

        <div className="flex-1 xl:!max-w-[563px] max-w-[800px] order-1 xl:!order-2 w-full">
          <ReviewsSlider reviews={reviews} />
        </div>
      </div>
    </SectionLayout>
  );
}
