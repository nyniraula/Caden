import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import ErrorText from './ErrorText';
import { mergeClass } from '../../lib/utils';

const SelectDropdown = ({
  children,
  label,
  categoryValue,
  setCategoryValue = null,
  dispatchX = null,
  categories = [],
  error = false,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={mergeClass('w-full', className)}>
      <div className="relative flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor=""
            className="text-xs font-semibold text-slate-900 md:text-sm dark:text-[#f8f8f8]"
          >
            {label}
          </label>
        )}
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-lg border border-slate-400 bg-[#faf8ff] px-4 py-2 text-sm outline-0 md:py-3 md:text-base dark:border-zinc-700 dark:bg-zinc-900 ${isDropdownOpen ? 'rounded-b-none' : ''} ${categoryValue ? 'text-slate-900 dark:text-[#f8f8f8]' : 'text-[#7d7c7f]'}`}
          onClick={() => {
            setIsDropdownOpen((prev) => !prev);
          }}
        >
          {categoryValue ? categoryValue : children}
          {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full z-10 mt-1 flex max-h-42 w-full flex-col overflow-y-auto rounded-b-lg border border-slate-400 bg-[#faf8ff] text-sm text-[#7d7c7f] outline-0 transition-all duration-300 md:mt-2 md:max-h-52 md:text-base dark:bg-zinc-900 dark:text-[#f8f8f8]">
            {categories.map((el, idx) => {
              return (
                <button
                  type="button"
                  className="flex w-full items-center border-b border-slate-300 px-4 py-2 text-sm text-slate-700 last:border-b-0 hover:bg-[#dedce2] active:bg-[#dedce2] md:py-3 dark:text-[#f8f8f8]"
                  key={el}
                  onClick={() => {
                    if (dispatchX) {
                      dispatchX(categories[idx]);
                    } else {
                      setCategoryValue(categories[idx]);
                    }
                    setIsDropdownOpen(false);
                  }}
                >
                  {el}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* error */}
      {error && <ErrorText error={error} />}
    </div>
  );
};

export default SelectDropdown;
