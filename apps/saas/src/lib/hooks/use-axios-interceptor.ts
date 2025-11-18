import { toast } from "sonner";
import { useAuthContext } from "../providers/context-provider/auth-provider";
import axiosInstance from "../services/config/axios-instance";
import { useEffect } from "react";
import { getFromLocalStorage } from "../utils/local-storage";
import { STORAGE_KEYS } from "../constants";
import { errorToast } from "@solarverse/ui";
import { AxiosError } from "axios";

const useAxiosInterceptor = () => {
  const { logout } = useAuthContext() || {};

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Logout user if token is expired
        if (error.response?.status === 401) {
          const token = getFromLocalStorage(STORAGE_KEYS.GOSOLAR_TOKEN);
          if (token) {
            logout?.();
            console.log("Log User out");
          }
        }

        if (error.response?.status !== 200) {
          console.log("interceptor", error.response?.data);

          // Handle Nework error
          if (error.code === AxiosError.ERR_NETWORK)
            return errorToast("There's a network error");

          // Handle api error
          const errorMessage =
            error.response?.data.message ||
            error.response?.data.data?.message ||
            error.response?.data?.detail ||
            "Opps an error occured";
          if (errorMessage) {
            toast.error(errorMessage);
          }
        }

        return Promise.reject(error);
      }
    );
    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, []);
};

export default useAxiosInterceptor;
