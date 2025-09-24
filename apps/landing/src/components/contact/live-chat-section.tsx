import { DefaultLayout } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function LiveChatSection() {
  return (
    <section
      className="py-32  flex items-center justify-center relative"
      id="live-chat-section"
      style={{
        backgroundImage:
          "linear-gradient(to right, #111214,#092D60 50%,#092D60 70%,#111214)",
      }}
    >
      <DefaultLayout>
        <div className="relative">
          <div className="text-white text-center max-w-[999px] mx-auto pb-14">
            <Typography.h2 weight={"medium"} className="text-4xl mb-4 ">
              We’re Here to Help You Power Up{" "}
            </Typography.h2>
            <Typography.h5 className="text-lg  mt-5">
              Have questions, concerns, or just curious about going solar? Reach
              out — we’d love to help.
            </Typography.h5>
          </div>
          {/* <Button.SecondarySolid className="mx-auto">
            Use Live Chat{" "}
            <CenterLayout className="p-2 bg-white rounded-full size-[41px]">
              <MessageCircleMore color="#F3910D" size={23} />
            </CenterLayout>
          </Button.SecondarySolid> */}
        </div>
      </DefaultLayout>
    </section>
  );
}
