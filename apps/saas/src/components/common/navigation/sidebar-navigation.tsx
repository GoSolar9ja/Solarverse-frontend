// import { useProfile } from "@/context/ProfileContext";
import { ComponentVisibility, Typography } from "@solarverse/ui";
import AppLink from "../navigation/app-nav-link";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";
import BuildingIcon from "@/components/common/icons/building-icon";
import BiddingIcon from "@/components/common/icons/bidding-icon";
import SchedulingIcon from "@/components/common/icons/scheduling-icon";
import DashboardIcon from "@/components/common/icons/dashboard-icon";
import ArrowDownIcon from "@/components/common/icons/arrowdown-icon";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
interface IProps {
  openSidebar: boolean;
  toggleOpenSidebar(): void;
}

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

export default function SidebarNavigation({
  openSidebar,
  toggleOpenSidebar,
}: IProps) {
  // const { logout } = useAuthContext();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const activeColor = (path: string) => (isActive(path) ? "#111214" : "white");
  return (
    <>
      <ComponentVisibility visible={openSidebar}>
        <div
          onClick={toggleOpenSidebar}
          className="fixed right-0 top-0 z-20 bg-black/20  backdrop-blur-xs inset-0 size-svw lg:hidden"
        />
      </ComponentVisibility>
      <nav
        className={cn(
          "flex flex-col transition-all duration-500 items-center gap-5 w-[275px] bg-[#0A6B9E] border-r-[0.66px] border-r-[#C1C6C5] p-4 h-screen fixed lg:left-0  top-0 z-20",
          openSidebar ? "left-0" : "-left-full"
        )}
      >
        <div className="flex w-full p-5 max-w-[203px] h-[58px] gap-[5px]  bg-[#FFFFFF] items-center justify-between">
          <Image
            src={IMAGE_PATHS.transparentLogoImg}
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
                  onClick={toggleOpenSidebar}
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
      </nav>
    </>
  );
}
