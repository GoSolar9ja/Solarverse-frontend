import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import homeOwnerRoutes from "./home-owner-routes";
import installerRoutes from "./installer-routes";

const sharedRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.NOTIFICATIONS,
    element: <p>notification</p>,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: sharedRoutes.concat(homeOwnerRoutes).concat(installerRoutes),
  },
];

export default protectedRoutes;
