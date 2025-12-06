import { useContext, useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./config";
import { useQueryClient } from "@tanstack/react-query";
import {
  clearLocalStorage,
  getFromLocalStorage,
  storeToLocalStorage,
} from "@/lib/utils/local-storage";
import type { AuthContextType } from "../types";
import { STORAGE_KEYS, USER_TYPE } from "@/lib/constants";
import axiosInstance from "@/lib/services/config/axios-instance";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Retrieve token from browser local storage
  const retrievedTokenFromLS = getFromLocalStorage(STORAGE_KEYS.GOSOLAR_TOKEN);

  const retrievedUserTypeFromLS = getFromLocalStorage(
    STORAGE_KEYS.GOSOLAR_USER
  );

  const queryClient = useQueryClient();

  const [credentials, setCredentials] = useState<
    AuthContextType["credentials"]
  >({
    token: retrievedTokenFromLS,
    userType: retrievedUserTypeFromLS,
  });

  useEffect(() => {
    if (retrievedTokenFromLS) {
      setCredentials({
        token: retrievedTokenFromLS,
        userType: retrievedUserTypeFromLS,
      });
    }
  }, []);

  const login = ({
    token,
    userType,
  }: {
    token: string;
    userType: USER_TYPE;
  }) => {
    storeToLocalStorage({ key: STORAGE_KEYS.GOSOLAR_TOKEN, value: token });
    storeToLocalStorage({ key: STORAGE_KEYS.GOSOLAR_USER, value: userType });
    setCredentials({ token, userType });
  };

  const logout = () => {
    clearLocalStorage();
    axiosInstance.defaults.headers.common["Authorization"] = "";
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ credentials, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext(): AuthContextType {
  return useContext(AuthContext) as AuthContextType;
}
