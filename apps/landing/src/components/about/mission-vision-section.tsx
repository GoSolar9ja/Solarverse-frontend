"use client";
import { DefaultLayout } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function MissionVisionSection() {
  return (
    <section className="md:!pt-[300px] pt-26">
      <DefaultLayout>
        <div className="flex md:!flex-row flex-col  gap-10 mt-20">
          <Card
            title="Our Mission"
            content="To simplify solar adoption by empowering users with choice, knowledge, and control while supporting the growth of certified solar professionals."
          />
          <Card
            title="Our Vision"
            content="Solarverse envisions becoming Nigeria’s leading hub for solar energy solutions, where every home, business, and community can confidently transition to renewable power. We aim to close the electricity access gap, accelerate the adoption of clean energy, and build a future where solar power is within everyone's reach."
          />
        </div>
      </DefaultLayout>
    </section>
  );
}

const Card = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col gap-[20px] bg-[#F3910D0D] max-w-[603px]   flex-1">
      <div className="bg-white shadow-[5px_5px_0px_0px_#2495D1] px-5 py-3 rounded-lg w-fit -m-3">
        <Typography.h2 weight={"medium"}>{title}</Typography.h2>
      </div>
      <div className="xl:!px-10 px-5 py-6">
        <Typography.h4>{content}</Typography.h4>
      </div>
    </div>
  );
};
