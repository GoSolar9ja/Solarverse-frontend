"use client";
import { IMAGE_URLS } from "@/assets/images";
import { Button, DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import React from "react";
import { CircleArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutUsSection() {
  const router = useRouter();
  return (
    <section
      className="py-32  flex items-center justify-center 
 "
      style={{
        backgroundImage:
          "linear-gradient(to right, #111214,#092D60 50%,#092D60 70%,#111214)",
      }}
    >
      <DefaultLayout>
        <div className="relative">
          <div className="text-white text-center max-w-[999px] mx-auto pb-14">
            <Typography.h2 weight={"medium"} className="text-4xl mb-4 ">
              About Us - Our Story
            </Typography.h2>
            <Typography.h5 className="text-lg  mt-10">
              Solarverse, a subsidiary of New Kingdom Electric LLP, was founded
              on a simple idea: to make solar energy accessible, affordable, and
              stress-free for Nigerian households and businesses. Our platform
              bridges the gap between solar professionals and customers who want
              reliable, clean energy without being overcharged or underserved.
            </Typography.h5>
          </div>
          <div className="absolute top-full left-0 w-full md:!h-[420px] h-[200px] ">
            <div className="relative  h-full rounded-xl overflow-hidden flex ">
              <div className="absolute size-full shadow-[inset_0px_0px_50px_10px_#FFFFFF] z-20" />
              <Image
                src={IMAGE_URLS.joinUsImg}
                alt="Join Us Image"
                containerClassName=" absolute left top-0 "
              />
              <Button.PrimaryOutline
                className="mt-auto mb-10  ml-auto bg-white mr-5 w-fit  relative z-20"
                onClick={() => router.push("/installer")}
              >
                <Typography.h5 className="text-black mx-3">
                  Join us
                </Typography.h5>
                <span className="bg-primary p-2 rounded-full">
                  <CircleArrowOutUpRight className="text-white" />
                </span>
              </Button.PrimaryOutline>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
