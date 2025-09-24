import { lazy } from "react";
import { PublicOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import { RouteObject } from "react-router-dom";
const Signin = lazy(() => import("@/pages/shared-pages/auth/sign-in"));
const Signup = lazy(() => import("@/pages/shared-pages/auth/sign-up"));
const Usersoption = lazy(() => import("@/pages/shared-pages/auth/user-option"));
const Forgotpassword = lazy(
  () => import("@/pages/shared-pages/auth/forgot-password")
);
const Components = lazy(() => import("@/pages/components"));
const Resetpassword = lazy(
  () => import("@/pages/shared-pages/auth/reset-password")
);
const HomeOwnerOnboardingForm = lazy(
  () => import("@/pages/home-owner/onboarding-form")
);



const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicOutlet />,
    children: [
      { path: ROUTE_KEYS.SIGN_IN, element: <Signin />},
      { path: ROUTE_KEYS.SIGN_UP, element: <Signup /> },
      { path: ROUTE_KEYS.USER_OPTION, element: <Usersoption /> },
      { path: ROUTE_KEYS.FORGOT_PASSWORD, element: <Forgotpassword /> },
      { path: ROUTE_KEYS.COMPONENTS, element: <Components /> },
      { path: ROUTE_KEYS.RESET_PASSWORD, element: <Resetpassword /> },
      {
        path: ROUTE_KEYS.HOME_OWNER_FORM,
        element: <HomeOwnerOnboardingForm />,
      },
      {
        path: ROUTE_KEYS.INSTALLER_FORM,
        element: <p>INStaller Form</p>,
      },
    ],
  },
];

export default publicRoutes;
