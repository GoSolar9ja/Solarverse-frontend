import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

export interface IRequestOtpRequest {
  mobileNumber: string;
}

const requestOtp = async (data: IRequestOtpRequest) => {
  const request = await axiosInstance.post<
    IRequestOtpRequest,
    AxiosResponse<ApiResponseType<{ success: boolean; message: string }>>
  >("/api/v1/auth/request-otp", undefined, {
    params: {
      mobileNumber: data.mobileNumber,
    },
  });
  return request.data;
};

const useRequestOtpMutation = () => {
  return useMutation({
    mutationFn: requestOtp,
  });
};

export default useRequestOtpMutation;
