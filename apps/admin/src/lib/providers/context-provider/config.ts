import { createContext } from "react";
import type { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType | undefined>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_arg: AuthContextType["credentials"]) => null,
  logout: () => null,
  credentials: null,
});
