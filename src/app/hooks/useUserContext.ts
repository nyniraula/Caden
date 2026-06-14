import { useContext } from "react";
import { UserContext, type UserContextType } from "../context/UserContext";

const useUserContext = (): UserContextType => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error("userContext must be called within wrapped children");
  }

  return data;
};

export default useUserContext;
