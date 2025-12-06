import { useAuthContext } from "../providers/context-provider/auth-provider";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_KEYS } from "./routes-keys";

export function ProtectedOutlet() {
  const { credentials } = useAuthContext();
  return credentials?.token ? <Outlet /> : <Navigate to={ROUTE_KEYS.SIGN_IN} />;
}

export function PublicOutlet() {
  const { credentials } = useAuthContext();

  return !credentials?.token ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE_KEYS.OVERVIEW} />
  );
}
