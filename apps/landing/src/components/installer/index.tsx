"use client";
import React from "react";
import PowerHomeSection from "./power-home-section";
import WhyJoinHubSection from "./why-join-hub-section";
import HowItWorksSection from "./how-it-works-section";
import InstallerStoriesSection from "./installer-stories-section";
import PowerupCarrerSection from "./powerup-carrer-section";

export default function InstallersTemplate() {
  return (
    <div>
      <PowerHomeSection />
      <WhyJoinHubSection />
      <HowItWorksSection />
      <InstallerStoriesSection />
      <PowerupCarrerSection />
    </div>
  );
}
