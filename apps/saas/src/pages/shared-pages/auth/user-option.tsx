import IMAGE_PATHS from "@/assets/images";
import { useNavigate } from "react-router-dom";
import { Button } from "@solarverse/ui";
import { Typography } from "@solarverse/ui";

import { useState } from "react";
import { USER_TYPE } from "@/lib/constants";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import { Image } from "@solarverse/ui";
export default function Usersoption() {
  const [active, setActive] = useState<USER_TYPE | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!active) {
      alert("Please choose a profile type before continuing.");
      return;
    } else {
      const url =
        active === USER_TYPE.HOME_OWNER
          ? ROUTE_KEYS.HOME_OWNER_FORM
          : ROUTE_KEYS.INSTALLER_FORM_ONE;

      navigate(url);
    }
    console.log("Selected profile:", active); // 👈 send this to backend later
  };
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center  max-w-[1440px] bg-[#F4F4F4] h-screen ">
      <div className="flex flex-col w-full  gap-16  md:!max-w-[1027px] items-center bg-[#FFFFFF] p-[30px]">
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <div className="w-fit md:!mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full  max-w-[200px] h-[90px] md:!h-[115px] md:!max-w-[295px] object-contain"
            />
          </div>
          <Typography.body1
            size={"h2"}
            weight={"semibold"}
            className=" tracking-[1%] text-[#5A5F61]"
          >
            Choose Your Profile Type
          </Typography.body1>
        </div>

        {/* Options */}
        <div className="flex flex-col sm:!flex-row gap-6 items-center w-full max-w-[898px] h-fit">
          {/* Home/Business Owner */}
          <button
            type="button"
            onClick={() => setActive(USER_TYPE.HOME_OWNER)}
            className={`flex items-center gap-4 w-full max-w-[413px] h-fit cursor-pointer p-[20px] rounded-full justify-center transition ${
              active === USER_TYPE.HOME_OWNER
                ? "bg-white drop-shadow"
                : "border border-[#C1C6C5]/50 bg-[#F4F4F4]"
            }`}
          >
            <Image
              src={IMAGE_PATHS.homeOptionImg}
              alt="home-icon"
              containerClassName="w-full max-w-[50px] md:!max-w-[100px] h-[50px] md:!h-[100px]"
            />
            <Typography.body1
              size={"body1"}
              className=" tracking-[1.5%] text-[#5A5F61]"
            >
              Home/Business Owner
            </Typography.body1>
          </button>

          {/* Installer */}
          <button
            type="button"
            onClick={() => setActive(USER_TYPE.INSTALLER)}
            className={`flex items-center gap-4 w-full max-w-[413px] h-fit cursor-pointer p-[20px] rounded-full justify-center transition ${
              active === USER_TYPE.INSTALLER
                ? "bg-white drop-shadow"
                : "border border-[#C1C6C5]/50 bg-[#F4F4F4]"
            }`}
          >
            <Image
              src={IMAGE_PATHS.installerOptionImg}
              alt="installer-icon"
              containerClassName="w-full max-w-[50px] md:!max-w-[100px] h-[50px] md:!h-[100px]"
            />
            <Typography.body1
              size={"body1"}
              className=" tracking-[1.5%] text-[#5A5F61]"
            >
              Installer
            </Typography.body1>
          </button>
        </div>

        {/* Continue Button */}
        <Button.PrimarySolid
          size={"md"}
          onClick={handleContinue}
          className=" w-full max-w-[300px]  cursor-pointer text-white "
          type="submit"
        >
          Continue
        </Button.PrimarySolid>
      </div>
    </div>
  );
}
