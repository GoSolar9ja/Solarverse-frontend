import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";

const businessDocumentUpload = async (data: FormData) => {
  const request = await axiosInstance.post<
    FormData,
    AxiosResponse<ApiResponseType>
  >("/api/v1/files/business-document", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return request.data;
};

const useBusinessDocumentUploadMutation = () => {
  return useMutation({
    mutationFn: businessDocumentUpload,
  });
};

export default useBusinessDocumentUploadMutation;
