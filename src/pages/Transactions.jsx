import { Search } from 'lucide-react';
import Button from '../components/ui/Input/Button';
import Input from '../components/ui/Input/Input';
import { Plus } from 'lucide-react';
import TransactionCard from '../features/TransactionCard/components/TransactionCard';
import { useState } from 'react';
import TransactionModal from '../features/TransactionModal/components/TransactionModal';
import useUserContext from '../app/hooks/useUserContext';

const Transactions = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { state, dispatch } = useUserContext();
  const { userData } = state;
  const { txn } = userData;

  return (
    <div className="w-full dark:text-[#f8f8f8]">
      <div className="flex min-h-screen w-full flex-col flex-nowrap gap-6 bg-[#faf8ff] p-6 md:p-8 dark:bg-zinc-900">
        {/* Header */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Text */}
          <div className="flex w-auto flex-col gap-0.5 md:gap-1">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-[#f8f8f8]">
              Transactions
            </h2>
            <p className="text-xs text-slate-600 md:text-sm dark:text-slate-200">
              Manage and track your financial activities.
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
        {/* Search and Filters */}
        <div className="flex w-full flex-row items-center justify-start gap-2 rounded-lg bg-white p-4 md:p-6 dark:bg-zinc-800">
          {/* Search */}
          <Input className="" placeholder="Search transactions">
            <Search />
          </Input>
          {/* Filters */}
          <Button>Filter</Button>
        </div>
        {/* Card table */}
        {/* container */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-white p-4 whitespace-nowrap dark:bg-zinc-800">
          {txn.map((el) => {
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
              />
            );
          })}
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

export default Transactions;
