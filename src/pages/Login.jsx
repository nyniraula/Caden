import AppProvider from '../context/AppProvider';
import LoginModal from '../features/auth/components/LoginModal';

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-start bg-linear-to-br from-white to-[#e6ebfc] px-2">
      <AppProvider>
        <LoginModal />
      </AppProvider>
    </div>
  );
};

export default Login;
