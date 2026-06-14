import { Trash } from "lucide-react";
import useUserContext from "../../../app/hooks/useUserContext";
import { getCurrencySymbol } from "../../../lib/utils";

type Props = {
  id: string;
  category: string;
  date: string;
  note: string;
  amount: number;
  type: "income" | "expense";
  btn?: boolean;
};

const TransactionCard = ({
  id,
  category,
  date,
  note,
  amount,
  type,
  btn = true,
}: Props) => {
  const {
    state: {
      userData: {
        settings: { currency },
      },
    },
    dispatch,
  } = useUserContext(); //just a nested way to destructure currency value from state directly

  const currencySymbol = getCurrencySymbol(currency);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    //   {/* item */}
    <div
      className="group flex w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-400 p-2 dark:border-zinc-500"
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      {/* date, category, note */}
      <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
        {/* category, date */}
        <div className="flex flex-col flex-wrap items-start justify-center">
          <h5 className="text-base text-zinc-900">{category}</h5>
          <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            {formattedDate}
          </p>
        </div>

        <div>
          <p className="max-w-[15ch] truncate text-sm">{note}</p>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4">
        {/* amount */}
        <div>
          <h6>
            {type.toLowerCase() === "income" ? (
              <span className="text-sm font-semibold text-green-500">
                + {currencySymbol} {amount}
              </span>
            ) : (
              <span className="text-sm font-semibold text-red-500">
                - {currencySymbol} {amount}
              </span>
            )}
          </h6>
        </div>

        {/* delete btn */}
        {btn && (
          <button
            className="rounded-full bg-red-500/10 p-1 transition-all duration-300 group-hover:block group-focus:block lg:hidden"
            onClick={() => {
              dispatch({ type: "DEL_TXN", id: id });
            }}
          >
            <Trash size={18} strokeWidth={1.3} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
