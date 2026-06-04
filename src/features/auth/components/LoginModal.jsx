import { ArrowRight, User } from "lucide-react";
import CadenLogo from "../../../assets/Caden.svg";
import useAppContext from "../../../hooks/useAppContext";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginModal = () => {
  const { appSettings, setAppSettings } = useAppContext();

  const [userName, setUserName] = useState("");

  //Finally found a useCallback
  const handleAuth = () => {
    if (userName.trim()) {
      const updatedSettings = {
        ...appSettings,
        isAuthenticated: true,
        userName: userName,
      };

      setAppSettings(updatedSettings);
    }
  };

  return (
    <div className="max-w-100 flex flex-col justify-center items-center rounded-xl gap-4 p-6 md:p-10 shadow-lg relative overflow-hidden">
      {/* // corner blur */}
      <div className="w-1/2 aspect-square bg-[#e2dfff] rounded-full blur-3xl absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* logo */}
      <div className="flex flex-col justify-center items-center bg-purple-100/50 p-1 rounded-2xl">
        <img
          src={CadenLogo}
          alt=""
          width={"64px"}
          height={"64px"}
          className="w-14 md:w-16 aspect-square"
        />
      </div>

      {/* Welcome msg */}
      <div className="flex flex-col justify-center items-center w-full gap-2 md:gap-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 flex justify-center items-center">
          Welcome to Caden
        </h2>
        <p className="text-xs md:text-sm text-slate-600">
          Enter your name to access your dashboard.
        </p>
      </div>

      {/* input */}

      <Input
        value={userName}
        placeholder={"John Doe"}
        label={"Your Name"}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      >
        <User size={20} strokeWidth={1.3} color="#314158" />
      </Input>

      {/* btn */}
      <Button onClick={handleAuth}>
        Enter Dashboard
        <ArrowRight size={16} />
      </Button>

      {/* Slogan */}
      <p className="text-xs md:text-sm text-slate-500 mt-3">
        Less noise. More control.
      </p>
    </div>
  );
};

export default LoginModal;
