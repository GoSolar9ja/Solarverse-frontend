import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import { CircleCheckBig } from "lucide-react";
import React from "react";
import SectionLayout from "../common/layout/section-layout";

const list = [
  "24/7 power for your home or business. Lights on, fridge cold, AC running. Always.",
  "Say goodbye to fuel costs. Cut those noisy generator bills and save BIG.",
  "Get instant quotes. Top installers compete to give you the best deal.",
  "Track everything, watch your project progress, manage payments, and stay in control.",
  "Perfect for every space homes, offices, shops, farms, schools—you name it, we power it.",
  "Flexible financing — Pay upfront or spread it out. We've got options that fit your pocket.",
];

export default function PowerupSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-full" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Power up with Solarverse{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            No More Blackouts. No More Fuel Hassles. Just Clean, Reliable Power
            Every Day!
          </Typography.h6>
        </div>
      }
    >
      <div className="md:!py-16 relative z-20 py-10 bg-primary-100 xl:!rounded-tl-[200px] rounded-tl-[100px] xl:!rounded-br-[200px] rounded-br-[100px] xl:!px-20 px-10 mt-10 max-w-[1067px] mx-auto">
        <ul className="text-white space-y-5 max-w-[800px] mx-auto">
          {list.map((item, index) => (
            <li key={index} className="flex items-center gap-4 ">
              <div className="bg-white w-fit p-2 rounded-full">
                <CircleCheckBig size={20} className="text-primary-100" />
              </div>
              <Typography.h6 weight="medium">{item}</Typography.h6>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={IMAGE_URLS.stripeIllustration}
        alt="stripes"
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
      />
    </SectionLayout>
  );
}
