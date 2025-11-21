import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { ILoginRequest } from "./login.api";

interface ISignupResponse {
  result: string;
}

const register = async (data: ILoginRequest) => {
  const request = await axiosInstance.post<
    ILoginRequest,
    AxiosResponse<ApiResponseType<ISignupResponse>>
  >("/api/v1/auth/register", data);
  return request.data;
};

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
  });
};

export default useRegisterMutation;
