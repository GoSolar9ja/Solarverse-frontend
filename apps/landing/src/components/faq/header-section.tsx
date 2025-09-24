import { IMAGE_URLS } from "@/assets/images";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function HeaderSection() {
  return (
    <section
      className="  flex items-center justify-center relative h-[300px]"
      id="live-chat-section"
      style={{
        backgroundImage:
          "linear-gradient(to right, #111214,#092D60 50%,#092D60 70%,#111214)",
      }}
    >
      <Image src={IMAGE_URLS.faqBannerImg} alt="Faq Banner" />
      <div className="bg-black/50 absolute inset-0 py-32">
        <DefaultLayout>
          <div className="relative">
            <div className="text-white text-center max-w-[999px] mx-auto pb-14">
              <Typography.h2 weight={"medium"} className="text-4xl mb-4 ">
                Frequently Asked Questions{" "}
              </Typography.h2>
              <Typography.h5 className="text-lg  mt-5">
                Here aer answers to questions you might want to ask us
              </Typography.h5>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </section>
  );
}
