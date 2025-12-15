import axiosInstance from "../../config/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";
import { InstallerPastProjectsResponse } from "./get-past-projects.api";
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
      queryClient.setQueryData(
        [QueryKeys.INSTALLER_PAST_PROJECTS],
        (oldData: InstallerPastProjectsResponse) => ({
          ...oldData,
          data: {
            ...oldData?.data,
            count: (oldData?.data?.count || 0) + 1,
          },
        })
      );
    },
  });
};

export default usePastProjectUploadMutation;
