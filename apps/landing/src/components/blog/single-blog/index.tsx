"use client";
import { IMAGE_URLS } from "@/assets/images";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SingleBlogTemplate() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <section className="md:!pb-20 pb-10">
      <DefaultLayout>
        <button
          className="bg-[#1112141A] p-2 mt-5 rounded-full"
          onClick={handleBack}
        >
          <ArrowLeft />
        </button>

        <div className="mt-5 max-w-[1048px] mx-auto">
          <Typography.h4 weight={"medium"} variant={"primary"}>
            5 Myths About Solar Power in Nigeria Debunked5 Myths About Solar
            Power in Nigeria Debunked
          </Typography.h4>

          <Image
            containerClassName="h-[389px] mt-5 rounded-2xl"
            src={IMAGE_URLS.blogTwoImg}
            alt="Blog Image"
          />

          <div className="flex mt-5 gap-8">
            <Typography.body1>
              12/05/2025
              <Typography.body2 inline className="ml-2">
                09:30pm{" "}
              </Typography.body2>
            </Typography.body1>
            <Typography.body1 weight={"medium"}>
              Solar Verse Update
            </Typography.body1>
          </div>

          <Typography.body1
            className="my-5"
            weight={"medium"}
            variant={"fadedDark"}
          >
            5 Myths About Solar Power in Nigeria - Debunked <br /> Solar power
            is gaining popularity in Nigeria, but several myths still hold
            people back. Here are five common misconceptions—debunked:
          </Typography.body1>
          <ul className="pl-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="list-decimal">
                <Typography.body1 weight={"medium"} variant={"fadedDark"}>
                  Myth: Solar is too expensive
                </Typography.body1>
                <Typography.body1 weight={"medium"} variant={"fadedDark"}>
                  Truth: While the initial cost can be high, solar saves money
                  long-term on fuel and generator maintenance
                </Typography.body1>
              </li>
            ))}
          </ul>

          <Typography.body1
            className="my-3"
            weight={"medium"}
            variant={"fadedDark"}
          >
            Switching to solar is more practical—and powerful—than many think.
          </Typography.body1>
        </div>
      </DefaultLayout>
    </section>
  );
}
