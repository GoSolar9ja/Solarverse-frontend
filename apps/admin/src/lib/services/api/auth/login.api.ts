import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: {
    id: string;
    email: string;
  };
  tokens: {
    access: string;
    refresh: string;
  };
}

const login = async (data: ILoginRequest) => {
  const request = await axiosInstance.post<
    ILoginRequest,
    AxiosResponse<ApiResponseType<ILoginResponse>>
  >("/api/v1/admin/login", data);
  return request.data;
};

const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
  });
};

export default useLoginMutation;
