import { DefaultLayout } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function ExploreSection() {
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
          <div className="text-white text-center max-w-[999px] mx-auto pb-14 flex flex-col items-center xl:!px-10">
            <Typography.h2
              weight={"medium"}
              className="text-4xl mb-4 max-w-[551px]"
            >
              Explore Insights That Power Your Choices
            </Typography.h2>
            <Typography.h5 className="text-lg  mt-5">
              Our blog is your hub for learning, researching, and making
              confident decisions about going solar in Nigeria
            </Typography.h5>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
