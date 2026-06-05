const Input = ({ children, label = "input field", ...rest }) => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <label
        htmlFor=""
        className="text-xs md:text-sm font-semibold text-slate-900"
      >
        {label}
      </label>
      <div className="flex justify-start items-center border rounded-lg border-slate-400 bg-[#faf8ff] overflow-hidden">
        {children && (
          <span className="px-2 pr-0 py-2  bg-[#faf8ff]">{children}</span>
        )}
        <input
          type="text"
          className="px-4 py-2 md:py-3 w-full text-sm md:text-base bg-[#faf8ff] outline-0"
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
