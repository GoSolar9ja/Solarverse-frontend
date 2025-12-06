import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: [
      {
        path: ROUTE_KEYS.OVERVIEW,
        element: <h1>Overview</h1>,
      },
    ],
  },
];

export default protectedRoutes;
