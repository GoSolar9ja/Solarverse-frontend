import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
interface IRequestPasswordResetRequest {
  email: string;
}
const requestPasswordReset = async (data: IRequestPasswordResetRequest) => {
  const request = await axiosInstance.post<
    IRequestPasswordResetRequest,
    AxiosResponse<ApiResponseType<string>>
  >("/api/v1/auth/send-password-reset", data);
  return request.data;
};

const useRequestPasswordResetMutation = () => {
  return useMutation({
    mutationFn: requestPasswordReset,
  });
};

export default useRequestPasswordResetMutation;
