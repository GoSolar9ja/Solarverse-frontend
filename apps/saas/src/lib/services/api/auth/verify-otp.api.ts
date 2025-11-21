import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

export interface IverifyOtpRequest {
  mobile: string;
  otp: string;
}

const verifyOtp = async (data: IverifyOtpRequest) => {
  const request = await axiosInstance.post<
    IverifyOtpRequest,
    AxiosResponse<ApiResponseType<{ success: boolean; message: string }>>
  >("/api/v1/auth/verify-otp", data);
  return request.data;
};

const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};

export default useVerifyOtpMutation;
