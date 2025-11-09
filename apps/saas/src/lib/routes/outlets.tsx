import { useAuthContext } from "../providers/context-provider/auth-provider";
import { Navigate, Outlet } from "react-router-dom";
import { USER_TYPE } from "../constants";
import { routeManager } from "../utils";
import { HomeOwnerDashboardLayout } from "@/components/common/layout/home-owner-dashboard-layout";
import useGetProfileQuery from "../services/api/auth/get-profile.api";

export function ProtectedOutlet() {
  const { credentials } = useAuthContext();
  return credentials?.token ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

export function PublicOutlet() {
  const { credentials } = useAuthContext();
  const { data } = useGetProfileQuery();

  const redirectUrl = routeManager(data?.data?.user.role);

  return !credentials?.token ? <Outlet /> : <Navigate to={redirectUrl} />;
}

export function HomeOwnerProtectedOutlet() {
  const { data } = useGetProfileQuery();

  const userType = data?.data?.user.role;

  return userType === USER_TYPE.HOME_OWNER ? (
    <HomeOwnerDashboardLayout />
  ) : (
    <p>Opps Page not found</p>
  );
}

export function InstallerProtectedOutlet() {
  const { data } = useGetProfileQuery();
  const userType = data?.data?.user.role;
  return userType === USER_TYPE.INSTALLER ? (
    <Outlet />
  ) : (
    <p>Opps Page Not Found</p>
  );
}
