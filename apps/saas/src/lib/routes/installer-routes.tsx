import { RouteObject } from "react-router-dom";
import { InstallerProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";

const installerRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.INSTALLER_ROOT,
    element: <InstallerProtectedOutlet />,
    children: [
      {
        index: true,
        element: <p>Installer Root</p>,
      },
      {
        path: ROUTE_KEYS.OVERVIEW,
        element: <p>Installer overview</p>,
      },
      {
        path: ROUTE_KEYS.BIDDING,
        element: <p>Installer Bidding</p>,
      },
    ],
  },
];

export default installerRoutes;
