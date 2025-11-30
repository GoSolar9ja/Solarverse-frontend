import axiosInstance from "../../config/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { USER_TYPE } from "@/lib/constants";
import { QueryKeys } from "../../config/query-keys";

export interface IUpdateProfileRequest {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  mobile: string;
  role: USER_TYPE;
  businessName?: string;
  cacRegistrationNumber?: string;
  address?: string;
  nin?: string;
}

export interface IUpdateProfileResponse {
  user: IUpdateProfileRequest;
}

const updateProfile = async (data: IUpdateProfileRequest) => {
  const request = await axiosInstance.put<
    IUpdateProfileRequest,
    AxiosResponse<ApiResponseType<IUpdateProfileResponse>>
  >("/api/v1/auth/update-user-profile", data);
  return request.data;
};

const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.PROFILE] });
    },
  });
};

export default useUpdateProfileMutation;
