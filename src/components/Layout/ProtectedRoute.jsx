import { Navigate, Outlet } from 'react-router';
import useAppContext from '../../hooks/useAppContext';

const ProtectedRoute = () => {
  const { appSettings } = useAppContext();

  if (!appSettings.userName) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
