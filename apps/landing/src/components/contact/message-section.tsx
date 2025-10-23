import React from "react";
import MessageForm from "./message-form";
import { Typography } from "@solarverse/ui";
import SectionLayout from "../common/layout/section-layout";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";

export default function MessageSection() {
  return (
    <SectionLayout
      sectionProps={{ className: "mt-5 relative mb-10 md:!mb-20" }}
      header={
        <div className="text-center">
          <Typography.h3 weight={"medium"}>
            Kindly Leave Us A Message
          </Typography.h3>
          <Typography.h5 variant={"fadedDark"} className="mt-2">
            We value your feedback. Kindly leave us a message by filling the
            form. For enquiries, please call +2349054061660{" "}
          </Typography.h5>
        </div>
      }
    >
      <MessageForm />
      <Image
        src={IMAGE_URLS.stripeIllustration}
        containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
        alt="stripes"
      />
    </SectionLayout>
  );
}
