import axiosInstance from "../../config/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";

const cacDocumentUpload = async (data: FormData) => {
  const request = await axiosInstance.post<
    FormData,
    AxiosResponse<ApiResponseType>
  >("/api/v1/files/cac-certificate", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return request.data;
};

const useCacDocumentUploadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cacDocumentUpload,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.BUSINESS_PROFILE] });
    },
  });
};

export default useCacDocumentUploadMutation;
