import { mergeClass } from '../../lib/utils';
import ErrorText from './ErrorText';

const Input = ({
  children,
  label,
  type = 'text',
  error = false,
  className,
  ...rest
}) => {
  return (
    <div className={mergeClass('w-full', className)}>
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor=""
            className="text-xs font-semibold text-slate-900 md:text-sm"
          >
            {label}
          </label>
        )}
        <div className="flex items-center justify-start overflow-hidden rounded-lg border border-slate-400 bg-[#faf8ff]">
          {children && (
            <span className="bg-[#faf8ff] px-2 py-2 pr-0">{children}</span>
          )}
          <input
            type={type}
            className="w-full bg-[#faf8ff] px-4 py-2 text-sm outline-0 md:py-3 md:text-base"
            {...rest}
          />
        </div>
      </div>

      {/* error */}
      {error && <ErrorText error={error} />}
    </div>
  );
};

export default Input;
