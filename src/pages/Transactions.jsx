import { Search } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Plus } from 'lucide-react';
import TransactionCard from '../components/ui/TransactionCard';
import useTransactionContext from '../hooks/useTransactionContext';
import { useState } from 'react';
import TransactionModal from '../features/TransactionModal/components/TransactionModal';

const Transactions = () => {
  const { transactions, setTransactions } = useTransactionContext();
  const [isAddModelOpen, setIsAddModelOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex min-h-screen w-full flex-col flex-nowrap gap-6 bg-[#faf8ff] p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Text */}
          <div className="flex w-auto flex-col gap-0.5 md:gap-1">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Transactions
            </h2>
            <p className="text-xs text-slate-600 md:text-sm">
              Manage and track your financial activities.
            </p>
          </div>
          {/* btn */}
          <Button
            className="fixed right-6 bottom-6 w-auto rounded-full px-4 py-4 md:static md:rounded-lg md:px-4 md:py-3"
            onClick={() => setIsAddModelOpen(true)}
          >
            <span>
              <Plus />
            </span>
            <span className="hidden md:inline">Add Transaction</span>
          </Button>
        </div>
        {/* Search and Filters */}
        <div className="flex w-full flex-row items-center justify-start gap-2 rounded-lg bg-white p-4 md:p-6">
          {/* Search */}
          <Input className="" placeholder="Search transactions">
            <Search />
          </Input>
          {/* Filters */}
          <Button>Filter</Button>
        </div>
        {/* Card table */}
        {/* container */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-white p-4 whitespace-nowrap">
          {transactions.map((el) => {
            return (
              <TransactionCard
                key={el.id}
                id={el.id}
                category={el.category}
                date={el.date}
                note={el.note}
                amount={el.amount}
                type={el.type}
                setTransactions={setTransactions}
              />
            );
          })}
        </div>
      </div>
      {isAddModelOpen && (
        <TransactionModal
          setIsAddModelOpen={setIsAddModelOpen}
          setTransactions={setTransactions}
        />
      )}
    </div>
  );
};

export default Transactions;
