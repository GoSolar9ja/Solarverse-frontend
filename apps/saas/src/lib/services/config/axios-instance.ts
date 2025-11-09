import { STORAGE_KEYS } from "@/lib/constants";
import { getFromLocalStorage } from "@/lib/utils/local-storage";
import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = getFromLocalStorage(STORAGE_KEYS.GOSOLAR_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
