import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

export interface IActivateAccountRequest {
  token: string;
}

const activateAccount = async (data: IActivateAccountRequest) => {
  const request = await axiosInstance.post<
    IActivateAccountRequest,
    AxiosResponse<ApiResponseType<{ success: boolean; message: string }>>
  >("/api/v1/auth/activate-account", data);
  return request.data;
};

const useActivateAccountMutation = () => {
  return useMutation({
    mutationFn: activateAccount,
  });
};

export default useActivateAccountMutation;
