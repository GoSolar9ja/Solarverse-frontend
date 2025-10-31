import { useAuthContext } from "../providers/context-provider/auth-provider";
import { Navigate, Outlet } from "react-router-dom";
import { USER_TYPE } from "../constants";
import { routeManager } from "../utils";
import { AdminDashboardLayout } from "@/components/common/layout/home-owner-dashboard-layout";

export function ProtectedOutlet() {
  const { credentials } = useAuthContext();
  return credentials?.token ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

export function PublicOutlet() {
  const { credentials } = useAuthContext();
  const userType = credentials?.userType;

  const redirectUrl = routeManager(userType);

  return !credentials?.token ? <Outlet /> : <Navigate to={redirectUrl} />;
}

export function HomeOwnerProtectedOutlet() {
  const { credentials } = useAuthContext();
  const userType = credentials?.userType;

  return userType === USER_TYPE.HOME_OWNER ? (
    <HomeOwnerDashboardLayout />
  
  ) : (
    <p>Opps Page not found</p>
  );
}

export function InstallerProtectedOutlet() {
  const { credentials } = useAuthContext();
  const userType = credentials?.userType;
  return userType === USER_TYPE.INSTALLER ? (
    <Outlet />
  ) : (
    <p>Opps Page Not Found</p>
  );
}
