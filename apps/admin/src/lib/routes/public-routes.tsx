import { lazy } from "react";
import { PublicOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import { RouteObject } from "react-router-dom";
const Signin = lazy(() => import("@/pages/auth-page/auth/sign-in"));
const Resetpassword = lazy(
  () => import("@/pages/auth-page/auth/reset-password")
);
// const HomeOwnerOnboardingForm = lazy(
//   () => import("@/pages/home-owner/onboarding-form")
// );

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicOutlet />,
    children: [
      { path: ROUTE_KEYS.SIGN_IN, element: <Signin />, index: true },
      { path: ROUTE_KEYS.SIGN_IN, element: <Signin /> },
      { path: ROUTE_KEYS.RESET_PASSWORD, element: <Resetpassword /> },
      // {
      //   path: ROUTE_KEYS.HOME_OWNER_FORM,
      //   element: <HomeOwnerOnboardingForm />,
      // },
    ],
  },
];

export default publicRoutes;
