import axiosInstance from "../../config/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";
interface IPastProjectUploadResponse {
  message: string;
  jobId: string;
  fileCount: number;
  status: string;
}
const pastProjectUpload = async (data: FormData) => {
  const request = await axiosInstance.post<
    FormData,
    AxiosResponse<ApiResponseType<IPastProjectUploadResponse>>
  >("/api/v1/files/installer-past-projects", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return request.data;
};

const usePastProjectUploadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: pastProjectUpload,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.INSTALLER_PAST_PROJECTS],
      });
    },
  });
};

export default usePastProjectUploadMutation;
