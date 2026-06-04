import AppProvider from "../context/AppProvider";
import LoginModal from "../features/auth/components/LoginModal";

const Login = () => {
  return (
    <div className="h-screen w-full px-2 flex justify-center items-center bg-linear-to-br from-white to-[#e6ebfc]  ">
      <AppProvider>
        <LoginModal />
      </AppProvider>
    </div>
  );
};

export default Login;
