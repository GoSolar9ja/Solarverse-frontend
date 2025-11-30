import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

const businessLogoUpload = async (data: FormData) => {
  const request = await axiosInstance.post<
    FormData,
    AxiosResponse<ApiResponseType>
  >("/api/v1/files/business-logo", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return request.data;
};

const useBusinessLogoUploadMutation = () => {
  return useMutation({
    mutationFn: businessLogoUpload,
  });
};

export default useBusinessLogoUploadMutation;
