import axiosInstance from "../../config/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, isAxiosError } from "axios";
import { ApiResponseType } from "@/types";

const pastProjectUpload = async (data: FormData) => {
  try {
    const request = await axiosInstance.post<
      FormData,
      AxiosResponse<ApiResponseType>
    >("/api/v1/files/installer-past-projects", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return request.data;
  } catch (e) {
    if (isAxiosError(e)) {
      return e.message;
    }
    return e;
  }
};

const usePastProjectUploadMutation = () => {
  return useMutation({
    mutationFn: pastProjectUpload,
  });
};

export default usePastProjectUploadMutation;
