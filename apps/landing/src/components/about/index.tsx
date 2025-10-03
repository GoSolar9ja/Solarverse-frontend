// "use client";
import React from "react";
import AboutUsSection from "./about-us-section";
import MissionVisionSection from "./mission-vision-section";
import StandForSection from "./stand-for-section";
import HowWeWorkSection from "./how-we-work-section";
import WhyGoSolarSection from "./why-gosolar-section";
import TeamSection from "./team-section";

export default function AboutTemplate() {
  return (
    <article>
      <AboutUsSection />
      <MissionVisionSection />
      <StandForSection />
      <HowWeWorkSection />
      <WhyGoSolarSection />
      <TeamSection />
    </article>
  );
}
