import { STORAGE_KEYS } from "@/lib/constants";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/lib/utils/local-storage";
import axios from "axios";

export const baseURL = "/";

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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Clear the token
      removeFromLocalStorage("token");
      // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
