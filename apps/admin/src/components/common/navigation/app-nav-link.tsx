import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { routeManager } from "@/lib/utils";
import { NavLink, NavLinkProps } from "react-router-dom";

export default function AppLink(props: NavLinkProps) {
  const { to, ...rest } = props;
  const { credentials } = useAuthContext();

  //TODO: Fetch Backend usertype and use here

  // The User type should be gotten from the backend so that the routing doesn't depend on the browser user type alone but primarily on the user type fetched from the backend. Because when a user alters the stored user type they can navigate to other user types.

  const fetchedUserType = credentials?.userType;

  return <NavLink to={routeManager(fetchedUserType) + to} {...rest} />;
}
