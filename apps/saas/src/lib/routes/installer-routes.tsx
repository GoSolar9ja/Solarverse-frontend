import { RouteObject } from "react-router-dom";
import { InstallerProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import ComingSoonTemplate from "@/components/common/templates/coming-soon-template";
import { lazy } from "react";

import { InstallerDashboardLayout } from "@/components/common/layout/installer-dashboard-layout";
const InstallerOnboardingForm = lazy(
  () => import("@/pages/installer-onboarding-form/step-one")
);
const InstallerOnboardingFormTwo = lazy(
  () => import("@/pages/installer-onboarding-form/step-two")
);
const InstallerOnboardingFormThree = lazy(
  () => import("@/pages/installer-onboarding-form/step-three")
);
const installerRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.INSTALLER_ROOT,
    element: <InstallerProtectedOutlet />,
    children: [
      {
        path: ROUTE_KEYS.INSTALLER_FORM_ONE,
        element: <InstallerOnboardingForm />,
      },
      {
        path: ROUTE_KEYS.INSTALLER_FORM_TWO,
        element: <InstallerOnboardingFormTwo />,
      },
      {
        path: ROUTE_KEYS.INSTALLER_FORM_THREE,
        element: <InstallerOnboardingFormThree />,
      },
      {
        element: <InstallerDashboardLayout />,
        children: [
          {
            index: true,
            element: <ComingSoonTemplate title="Dashboard Overview" />,
          },
          {
            path: ROUTE_KEYS.OVERVIEW,
            element: <ComingSoonTemplate title="Dashboard Overview" />,
          },
          {
            path: ROUTE_KEYS.BIDDING,
            element: <ComingSoonTemplate title="Bidding" />,
          },
          {
            path: ROUTE_KEYS.SCHEDULING,
            element: <ComingSoonTemplate title="Scheduling" />,
          },
          {
            path: ROUTE_KEYS.PROJECT_MANAGER,
            element: <ComingSoonTemplate title="Project Manager" />,
          },
          {
            path: ROUTE_KEYS.SETTINGS,
            element: <ComingSoonTemplate title="Settings" />,
          },
          {
            path: ROUTE_KEYS.NOTIFICATIONS,
            element: <ComingSoonTemplate title="Notifications" />,
          },
          {
            path: ROUTE_KEYS.WALLET,
            element: <ComingSoonTemplate title="Wallet" />,
          },
        ],
      },
    ],
  },
];

export default installerRoutes;

// const StepOneGuard = () => {
//   const { data: profileData, isPending } = useGetProfileQuery();
//   const userType = profileData?.data?.user.role;

//   if (isPending)
//     return (
//       <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
//     );

//   return !userType ? (
//     <Outlet />
//   ) : (
//     <Navigate to={ROUTE_KEYS.INSTALLER_FORM_TWO} />
//   );
// };
// const StepTwoGuard = () => {
//   const { isPending, data } = useGetBusinessProfileQuery();
//   const cacDoc = data?.data?.business.cacCertificateUrl;
//   const { data: profileData, isPending: loadingProfile } = useGetProfileQuery();
//   const userType = profileData?.data?.user.role;
//   if (isPending || loadingProfile)
//     return (
//       <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
//     );

//   if (!userType) return <Navigate to={ROUTE_KEYS.INSTALLER_FORM_ONE} />;
//   else if (!pro) return <Navigate to={ROUTE_KEYS.INSTALLER_FORM_TWO} />;
//   return <Outlet />;
// };
