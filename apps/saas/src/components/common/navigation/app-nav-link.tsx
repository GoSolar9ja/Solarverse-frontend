// import useGetProfileQuery from "@/lib/services/api/auth/get-profile.api";
// import { routeManager } from "@/lib/utils";
import { NavLink, NavLinkProps } from "react-router-dom";

export default function AppLink(props: NavLinkProps) {
  const { to, ...rest } = props;

  //TODO: Fetch Backend usertype and use here

  // The User type should be gotten from the backend so that the routing doesn't depend on the browser user type alone but primarily on the user type fetched from the backend. Because when a user alters the stored user type they can navigate to other user types.

  // const { data } = useGetProfileQuery();
  // const fetchedUserType = data?.data?.user.role;

  return <NavLink to={to} {...rest} />;
}
