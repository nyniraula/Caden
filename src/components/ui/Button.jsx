import { mergeClass } from "../../lib/utils";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={mergeClass(
        "px-4 py-3 w-full bg-[#4f46e5] text-sm font-medium text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#6c65eb] active:bg-[#8346e5] transiton-all duration-200 hover:-translate-y-0.5 hover:scale-102",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
