import React from "react";
import DesktopNavBar from "./desktop-navbar";
import MobileNavBar from "./mobile-navbar";

export default function TopNavBar() {
  return (
    <nav>
      <div className="hidden xl:!block">
        <DesktopNavBar />
      </div>
      <div className="block xl:!hidden">
        <MobileNavBar />
      </div>
    </nav>
  );
}
