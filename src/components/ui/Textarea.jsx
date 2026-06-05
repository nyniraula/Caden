const Textarea = ({ children, label = 'input field', ...rest }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor=""
        className="text-xs font-semibold text-slate-900 md:text-sm"
      >
        {label}
      </label>
      <div className="flex items-center justify-start overflow-hidden rounded-lg border border-slate-400 bg-[#faf8ff]">
        {children && (
          <span className="bg-[#faf8ff] px-2 py-2 pr-0">{children}</span>
        )}
        <textarea
          className="h-18 w-full resize-none bg-[#faf8ff] px-4 py-2 text-sm outline-0 md:py-3 md:text-base"
          {...rest}
        ></textarea>
      </div>
    </div>
  );
};

export default Textarea;
