import axiosInstance from "../../config/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";
import { USER_TYPE } from "@/lib/constants";

export interface IGetPastProjects {
  projects: Array<{
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
  }>;
  count: number;
}

export type InstallerPastProjectsResponse = ApiResponseType<IGetPastProjects>;

const installerPastProjects = async ({ queryKey }: { queryKey: [string] }) => {
  const url = queryKey[0];
  const request = await axiosInstance.get<
    void,
    AxiosResponse<InstallerPastProjectsResponse>
  >(url);
  return request.data;
};

const useInstallerPastProjectsQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.INSTALLER_PAST_PROJECTS],
    queryFn: installerPastProjects,
  });
};

export default useInstallerPastProjectsQuery;
