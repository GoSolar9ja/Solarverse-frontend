import { Outlet } from "react-router-dom";
import InstallerTopbar from "../navigation/installer-topbar";
// import { useProfile } from "@/context/ProfileContext";

export const InstallerDashboardLayout = () => {
  // const { profile } = useProfile();

  return (
    <main className=" lg:p-6  lg:ml-[275px] ">
      <div className="bg-white min-h-[95vh]">
        <InstallerTopbar />
        {/* This is where child routes render */}
        <div className="px-5 pb-5">
          <Outlet />
          {/* {Array.from({ length: 100 }).map(() => (
            <p>hello</p>
          ))} */}
        </div>
      </div>
    </main>
  );
};
