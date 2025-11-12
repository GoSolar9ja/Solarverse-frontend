import { RouteObject } from "react-router-dom";
import { HomeOwnerProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";

const homeOwnerRoutes: RouteObject[] = [
  {
    path: ROUTE_KEYS.HOME_OWNER_ROOT,
    element: <HomeOwnerProtectedOutlet />,
    children: [
      {
        index: true,
        element: <p>home owner</p>,
      },
      {
        path: ROUTE_KEYS.OVERVIEW,
        element: <p>home overview</p>,
      },
      {
        path: ROUTE_KEYS.ORDERS,
        element: <p>home orders</p>,
      },
      {
        path: ROUTE_KEYS.JOBS,
        element: <p>home jobs</p>,
      },
      {
        path: ROUTE_KEYS.SETTINGS,
        element: <p>home settings</p>,
      },
    ],
  },
];

export default homeOwnerRoutes;
