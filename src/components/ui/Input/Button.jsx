import { mergeClass } from '../../../lib/utils';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={mergeClass(
        'transiton-all flex cursor-pointer flex-nowrap items-center justify-center gap-2 rounded-lg bg-[#4f46e5] px-4 py-3 text-sm font-medium whitespace-nowrap text-[#f8f8f8] duration-200 hover:-translate-y-0.5 hover:scale-102 hover:bg-[#6c65eb] active:bg-[#8346e5]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
