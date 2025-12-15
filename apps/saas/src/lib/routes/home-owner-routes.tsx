import { Navigate, RouteObject } from "react-router-dom";
import { HomeOwnerProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import ComingSoonTemplate from "@/components/common/templates/coming-soon-template";
import { lazy } from "react";
import { HomeOwnerDashboardLayout } from "@/components/common/layout/home-owner-dashboard-layout";
const HomeOwnerOnboardingForm = lazy(
  () => import("@/pages/home-owner/onboarding-form")
);
const homeOwnerRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.HOME_OWNER_ROOT,
    element: <HomeOwnerProtectedOutlet />,
    children: [
      {
        path: ROUTE_KEYS.HOME_OWNER_FORM,
        element: <HomeOwnerOnboardingForm />,
      },
      {
        element: <HomeOwnerDashboardLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTE_KEYS.OVERVIEW} />,
          },
          {
            path: ROUTE_KEYS.HOME_OWNER_FORM,
            element: <HomeOwnerOnboardingForm />,
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
            path: ROUTE_KEYS.PROJECT_TRACKER,
            element: <ComingSoonTemplate title="Project Tracker" />,
          },
          {
            path: ROUTE_KEYS.SETTINGS,
            element: <ComingSoonTemplate title="Settings" />,
          },
          {
            path: ROUTE_KEYS.NOTIFICATIONS,
            element: <ComingSoonTemplate title="Notifications" />,
          },
        ],
      },
    ],
  },
];

export default homeOwnerRoutes;
