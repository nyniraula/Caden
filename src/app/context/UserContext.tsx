import { createContext, type Dispatch } from "react";
import type { State, Action } from "./reducers/userReducer";

export type UserContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const UserContext = createContext<UserContextType | null>(null);
