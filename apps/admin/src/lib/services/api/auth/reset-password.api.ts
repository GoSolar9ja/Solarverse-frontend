import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
interface IResetPasswordRequest {
  token: string;
  newPassword: string;
}
const resetPassword = async (data: IResetPasswordRequest) => {
  const request = await axiosInstance.put<
    IResetPasswordRequest,
    AxiosResponse<ApiResponseType<string>>
  >("/api/v1/auth/reset-password", data);
  return request.data;
};

const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};

export default useResetPasswordMutation;
