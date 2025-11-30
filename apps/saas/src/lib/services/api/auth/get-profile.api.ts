import axiosInstance from "../../config/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";
import { STORAGE_KEYS, USER_TYPE } from "@/lib/constants";

export interface IUserProfile {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    mobile: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    roles: Array<{
      role: USER_TYPE;
      assignedAt: string;
    }>;
    role: USER_TYPE;
  };
}

type GetProfileResponse = ApiResponseType<IUserProfile>;

const getProfile = async ({ queryKey }: { queryKey: [string] }) => {
  const url = queryKey[0];
  const request = await axiosInstance.get<
    void,
    AxiosResponse<GetProfileResponse>
  >(url);
  return request.data;
};

const useGetProfileQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.PROFILE],
    queryFn: getProfile,
    enabled: !!localStorage.getItem(STORAGE_KEYS.GOSOLAR_TOKEN),
  });
};

export default useGetProfileQuery;
