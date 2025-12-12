import axiosInstance from "../../config/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";
import { USER_TYPE } from "@/lib/constants";

export interface IProjectUploadStatusResponse {
  jobId: string;
  status: "completed" | "failed" | "processing";
  result?: {
    project: {
      id: number;
      installerId: number;
      projectLocation: string;
      energyConsumptionPreference: string;
      photoUrl: string;
      caption: string;
      createdAt: string;
      updatedAt: string;
      installer: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        mobile: string;
        gender: string;
        isVerified: boolean;
        profilePictureUrl: string;
        createdAt: string;
        roles: Array<{
          role: USER_TYPE;
          assignedAt: string;
        }>;
      };
    };
    urls: string[];
    files: Array<{
      url: string;
      filename: string;
      size: number;
      mimetype: string;
    }>;
  };
  error?: string;
  createdAt: string;
  completedAt?: string;
}

type ProjectUploadStatusResponse =
  ApiResponseType<IProjectUploadStatusResponse>;

const projectUploadStatus = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const url = queryKey[0];
  const jobId = queryKey[1];
  const request = await axiosInstance.get<
    void,
    AxiosResponse<ProjectUploadStatusResponse>
  >(url + "/" + jobId);
  return request.data;
};

const useProjectUploadStatusQuery = (jobId: string) => {
  return {
    ...useQuery({
      queryKey: [QueryKeys.GET_UPLOAD_STATUS, jobId],
      queryFn: projectUploadStatus,
    }),
  };
};

export default useProjectUploadStatusQuery;
