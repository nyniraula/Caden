import { useReducer, type ReactNode } from "react";
import { UserContext } from "../context/UserContext";
import { initialState, userReducer } from "../context/reducers/userReducer";
import { useEffect } from "react";
import { setStorage } from "../../lib/localStorage";

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const { currentUser, userData } = state;

    // auth persistence
    setStorage("currentUser", currentUser);

    // user data persistence
    if (!currentUser) return;

    setStorage(currentUser, userData);
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
