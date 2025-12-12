import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import homeOwnerRoutes from "./home-owner-routes";
import installerRoutes from "./installer-routes";
import { lazy } from "react";

const Usersoption = lazy(() => import("@/pages/shared-pages/auth/user-option"));

const sharedRoutes: RouteObject[] = [
  { path: ROUTE_KEYS.USER_OPTION, element: <Usersoption /> },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: sharedRoutes.concat(homeOwnerRoutes).concat(installerRoutes),
  },
];

export default protectedRoutes;
