import { Trash } from "lucide-react";
import useUserContext from "../../../app/hooks/useUserContext";
import { CurrencySymbols } from "../../../constants/currency";

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

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const isIncome = type.toLowerCase() === "income";

  return (
    //   {/* item */}
    <div
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
      onContextMenu={(event) => event.preventDefault()}
    >
      {/* LEFT SIDE */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {/* top row */}
        <div className="flex items-center gap-3">
          <h5 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {category}
          </h5>

          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </span>
        </div>

        {/* note */}
        <p className="max-w-[40ch] truncate text-sm text-zinc-600 dark:text-zinc-400">
          {note}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* amount */}
        <div className="text-right">
          <span
            className={`text-sm font-semibold ${
              isIncome ? "text-green-500" : "text-red-500"
            }`}
          >
            {isIncome ? "+" : "-"} {CurrencySymbols[currency]} {amount}
          </span>
        </div>

        {/* delete */}
        {btn && (
          <button
            className="rounded-full bg-red-500/10 p-2 text-red-500 opacity-0 transition-all duration-200 group-hover:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:bg-red-500/20 active:scale-95"
            onClick={() => {
              dispatch({ type: "DEL_TXN", id: id });
            }}
          >
            <Trash size={18} strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
