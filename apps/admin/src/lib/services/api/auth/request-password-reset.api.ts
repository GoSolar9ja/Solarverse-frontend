import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { USER_TYPE } from "@/lib/constants";
interface IRequestPasswordResetRequest {
  email: string;
  role: USER_TYPE;
}
const requestPasswordReset = async (data: IRequestPasswordResetRequest) => {
  const request = await axiosInstance.post<
    IRequestPasswordResetRequest,
    AxiosResponse<ApiResponseType<string>>
  >("/api/v1/auth/request-reset-password", data);
  return request.data;
};

const useRequestPasswordResetMutation = () => {
  return useMutation({
    mutationFn: requestPasswordReset,
  });
};

export default useRequestPasswordResetMutation;
