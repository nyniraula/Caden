import { ArrowRight, User } from "lucide-react";
import CadenLogo from "../../../assets/Caden.svg";
import { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import useUserContext from "../../../app/hooks/useUserContext";
import { useNavigate } from "react-router";

const LoginModal = () => {
  const { dispatch } = useUserContext();

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  //Finally found a useCallback
  const handleAuth = () => {
    if (userName.trim()) {
      dispatch({ type: "SET_CURR_USER", newCurrentUser: userName });
      navigate("/");
    }
  };

  return (
    <div className="relative flex max-w-100 flex-col items-center justify-center gap-4 overflow-hidden rounded-xl p-6 shadow-lg md:p-10 dark:bg-zinc-800">
      {/* // corner blur */}
      <div className="absolute top-0 right-0 z-0 aspect-square w-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2dfff] blur-3xl"></div>

      {/* logo */}
      <div className="dark flex flex-col items-center justify-center rounded-2xl bg-purple-100/50 p-1">
        <img
          src={CadenLogo}
          alt=""
          width={"64px"}
          height={"64px"}
          className="aspect-square w-14 md:w-16"
        />
      </div>

      {/* Welcome msg */}
      <div className="flex w-full flex-col items-center justify-center gap-2 md:gap-3">
        <h2 className="flex items-center justify-center text-3xl font-semibold text-slate-900 md:text-4xl">
          Welcome to Caden
        </h2>
        <p className="text-xs text-slate-600 md:text-sm">
          Enter your name to access your dashboard.
        </p>
      </div>

      {/* input */}

      <Input
        className={"dark:"}
        value={userName}
        placeholder={"John Doe"}
        label={"Your Name"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(event.target.value);
        }}
      >
        <User size={20} strokeWidth={1.3} color="#314158" />
      </Input>

      {/* btn */}
      <Button onClick={handleAuth} className={"w-full"}>
        Enter Dashboard
        <ArrowRight size={16} />
      </Button>

      {/* Slogan */}
      <p className="mt-3 text-xs text-slate-500 md:text-sm">
        Less noise. More control.
      </p>
    </div>
  );
};

export default LoginModal;
