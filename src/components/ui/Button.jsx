const Button = ({ children, ...rest }) => {
  return (
    <button
      className="px-4 py-3 w-full bg-[#4f46e5] text-sm font-medium text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#6c65eb] active:bg-[#8346e5] transiton-all duration-200 hover:-translate-y-0.5 hover:scale-102"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
