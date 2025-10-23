import BuildingIcon from "@/components/common/icons/building-icon";
import BiddingIcon from "@/components/common/icons/bidding-icon";
import SchedulingIcon from "@/components/common/icons/scheduling-icon";
import DashboardIcon from "@/components/common/icons/dashboard-icon";
import ArrowDownIcon from "@/components/common/icons/arrowdown-icon";
import { Outlet, useLocation } from "react-router-dom";
// import { useProfile } from "@/context/ProfileContext";
import { Typography } from "@solarverse/ui";
import AppLink from "../navigation/app-nav-link";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";

export const HomeOwnerDashboardLayout = () => {
  // const { profile } = useProfile();

  const navigationLinks = [
    {
      to: "/overview",
      icon: DashboardIcon,
      label: "Dashboard",
    },
    {
      to: "/orders",
      icon: BiddingIcon,
      label: "Bidding",
    },
    {
      to: "/jobs",
      icon: SchedulingIcon,
      label: "Scheduling",
    },
    {
      to: "/settings",
      icon: BuildingIcon,
      label: "Project Tracker",
    },
  ];

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const activeColor = (path: string) => (isActive(path) ? "#111214" : "white");
  return (
    <div className="flex w-full max-w-[375px] h-screen md:!max-w-[1440px] bg-[#F4F4F4] mx-auto">
      {/* Sidebar */}
      <aside className="flex flex-col items-center gap-5 w-[275px] bg-[#0A6B9E] border-r-[0.66px] border-r-[#C1C6C5] rounded-[20px] p-4 min-h-screen">
        <div className="flex w-full p-[20px] max-w-[203px] h-[58px] gap-[5px] rounded-[10px] bg-[#FFFFFF] items-center justify-between">
          <Image
            src={IMAGE_PATHS.logoImg}
            alt="App logo"
            sizes=""
            containerClassName="w-full max-w-[47px] h-[30px]"
          />
          <div className="flex items-center justify-center w-fit h-fit gap-[3.68px]">
            <Image
              src={IMAGE_PATHS.avatarImg}
              alt="App logo"
              containerClassName="w-full max-w-[29.43px] h-[29.43px]"
            />
            <Typography.body1 className=" tracking-[1%] text-[#111214]">
              Roselyn
            </Typography.body1>
          </div>
          <ArrowDownIcon />
        </div>

        <ul className=" flex flex-col gap-[21px] w-full h-fit max-w-[203px] ">
          {navigationLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <li key={link.to}>
                <AppLink
                  to={link.to}
                  className={({ isActive }) =>
                    "block rounded-[10px] " +
                    (isActive
                      ? "bg-[#F4F4F4]/77 text-[#111214]"
                      : "text-[#FFFFFF]")
                  }
                >
                  <div className="flex items-center gap-[16px] p-[10px]">
                    <IconComponent
                      stroke={activeColor(link.to)}
                      color={activeColor(link.to)}
                    />
                    <Typography.body1 className=" tracking-[1%]">
                      {link.label}
                    </Typography.body1>
                  </div>
                </AppLink>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* This is where child routes render */}
        <Outlet />
      </main>
    </div>
  );
};
