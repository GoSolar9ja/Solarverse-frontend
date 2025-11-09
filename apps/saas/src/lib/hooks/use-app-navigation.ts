import { useNavigate } from "react-router-dom";
import { routeManager } from "../utils";
import useGetProfileQuery from "../services/api/auth/get-profile.api";

export default function useAppNavigation() {
  //TODO: Fetch Backend usertype and use here and take

  // The User type should be gotten from the backend so that the routing doesn't depend on the browser user type alone but primarily on the user type fetched from the backend. Because when a user alters the stored user type they can navigate to other user types.
  const { data } = useGetProfileQuery();
  const fetchedUserType = data?.data?.user.role;

  const navigate = useNavigate();
  const handleNavigate = (to: string) => {
    navigate(routeManager(fetchedUserType) + to);
  };

  return handleNavigate;
}
