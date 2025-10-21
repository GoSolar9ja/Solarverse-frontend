import { IMAGE_URLS } from "@/assets/images";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const list = [
  "Verified Home/Business owners",
  "Fair Bidding System",
  "Real-Time Updates",
  "Support When You Need It",
  "Professional Dashboard",
  "Grow Your Portfolio",
];

export default function PowerupCarrerSection() {
  return (
    <section className="md:!py-38 py-10">
      <DefaultLayout>
        <div className=" max-w-[467.3px]">
          <Typography.h3 weight={"medium"}>Why Solarverse?</Typography.h3>
          <Typography.body1 className="mt-4">
            Join thousands of Nigerians making the smart switch to solar.
            <Typography.body1>
              Let’s light up your home and the future together.
            </Typography.body1>
          </Typography.body1>
        </div>
        <div className="relative">
          <div className="bg-[#2495D1] py-5 sm:!px-28 px-10 rounded-4xl relative overflow-hidden mt-8">
            <div className="bg-white/20 w-[125px] h-[103px] rounded-[100px/80px] absolute -top-7 -left-7 "></div>
            <div className="bg-white/20 w-[179px] h-[147px] rounded-[100px/80px] absolute -bottom-26 left-26 "></div>
            <div className="bg-white/20 w-[179px] h-[147px] rounded-[100px/80px] absolute -translate-y-1/2 top-1/2 -right-26 "></div>
            <ul className="text-white space-y-5 w-fit xl:!w-auto mx-auto">
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
          <div className="absolute -top-16 right-18 bg-black h-[483px] w-[456px] xl:!flex rounded-[20px] hidden">
            <Image
              containerClassName="w-[312px] h-[403px] mt-auto mx-auto"
              src={IMAGE_URLS.powerupCarrer}
              alt="Power Up Carrer"
            />
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
