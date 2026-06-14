import useUserContext from "../../../app/hooks/useUserContext";
import ErrorText from "../Feedback/ErrorText";

type Props = {
  amount: string;
  error?: string;
} & React.ComponentPropsWithoutRef<"input">;

const AmountInput = ({ amount, error = "", ...rest }: Props) => {
  const {
    state: {
      userData: {
        settings: { currency },
      },
    },
  } = useUserContext(); //just a nested way to destructure currency value from state directly

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center gap-2 overflow-hidden border-b-3 border-slate-300 pb-2 dark:border-zinc-600">
        <span className="dark:zinc text-xl font-semibold tracking-wide text-zinc-500">
          {currency}
        </span>
        <input
          type="text"
          placeholder="0"
          value={amount}
          className="text-4xl font-bold text-slate-800 outline-0 md:text-5xl dark:text-zinc-200"
          style={{
            width: `${Math.max(amount.length, 1)}ch`,
            caretColor: "#1e1e1e",
          }}
          {...rest}
        />
      </div>

      {/* error */}

      {error && <ErrorText error={error} />}
    </div>
  );
};

export default AmountInput;
