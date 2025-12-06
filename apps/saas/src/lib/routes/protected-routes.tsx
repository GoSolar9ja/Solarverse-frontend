import { RouteObject } from "react-router-dom";
import { ProtectedOutlet } from "./outlets";
import { ROUTE_KEYS } from "./routes-keys";
import homeOwnerRoutes from "./home-owner-routes";
import installerRoutes from "./installer-routes";
import { lazy } from "react";
const InstallerOnboardingForm = lazy(
  () => import("@/pages/installer-onboarding-form/step-one")
);
const InstallerOnboardingFormTwo = lazy(
  () => import("@/pages/installer-onboarding-form/step-two")
);
const InstallerOnboardingFormThree = lazy(
  () => import("@/pages/installer-onboarding-form/step-three")
);
const Usersoption = lazy(() => import("@/pages/shared-pages/auth/user-option"));

const HomeOwnerOnboardingForm = lazy(
  () => import("@/pages/home-owner/onboarding-form")
);

const sharedRoutes: RouteObject[] = [
  { path: ROUTE_KEYS.USER_OPTION, element: <Usersoption /> },
  {
    path: ROUTE_KEYS.HOME_OWNER_FORM,
    element: <HomeOwnerOnboardingForm />,
  },
  {
    path: ROUTE_KEYS.INSTALLER_FORM,
    element: <InstallerOnboardingForm />,
  },
  {
    path: ROUTE_KEYS.INSTALLER_FORM_TWO,
    element: <InstallerOnboardingFormTwo />,
  },
  {
    path: ROUTE_KEYS.INSTALLER_FORM_THREE,
    element: <InstallerOnboardingFormThree />,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedOutlet />,
    children: sharedRoutes.concat(homeOwnerRoutes).concat(installerRoutes),
  },
];

export default protectedRoutes;
