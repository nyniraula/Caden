import { X } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { useState } from 'react';
import SegmentedControls from '../../../components/ui/SegmentedControls';

const TransactionModal = () => {
  const [amount, setAmount] = useState('0');

  return (
    <div className="mx-auto flex max-w-110 flex-col overflow-hidden rounded-lg border border-slate-600">
      {/* form div */}
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 md:gap-6">
        {/* Title row */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-semibold">Add Transaction</h2>
          <button>
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Segmented Control */}
        <SegmentedControls />

        {/* Amount Input */}
        <div className="flex w-full items-center justify-center gap-2 border-b-3 border-slate-300 pb-2">
          <span className="text-xl font-semibold tracking-wide text-slate-500">
            USD
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
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>

        {/* Category dropdown */}
        <Input label="Category" placeholder="Category" />

        {/* Date and Time */}
        <Input label="Date" placeholder="mm/dd/yy" />

        {/* Notes Description */}
        <Input
          label="Notes (optional)"
          placeholder="Add a description..."
        ></Input>
      </div>
      {/* btns */}
      <div className="flex w-full justify-end gap-4 bg-[#f2f3ff] px-6 py-4">
        <Button className="w-auto bg-transparent text-slate-900 hover:bg-red-200 hover:text-white active:bg-red-400">
          cancel
        </Button>
        <Button className="w-auto">Save</Button>
      </div>
    </div>
  );
};

export default TransactionModal;
