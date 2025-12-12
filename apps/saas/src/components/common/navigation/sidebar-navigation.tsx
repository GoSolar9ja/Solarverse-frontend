// import { useProfile } from "@/context/ProfileContext";
import { ComponentVisibility, Typography } from "@solarverse/ui";
import AppLink from "../navigation/app-nav-link";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
interface IProps {
  openSidebar: boolean;
  toggleOpenSidebar(): void;
  navigationLinks: {
    to: string;
    icon: (props: React.ComponentProps<"svg">) => React.JSX.Element;
    label: string;
    index?: boolean;
  }[];
  userName: string;
  userImage: string;
}

export default function SidebarNavigation({
  openSidebar,
  toggleOpenSidebar,
  navigationLinks,
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
          className="fixed right-0 top-0 z-20 bg-black/20  backdrop-blur-xs inset-0 size-full lg:hidden"
        />
      </ComponentVisibility>
      <nav
        className={cn(
          "flex flex-col transition-all duration-500 items-center gap-5 w-[275px] bg-[#0A6B9E] border-r-[0.66px] border-r-[#C1C6C5] p-4 h-screen fixed lg:left-0  top-0 z-20",
          openSidebar ? "left-0" : "-left-full"
        )}
      >
        <div className="bg-white rounded-full p-3">
          <Image
            src={IMAGE_PATHS.transparentLogoImg}
            alt="App logo"
            containerClassName="w-full max-w-[107px] h-[100px]"
          />
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
                    (isActive ||
                    (link.index &&
                      location.pathname === ROUTE_KEYS.INSTALLER_ROOT)
                      ? "bg-[#F4F4F4]/77 text-[#111214]"
                      : "text-[#FFFFFF]")
                  }
                >
                  <div className="flex items-center gap-[16px] p-[10px]">
                    <IconComponent
                      stroke={
                        (link.index &&
                          location.pathname === ROUTE_KEYS.INSTALLER_ROOT &&
                          "#111214") ||
                        activeColor(link.to)
                      }
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
