import {
  BellIcon,
  ChevronDown,
  ChevronRight,
  MailIcon,
  MenuIcon,
} from "lucide-react";
import SidebarNavigation from "./sidebar-navigation";
import { useToggle } from "usehooks-ts";
import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import BuildingIcon from "@/components/common/icons/building-icon";
import BiddingIcon from "@/components/common/icons/bidding-icon";
import SchedulingIcon from "@/components/common/icons/scheduling-icon";
import DashboardIcon from "@/components/common/icons/dashboard-icon";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import useGetProfileQuery from "@/lib/services/api/auth/get-profile.api";
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Typography,
} from "@solarverse/ui";
import { useLocation } from "react-router-dom";
import IMAGE_PATHS from "@/assets/images";

const navigationLinks = [
  {
    to: ROUTE_KEYS.OVERVIEW,
    icon: DashboardIcon,
    label: "Dashboard",
    title: "Dashboard Overview",
    index: true,
  },
  {
    to: ROUTE_KEYS.BIDDING,
    icon: BiddingIcon,
    label: "Bidding",
    title: "Bidding",
  },
  {
    to: ROUTE_KEYS.SCHEDULING,
    icon: SchedulingIcon,
    label: "Scheduling",

    title: "Scheduling",
  },
  {
    to: ROUTE_KEYS.PROJECT_TRACKER,
    icon: BuildingIcon,
    label: "Project Tracker",
    title: "Project Tracker",
  },
];

export default function HomeOwnerTopbar() {
  const [openSidebar, toggleOpenSidebar] = useToggle(false);
  const { logout } = useAuthContext();
  const { data } = useGetProfileQuery();
  const location = useLocation();
  const path = location.pathname;
  const activePath = navigationLinks.find((link) => path.includes(link.to));
  const title = activePath?.title;
  const userName =
    data?.data?.user?.firstName + " " + data?.data?.user?.lastName || "";
  const logoUrl = data?.data?.user?.profilePictureUrl;

  const actions = [
    {
      label: "Logout",
      onClick: logout,
    },
    {
      label: "Switch to installer",
      onClick: () => {},
    },
    {
      label: "Settings",
      onClick: () => {},
    },
  ];

  return (
    <>
      <SidebarNavigation
        openSidebar={openSidebar}
        toggleOpenSidebar={toggleOpenSidebar}
        navigationLinks={navigationLinks}
        userName={data?.data?.user.firstName || ""}
        userImage={data?.data?.user.profilePictureUrl || ""}
      />

      <div className="sticky top-0 bg-white p-5 flex justify-between gap-3 items-center">
        <Typography.h6>{title}</Typography.h6>
        {/* <button onClick={logout}>Logout</button> */}

        <div className="md:gap-5 gap-3 flex items-center">
          <Button.SecondarySolid
            size={"xs"}
            className="max-w-[190px] hidden md:flex!"
            rounded={"lg"}
          >
            + Request Installer
          </Button.SecondarySolid>
          <div className="rounded-full bg-[#F2F2F2] p-2">
            <MailIcon size={16} />
          </div>
          <div className="rounded-full bg-[#F2F2F2] p-2">
            <BellIcon size={16} />
          </div>

          <Popover>
            <PopoverTrigger>
              <button className="flex w-full max-w-[203px] cursor-pointer md:gap-[5px] gap-1  items-center justify-between rounded-xl">
                <div className="flex items-center justify-center w-fit h-fit gap-[3.68px]">
                  <div className="flex-shrink-0">
                    <Avatar
                      fallBack={userName?.[0]}
                      src={logoUrl || IMAGE_PATHS.avatarImg}
                    />
                  </div>

                  <Typography.body2 className="mx-2 tracking-[1%]  hidden md:block! line-clamp-1 text-[#111214]">
                    {userName}
                  </Typography.body2>
                </div>
                <ChevronDown />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="max-w-[200px]">
              <ul>
                <li className="p-2">
                  <Typography.body1>{userName}</Typography.body1>
                </li>
                {actions.map((action) => (
                  <li key={action.label}>
                    <button
                      onClick={action.onClick}
                      className="border-t border-t-gray-300 p-2 gap-3 flex items-center justify-between w-full cursor-pointer hover:bg-background"
                    >
                      <Typography.body2 inline>{action.label}</Typography.body2>
                      <ChevronRight className="text-gray-400" />
                    </button>
                  </li>
                ))}
                <li>
                  <Button.SecondarySolid
                    size={"xs"}
                    fullWidth
                    className=" flex md:hidden!"
                    rounded={"lg"}
                  >
                    + Request Installer
                  </Button.SecondarySolid>
                </li>
              </ul>
            </PopoverContent>
          </Popover>

          <button className="md:hidden" onClick={toggleOpenSidebar}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </>
  );
}
