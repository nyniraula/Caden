import { Plus } from 'lucide-react';
import Button from '../components/ui/Input/Button';
import TransactionCard from '../features/TransactionCard/components/TransactionCard';
import ChartComponent from '../components/ui/graphs/ChartComponent';
import { useState, useMemo } from 'react';
import TransactionModal from '../features/TransactionModal/components/TransactionModal';
import useUserContext from '../app/hooks/useUserContext';
import {
  calcNet,
  calcRecentMonthTotal,
  recentTransactions,
  getGraphData,
} from '../lib/transaction';
import { Link } from 'react-router';
import { getCurrencySymbol } from '../lib/utils';

const Dashboard = () => {
  //global context state and dispatch
  const { state, dispatch } = useUserContext();
  const { userData } = state;
  const {
    txn,
    settings: { currency },
  } = userData;

  const currencySymbol = getCurrencySymbol(currency);

  // state for txn modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  //memoized funcs
  const net = useMemo(() => calcNet(txn), [txn]);
  const monthlyIncome = useMemo(
    () => calcRecentMonthTotal(txn, 'income'),
    [txn]
  );
  const monthlyExpense = useMemo(
    () => calcRecentMonthTotal(txn, 'expense'),
    [txn]
  );
  const recentTxn = useMemo(() => recentTransactions(txn), [txn]);
  const graphData = useMemo(() => getGraphData(txn), [txn]);

  return (
    <div className="w-full">
      <div className="min- flex min-h-screen w-full flex-col flex-nowrap gap-6 bg-[#faf8ff] p-6 md:p-8 dark:bg-zinc-900">
        {/* Header */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Text */}
          <div className="flex w-auto flex-col gap-0.5 md:gap-1">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-[#f8f8f8]">
              Dashboard
            </h2>
            <p className="text-xs text-slate-600 md:text-sm dark:text-slate-200">
              Welcome back, Val. Here's your financial overview.
            </p>
          </div>
          {/* btn */}
          <Button
            className="fixed right-6 bottom-22 w-auto rounded-full px-4 py-4 md:static md:rounded-lg md:px-4 md:py-3"
            onClick={() => setIsAddModalOpen(true)}
          >
            <span>
              <Plus />
            </span>
            <span className="hidden md:inline">Add Transaction</span>
          </Button>
        </div>

        {/* balance and stuff */}
        <div
          className="grid w-full gap-3 md:gap-6 dark:text-[#f8f8f8]"
          style={{ gridTemplateColumns: `repeat(auto-fit, minmax(320px,1fr))` }}
        >
          {/* Net balance */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl dark:bg-zinc-800 dark:text-[#f8f8f8]">
            <p>Net Balance</p>
            <h1>
              {currencySymbol} {net}
            </h1>
          </div>
          {/* Monthly Income */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl dark:bg-zinc-800">
            <p>Total Income</p>
            <h1 className="text-green-500">
              + {currencySymbol} {monthlyIncome}
            </h1>
          </div>
          {/* Monthly Expense */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl dark:bg-zinc-800">
            <p>Total Expense</p>
            <h1 className="text-red-500">
              - {currencySymbol} {monthlyExpense}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8">
          <ChartComponent data={graphData} />

          {/* recent transactions */}
          <div className="flex min-w-90 flex-1 flex-col dark:text-[#f8f8f8]">
            <div className="flex rounded-t-xl border-b border-slate-300 bg-white p-4 dark:bg-zinc-800">
              <h5 className="">Recent Transactions</h5>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 dark:bg-zinc-800">
              {recentTxn.map((el) => {
                return (
                  <TransactionCard
                    key={el.id}
                    id={el.id}
                    category={el.category}
                    date={el.date}
                    note={el.note}
                    amount={el.amount}
                    type={el.type}
                    dispatch={dispatch}
                    btn={false}
                  />
                );
              })}
            </div>
            <div className="flex rounded-b-xl border-b border-slate-300 bg-white p-4 dark:bg-zinc-800">
              <Link to={'/transactions'}>
                <p className="text-blue-700 hover:text-blue-400 hover:underline">
                  Show more
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <TransactionModal
          setIsAddModalOpen={setIsAddModalOpen}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default Dashboard;
