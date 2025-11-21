import { lazy } from "react";
import { PublicOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import { RouteObject } from "react-router-dom";

const Signin = lazy(() => import("@/pages/shared-pages/auth/sign-in"));
const Signup = lazy(() => import("@/pages/shared-pages/auth/sign-up"));
const Forgotpassword = lazy(
  () => import("@/pages/shared-pages/auth/forgot-password")
);
const Components = lazy(() => import("@/pages/components"));
const Resetpassword = lazy(
  () => import("@/pages/shared-pages/auth/reset-password")
);
const SuccessfulGoogleAuth = lazy(
  () => import("@/pages/shared-pages/auth/successful-google-auth")
);
const FailedGoogleAuth = lazy(
  () => import("@/pages/shared-pages/auth/failed-google-auth")
);
const AccountActivation = lazy(
  () => import("@/pages/shared-pages/auth/account-activation")
);

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicOutlet />,
    children: [
      { element: <Signin />, index: true },
      { path: ROUTE_KEYS.SIGN_IN, element: <Signin /> },
      {
        path: ROUTE_KEYS.SUCCESSFUL_GOOGLE_AUTH,
        element: <SuccessfulGoogleAuth />,
      },
      { path: ROUTE_KEYS.FAILED_GOOGLE_AUTH, element: <FailedGoogleAuth /> },
      { path: ROUTE_KEYS.SIGN_UP, element: <Signup /> },
      { path: ROUTE_KEYS.ACCOUNT_ACTIVATION, element: <AccountActivation /> },
      { path: ROUTE_KEYS.FORGOT_PASSWORD, element: <Forgotpassword /> },
      { path: ROUTE_KEYS.COMPONENTS, element: <Components /> },
      { path: ROUTE_KEYS.RESET_PASSWORD, element: <Resetpassword /> },
    ],
  },
];

export default publicRoutes;
