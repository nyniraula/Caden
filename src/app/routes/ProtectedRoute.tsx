import { Navigate, Outlet } from "react-router";
import useUserContext from "../hooks/useUserContext";

const ProtectedRoute = () => {
  const { state } = useUserContext();

  if (!state.currentUser) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
