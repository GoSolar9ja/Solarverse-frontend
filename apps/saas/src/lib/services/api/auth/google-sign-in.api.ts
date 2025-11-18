import axiosInstance from "../../config/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { QueryKeys } from "../../config/query-keys";

type GoogleSignInResponse = HTMLElement;

const googleSignIn = async ({ queryKey }: { queryKey: [string] }) => {
  const url = queryKey[0];
  const request = await axiosInstance.get<
    void,
    AxiosResponse<GoogleSignInResponse>
  >(url);
  return request.data;
};

const useGoogleSignInQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.GOOGLE_SIGN_IN],
    queryFn: googleSignIn,
  });
};

export default useGoogleSignInQuery;
