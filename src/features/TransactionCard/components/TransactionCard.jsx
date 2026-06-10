import { Trash } from 'lucide-react';
import useUserContext from '../../../app/hooks/useUserContext';
import { getCurrencySymbol } from '../../../lib/utils';

const TransactionCard = ({
  id,
  category,
  date,
  note,
  amount,
  type,
  dispatch,
  btn = true,
}) => {
  const {
    state: {
      userData: {
        settings: { currency },
      },
    },
  } = useUserContext(); //just a nested way to destructure currency value from state directly

  const currencySymbol = getCurrencySymbol(currency);

  return (
    //   {/* item */}
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-400 p-2">
      {/* date, category, note */}
      <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
        {/* category, date */}
        <div className="flex flex-col flex-wrap items-start justify-center">
          <h5>{category}</h5>
          <p>{date}</p>
        </div>

        <div>
          <p>{note}</p>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4">
        {/* amount */}
        <div>
          <h6>
            {type.toLowerCase() === 'income' ? (
              <span className="font-semibold text-green-500">
                + {currencySymbol} {amount}
              </span>
            ) : (
              <span className="font-semibold text-red-500">
                - {currencySymbol} {amount}
              </span>
            )}
          </h6>
        </div>

        {/* delete btn */}
        {btn && (
          <button
            className="rounded-full bg-red-500/40 p-2"
            onClick={() => {
              dispatch({ type: 'DEL_TXN', id: id });
            }}
          >
            <Trash size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
