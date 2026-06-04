import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppContext = () => {
  const data = useContext(AppContext);

  if (!data) {
    throw new Error("useAppContext must be used within a wrapped Provider.");
  }

  return data;
};

export default useAppContext;
