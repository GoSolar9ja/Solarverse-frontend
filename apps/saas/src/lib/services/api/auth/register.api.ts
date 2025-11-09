import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { ILoginRequest, ILoginResponse } from "./login.api";

const register = async (data: ILoginRequest) => {
  const request = await axiosInstance.post<
    ILoginRequest,
    AxiosResponse<ApiResponseType<ILoginResponse>>
  >("/api/v1/auth/register", data);
  return request.data;
};

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
  });
};

export default useRegisterMutation;
