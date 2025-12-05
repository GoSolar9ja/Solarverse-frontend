import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: [
      {
        path: "/overview",
        element: <h1>Overview</h1>,
      },
    ],
  },
];

export default protectedRoutes;
