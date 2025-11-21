import { RouteObject, useRoutes } from "react-router-dom";
import publicRoutes from "./public-routes";
import protectedRoutes from "./protected-routes";
import useAxiosInterceptor from "../hooks/use-axios-interceptor";
import ErrorStateTemplate from "@/components/common/templates/error-state-template";

export default function AppRoutes() {
  useAxiosInterceptor();
  return useRoutes(publicRoutes.concat(protectedRoutes).concat(notFoundRoute));
}

const notFoundRoute: RouteObject[] = [
  {
    path: "*",
    element: <ErrorStateTemplate title="404" message="Page Not Found" />,
  },
];
