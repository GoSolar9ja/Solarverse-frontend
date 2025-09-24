import { USER_TYPE } from "../constants";

export interface AuthContextType {
  login: ({ token }: { token: string; userType: USER_TYPE }) => void;
  logout: () => void;
  credentials: {
    token: string;
    userType: USER_TYPE;
  } | null;
}
