import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import ComingSoonTemplate from "@/components/common/templates/coming-soon-template";

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: [
      {
        path: ROUTE_KEYS.OVERVIEW,
        element: <ComingSoonTemplate title="Overview" showLogoutButton />,
      },
    ],
  },
];

export default protectedRoutes;
