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
import React from "react";
import ErrorStateTemplate from "@/components/common/templates/error-state-template";
import { InstallerDashboardLayout } from "@/components/common/layout/installer-dashboard-layout";

export function ProtectedOutlet() {
  const { credentials } = useAuthContext();
  const { isPending, error } = useGetProfileQuery();

  return credentials?.token ? (
    <React.Fragment>
      <Outlet />
      <ActivityStateTemplate show={isPending && !error}>
        Loading
      </ActivityStateTemplate>
      <ComponentVisibility visible={!isPending && !!error}>
        <ErrorStateTemplate />
      </ComponentVisibility>
    </React.Fragment>
  ) : (
    <Navigate to={ROUTE_KEYS.SIGN_IN} />
  );
}

export function PublicOutlet() {
  const { credentials } = useAuthContext();
  const { data, isPending, error } = useGetProfileQuery();

  const redirectUrl = routeManager(data?.data?.user.role);

  return !credentials?.token ? (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  ) : (
    <React.Fragment>
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
      <ComponentVisibility visible={!isPending && !error}>
        <Navigate to={redirectUrl} />
      </ComponentVisibility>
      <ComponentVisibility visible={!isPending && !!error}>
        <ErrorStateTemplate />
      </ComponentVisibility>
    </React.Fragment>
  );
}

export function HomeOwnerProtectedOutlet() {
  const { data, isPending } = useGetProfileQuery();

  const userType = data?.data?.user.role;

  if (isPending)
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
  if (isPending)
    return (
      <ActivityStateTemplate show={isPending}>Loading</ActivityStateTemplate>
    );
  return userType === USER_TYPE.INSTALLER ? (
    <InstallerDashboardLayout />
  ) : (
    <p>Opps Page Not Found</p>
  );
}
