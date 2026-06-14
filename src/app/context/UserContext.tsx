import { createContext } from "react";
import type { UserData } from "./reducers/userReducer";

export type UserContextType = {
  currentUser: string | null;
  userData: UserData;
};

export const UserContext = createContext<UserContextType | null>(null);
