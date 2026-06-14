import type { ReactNode } from "react";
import ErrorText from "../Feedback/ErrorText";

type Props = {
  children: ReactNode;
  label?: string;
  error?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

const Textarea = ({ children, label = "", error = "", ...rest }: Props) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor=""
          className="text-xs font-semibold text-slate-900 md:text-sm dark:text-[#f8f8f8]"
        >
          {label}
        </label>
        <div className="flex items-center justify-start overflow-hidden rounded-lg border border-slate-400 bg-[#faf8ff] dark:border-zinc-700 dark:bg-zinc-900">
          {children && (
            <span className="bg-[#faf8ff] px-2 py-2 pr-0 dark:bg-zinc-900">
              {children}
            </span>
          )}
          <textarea
            className="h-18 w-full resize-none bg-[#faf8ff] px-4 py-2 text-sm outline-0 md:py-3 md:text-base dark:bg-zinc-900 dark:text-[#f8f8f8]"
            {...rest}
          ></textarea>
        </div>
      </div>

      {/* error */}
      {error && <ErrorText error={error} />}
    </div>
  );
};

export default Textarea;
