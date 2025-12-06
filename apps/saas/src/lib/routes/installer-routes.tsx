import { Navigate, RouteObject } from "react-router-dom";
import { InstallerProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import ComingSoonTemplate from "@/components/common/templates/coming-soon-template";

const installerRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.INSTALLER_ROOT,
    element: <InstallerProtectedOutlet />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_KEYS.OVERVIEW} />,
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
];

export default installerRoutes;
