import { RouteObject, useRoutes } from "react-router-dom";
import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";

export default function AppRoutes() {
  return useRoutes(publicRoutes.concat(protectedRoutes).concat(notFoundRoute));
}

const notFoundRoute: RouteObject[] = [
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
