import { useAuthContext } from "../providers/context-provider/auth-provider";
import { Navigate, Outlet } from "react-router-dom";
import { USER_TYPE } from "../constants";
import { routeManager } from "../utils";
import { HomeOwnerDashboardLayout } from "@/components/common/layout/home-owner-dashboard-layout";
import useGetProfileQuery from "../services/api/auth/get-profile.api";
import { ROUTE_KEYS } from "./routes-keys";
import { ComponentVisibility } from "@solarverse/ui";
import ActivityStateTemplate from "@/components/common/templates/activity-state-template";
import AuthContainer from "@/components/auth/auth-container";

export function ProtectedOutlet() {
  const { credentials } = useAuthContext();
  const { isPending } = useGetProfileQuery();

  if (isPending)
    return (
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
    );
  return credentials?.token ? <Outlet /> : <Navigate to={ROUTE_KEYS.SIGN_IN} />;
}

export function PublicOutlet() {
  const { credentials } = useAuthContext();
  const { data, isPending } = useGetProfileQuery();

  const redirectUrl = routeManager(data?.data?.user.role);
  return !credentials?.token ? (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  ) : (
    <>
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
      <ComponentVisibility visible={!isPending}>
        <Navigate to={redirectUrl} />
      </ComponentVisibility>
    </>
  );
}

export function HomeOwnerProtectedOutlet() {
  const { data, isPending } = useGetProfileQuery();

  const userType = data?.data?.user.role;

  if (isPending || userType === USER_TYPE.USER)
    return (
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
    );
  return userType === USER_TYPE.HOME_OWNER ? (
    <HomeOwnerDashboardLayout />
  ) : (
    <p>Opps Page not found</p>
  );
}

export function InstallerProtectedOutlet() {
  const { data, isPending } = useGetProfileQuery();
  const userType = data?.data?.user.role;
  if (isPending || userType === USER_TYPE.USER)
    return (
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
    );
  return userType === USER_TYPE.INSTALLER ? (
    <Outlet />
  ) : (
    <p>Opps Page Not Found</p>
  );
}
