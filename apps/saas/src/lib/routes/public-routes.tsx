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
const GoogleSignIn = lazy(
  () => import("@/pages/shared-pages/auth/google-sign-in")
);

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicOutlet />,
    children: [
      { element: <Signin />, index: true },
      { path: ROUTE_KEYS.SIGN_IN, element: <Signin /> },
      { path: ROUTE_KEYS.GOOGLE_SIGN_IN, element: <GoogleSignIn /> },
      { path: ROUTE_KEYS.SIGN_UP, element: <Signup /> },
      { path: ROUTE_KEYS.FORGOT_PASSWORD, element: <Forgotpassword /> },
      { path: ROUTE_KEYS.COMPONENTS, element: <Components /> },
      { path: ROUTE_KEYS.RESET_PASSWORD, element: <Resetpassword /> },
    ],
  },
];

export default publicRoutes;
