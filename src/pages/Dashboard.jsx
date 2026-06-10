import { Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import TransactionCard from '../components/ui/TransactionCard';
import ChartComponent from '../components/ui/ChartComponent';
import { useState } from 'react';
import TransactionModal from '../features/TransactionModal/components/TransactionModal';
import useUserContext from '../app/hooks/useUserContext';

// Learn useMemo and memoize every func here.

const calcNet = (transactions) => {
  const netAmt = transactions.reduce((total, transaction) => {
    if (transaction.type === 'income') {
      return total + transaction.amount;
    } else if (transaction.type === 'expense') {
      return total - transaction.amount;
    } else {
      return total;
    }
  }, 0);
  return Number(netAmt.toFixed(2));
};

const calcRecentMonthTotal = (transactions, type) => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const thisYear = date.getFullYear();
  console.log();

  const total = transactions.reduce((total, transaction) => {
    const date = new Date(transaction.date);
    const tMonth = date.getMonth() + 1;
    const tYear = date.getFullYear();

    if (
      transaction.type === type &&
      tMonth === thisMonth &&
      tYear === thisYear
    ) {
      return total + transaction.amount;
    } else {
      return total;
    }
  }, 0);

  return Number(total.toFixed(2));
};

const recentTransactions = (transactions) => {
  const rev = [...transactions].reverse();
  return rev.slice(0, 5);
};

const getGraphData = (transactions) => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();

  const monthlyGraphData = {};

  for (let i = 5; i >= 0; i--) {
    const date = new Date(currYear, currMonth - i, 1);
    const key = `${date.getFullYear()}-${date.getMonth()}`;

    monthlyGraphData[key] = {
      month: date.toLocaleString('en-US', {
        month: 'short',
        year: 'numeric',
      }),
      income: 0,
      expense: 0,
    };
  }

  for (const txn of transactions) {
    const date = new Date(txn.date);
    const key = `${date.getFullYear()}-${date.getMonth()}`;

    if (!monthlyGraphData[key]) continue;

    monthlyGraphData[key][txn.type] += txn.amount;
  }

  return monthlyGraphData;
};

const Dashboard = () => {
  const { state, dispatch } = useUserContext();
  const { userData } = state;
  const txn = userData.txn;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const recentTxns = recentTransactions(txn);

  return (
    <div className="w-full">
      <div className="min- flex w-full flex-col flex-nowrap gap-6 bg-[#faf8ff] p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Text */}
          <div className="flex w-auto flex-col gap-0.5 md:gap-1">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Dashboard
            </h2>
            <p className="text-xs text-slate-600 md:text-sm">
              Welcome back, Val. Here's your financial overview.
            </p>
          </div>
          {/* btn */}
          <Button
            className="fixed right-6 bottom-6 w-auto rounded-full px-4 py-4 md:static md:rounded-lg md:px-4 md:py-3"
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
          className="grid w-full gap-3 md:gap-6"
          style={{ gridTemplateColumns: `repeat(auto-fit, minmax(320px,1fr))` }}
        >
          {/* Net balance */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl">
            <p>Net Balance</p>
            <h1>${calcNet(txn)}</h1>
          </div>
          {/* Monthly Income */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl">
            <p>Total Income</p>
            <h1 className="text-green-500">
              + ${calcRecentMonthTotal(txn, 'income')}
            </h1>
          </div>
          {/* Monthly Expense */}
          <div className="flex min-h-40 flex-col items-start justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-2xl">
            <p>Total Expense</p>
            <h1 className="text-red-500">
              - ${calcRecentMonthTotal(txn, 'expense')}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8">
          <ChartComponent data={getGraphData(txn)} />

          {/* recent transactions */}
          <div className="flex min-w-90 flex-1 flex-col">
            <div className="flex rounded-t-xl border-b border-slate-300 bg-white p-4">
              <h5 className="">Recent Transactions</h5>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4">
              {recentTxns.map((el) => {
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
            <div className="flex rounded-t-xl border-b border-slate-300 bg-white p-4">
              <h5 className="">Show more</h5>
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
