import { Button } from "@solarverse/ui";
import { DefaultLayout } from "@solarverse/ui";
import { Typography } from "@solarverse/ui";
import React from "react";

export default function PowerHomeSection() {
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
              Power Homes. Build Your Business.{" "}
            </Typography.h2>
            <Typography.h5 className="text-lg  mt-5 text-white/80">
              Join Nigeria’s #1 Solar Installer Network — Get Hired. Get Paid.
              Grow Fast.
            </Typography.h5>
          </div>
          <div className="max-w-[593px] w-full mx-auto flex gap-5 md:!gap-10">
            <Button.PrimarySolid
              onClick={() =>
                window.open(
                  "https://solar-verse-saas.vercel.app/sign-up",
                  "_blank"
                )
              }
              fullWidth
            >
              Join As Installer
            </Button.PrimarySolid>
            <Button.SecondarySolid
              onClick={() =>
                window.open("https://solar-verse-saas.vercel.app", "_blank")
              }
              fullWidth
            >
              Sign In{" "}
            </Button.SecondarySolid>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
