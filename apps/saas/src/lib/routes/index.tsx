import { RouteObject, useRoutes } from "react-router-dom";
import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";
import useAxiosInterceptor from "../hooks/use-axios-interceptor";

export default function AppRoutes() {
  useAxiosInterceptor();
  return useRoutes(publicRoutes.concat(protectedRoutes).concat(notFoundRoute));
}

const notFoundRoute: RouteObject[] = [
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
