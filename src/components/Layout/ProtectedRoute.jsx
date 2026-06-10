import { Navigate, Outlet } from 'react-router';
import useUserContext from '../../app/hooks/useUserContext';
import Sidebar from './Sidebar';

const ProtectedRoute = () => {
  const { state } = useUserContext();
  const { currentUser } = state;

  if (!currentUser) {
    return <Navigate to={'/login'} replace />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedRoute;
