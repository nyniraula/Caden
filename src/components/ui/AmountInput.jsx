const AmountInput = ({ currency = 'USD', amount, ...rest }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2 overflow-hidden border-b-3 border-slate-300 pb-2">
      <span className="text-xl font-semibold tracking-wide text-slate-500">
        {currency}
      </span>
      <input
        type="text"
        placeholder="0"
        value={amount}
        className="text-4xl font-bold text-slate-800 outline-0 md:text-5xl"
        style={{
          width: `${Math.max(amount.length, 1)}ch`,
          caretColor: '#1e1e1e',
        }}
        {...rest}
      />
    </div>
  );
};

export default AmountInput;
