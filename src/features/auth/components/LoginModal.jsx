import { ArrowRight, User } from "lucide-react";
import CadenLogo from "../../../assets/Caden.svg";

const LoginModal = () => {
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
      <div className="w-full flex flex-col gap-2 ">
        <label
          htmlFor=""
          className="text-xs md:text-sm font-semibold text-slate-900"
        >
          Your Name
        </label>
        <div className="flex justify-start items-center border rounded-lg border-slate-400 bg-[#faf8ff] overflow-hidden">
          <span className="px-2 pr-0 py-2  bg-[#faf8ff]">
            <User size={20} strokeWidth={1.3} color="#314158" />
          </span>
          <input
            type="text"
            placeholder="John Doe"
            className="px-4 py-2 md:py-3 w-full text-sm md:text-base bg-[#faf8ff] outline-0"
          />
        </div>
      </div>

      {/* btn */}
      <button className="px-4 py-3 w-full bg-[#4f46e5] text-sm font-medium text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#6c65eb] active:bg-[#8346e5] transiton-all duration-200">
        Enter Dashboard
        <ArrowRight size={16} />
      </button>

      {/* Slogan */}
      <p className="text-xs md:text-sm text-slate-500 mt-3">
        Less noise. More control.
      </p>
    </div>
  );
};

export default LoginModal;
