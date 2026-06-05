import { X } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { useState } from 'react';
import SegmentedControls from '../../../components/ui/SegmentedControls';
import SelectDropdown from '../../../components/ui/SelectDropdown';
import Textarea from '../../../components/ui/Textarea';
import { getDate } from '../../../lib/utils';
import AmountInput from '../../../components/ui/AmountInput';

const segmentedControlBtns = ['Expense', 'Income'];

const categories = [
  'Groceries',
  'Dining Out',
  'Entertainment',
  'Transportation',
  'Utilities',
  'Shopping',
];

const TransactionModal = () => {
  const [type, setType] = useState(segmentedControlBtns[0]);
  const [amount, setAmount] = useState('0');
  const [categoryValue, setCategoryValue] = useState(null);
  const [date, setDate] = useState(getDate());
  const [note, setNote] = useState('');

  //verify Amount
  function handleAmountInput(event) {
    const value = event.target.value;

    //only accept empty value or digits (still str tho), the gibberish is regex
    // ^ -> start regex, /d -> digit, * -> any no of digits, $ -> end regex
    if (value === '' || /^\d*$/.test(value)) {
      setAmount(value);
    }
  }

  return (
    <div className="mx-auto flex max-w-110 flex-col overflow-hidden rounded-lg border border-slate-600">
      {/* form div */}
      <div className="flex flex-col items-center justify-center gap-4 bg-white p-6">
        {/* Title row */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-semibold">Add Transaction</h2>
          <button>
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Segmented Control */}
        <SegmentedControls btns={segmentedControlBtns} setType={setType} />

        {/* Amount Input */}
        <AmountInput
          amount={amount}
          onChange={(event) => {
            handleAmountInput(event);
          }}
        />

        {/* Category dropdown */}
        <SelectDropdown
          label="category"
          placeholder="category"
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          categories={categories}
        >
          Choose a Category
        </SelectDropdown>

        {/* Date and Time */}
        <Input
          label="Date"
          placeholder="mm/dd/yy"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />

        {/* Notes Description */}
        <Textarea
          label="Notes (optional)"
          placeholder="Add a description..."
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
        ></Textarea>
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
