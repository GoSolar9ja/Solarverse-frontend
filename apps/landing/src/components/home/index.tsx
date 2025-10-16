"use client";
import React from "react";
import HeroSection from "./hero-section";
import PoorElectricitySection from "./poor-electricity-section";
import PowerupSection from "./power-up-section";
import HowGoSolarWorks from "./how-gosolar-works";
// import InstallSolarSection from "./install-solar-section";
import GoSolarForSection from "./gosolar-for-section";
import WhyChooseGosolarSection from "./why-choose-gosolar-section";
import HomeAndBusinessSection from "./home-and-business-section";
import GetPluginSection from "./get-plugin-section";
import FaqSection from "./faq-section";

export default function HomeTemplate() {
  return (
    <div>
      <HeroSection />
      <PoorElectricitySection />
      <PowerupSection />
      <HowGoSolarWorks />
      {/* <InstallSolarSection />  */}
      <GoSolarForSection />
      <WhyChooseGosolarSection />
      <HomeAndBusinessSection />
      <GetPluginSection />
      <FaqSection />
    </div>
  );
}
