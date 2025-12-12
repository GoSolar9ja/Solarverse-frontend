import { Navigate, Outlet } from "react-router-dom";
import InstallerTopbar from "../navigation/installer-topbar";
import useGetProfileQuery from "@/lib/services/api/auth/get-profile.api";
import useGetBusinessProfileQuery from "@/lib/services/api/auth/get-business-profile.api";
// import useInstallerPastProjectsQuery from "@/lib/services/api/file-uploads/get-past-projects.api";
import ActivityStateTemplate from "../templates/activity-state-template";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
// import { useProfile } from "@/context/ProfileContext";

export const InstallerDashboardLayout = () => {
  const { isPending, data } = useGetBusinessProfileQuery();
  const { data: profileData, isLoading: loadingProfileData } =
    useGetProfileQuery();
  const cacDoc = data?.data?.business.cacCertificateUrl;
  // const certDoc = data?.data?.business.certificationLicenseUrls;
  // const { data: pastProjectsData, isLoading: pastProjectsIsPending } =
  //   useInstallerPastProjectsQuery();
  // const pastProjectsCount = pastProjectsData?.data?.count || 0;
  const userType = profileData?.data?.user.role;
  if (loadingProfileData || isPending)
    return (
      <ActivityStateTemplate show={loadingProfileData || isPending}>
        Loading
      </ActivityStateTemplate>
    );

  if (!userType) return <Navigate to={ROUTE_KEYS.INSTALLER_FORM_ONE} />;
  if (!cacDoc) return <Navigate to={ROUTE_KEYS.INSTALLER_FORM_TWO} />;
  // if (pastProjectsCount === 0)
  //   return <Navigate to={ROUTE_KEYS.INSTALLER_FORM_THREE} />;

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
