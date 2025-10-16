"use client";
import React, { useState } from "react";
import DesktopNavBar from "./desktop-navbar";
import MobileNavBar from "./mobile-navbar";
import { useEventListener } from "usehooks-ts";
import { cn } from "@solar-verse/ui";

export default function TopNavBar() {
  const [scrollY, setScrollY] = useState(0);
  useEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <nav
      className={cn(
        "bg-white w-full sticky transition-all duration-700",
        scrollY > 1000 ? " top-0 z-30 " : "-top-full"
      )}
    >
      <div className="hidden xl:!block">
        <DesktopNavBar />
      </div>
      <div className="block xl:!hidden">
        <MobileNavBar />
      </div>
    </nav>
  );
}
