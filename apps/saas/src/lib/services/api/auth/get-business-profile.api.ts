import axiosInstance from "../../config/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponseType } from "@/types";
import { QueryKeys } from "../../config/query-keys";

export interface IBusinessUserProfile {
  business: {
    id: string;
    userId: string;
    name: string;
    cacRegistrationNumber: string | null;
    cacCertificateUrl: string | null;
    businessCertificateUrl: string | null;
    certificationLicenseUrls: string[] | null;
    businessLogoUrl: string | null;
    address: string | null;
    contactEmail: string | null;
    createdAt: string;
    updatedAt: string;
  };
}
type GetBusinessProfileResponse = ApiResponseType<IBusinessUserProfile>;

const getBusinessProfile = async ({ queryKey }: { queryKey: [string] }) => {
  const url = queryKey[0];
  const request = await axiosInstance.get<
    void,
    AxiosResponse<GetBusinessProfileResponse>
  >(url);
  return request.data;
};

const useGetBusinessProfileQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.BUSINESS_PROFILE],
    queryFn: getBusinessProfile,
  });
};

export default useGetBusinessProfileQuery;
