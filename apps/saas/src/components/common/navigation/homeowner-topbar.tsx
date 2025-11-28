import { MenuIcon } from "lucide-react";
import SidebarNavigation from "./sidebar-navigation";
import { useToggle } from "usehooks-ts";

export default function HomeOwnerTopbar() {
  const [openSidebar, toggleOpenSidebar] = useToggle(false);
  return (
    <>
      <SidebarNavigation
        openSidebar={openSidebar}
        toggleOpenSidebar={toggleOpenSidebar}
      />
      <div className="sticky top-0 bg-white p-5 flex justify-between">
        <p>Home Owner top bar</p>
        <button onClick={toggleOpenSidebar}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}
