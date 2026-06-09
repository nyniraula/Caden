import { X } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { useState } from 'react';
import SegmentedControls from '../../../components/ui/SegmentedControls';
import SelectDropdown from '../../../components/ui/SelectDropdown';
import Textarea from '../../../components/ui/Textarea';
import { getDate, validateDate } from '../../../lib/utils';
import AmountInput from '../../../components/ui/AmountInput';
import { useEffect } from 'react';

const segmentedControlBtns = ['expense', 'income'];

const categories = [
  'Groceries',
  'Dining Out',
  'Entertainment',
  'Transportation',
  'Utilities',
  'Shopping',
];

const TransactionModal = ({ setIsAddModelOpen, setTransactions }) => {
  const [type, setType] = useState(segmentedControlBtns[0]);
  const [amount, setAmount] = useState('0');
  const [categoryValue, setCategoryValue] = useState(null);
  const [date, setDate] = useState(getDate());
  const [note, setNote] = useState('');

  const [error, setError] = useState({}); //error object

  //verify Amount
  function handleAmountChange(event) {
    const value = event.target.value;

    //only accept empty value or digits (still str tho), the gibberish is regex
    // ^ -> start regex, /d -> digit, * -> any no of digits, $ -> end regex
    if (value === '' || /^\d*(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
    }
  }

  function validateForm() {
    const errorStatus = {};
    let hasError = false;
    //validate amount
    if (amount == '' || Number.isNaN(Number(amount)) || Number(amount) <= 0) {
      errorStatus.amount = 'Invalid Amount';
      hasError = true;
    }

    if (!categoryValue) {
      errorStatus.category = 'Choose a category';
      hasError = true;
    }

    if (!validateDate(date)) {
      errorStatus.date = 'Invalid date or format';
      hasError = true;
    }

    if (hasError) {
      setError(errorStatus);
      return false;
    }

    setError({}); //a make sure to clear the old error if no error found on validation
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return false;
    }

    setTransactions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        amount: Number(amount),
        category: categoryValue,
        date,
        note,
      },
    ]);

    setIsAddModelOpen(false);
  }

  useEffect(() => {
    function escGrab(event) {
      if (event.key === 'Escape') {
        setIsAddModelOpen(false);
      }
    }

    window.addEventListener('keydown', escGrab);
    return () => {
      window.removeEventListener('keydown', escGrab);
    };
  }, [setIsAddModelOpen]);

  return (
    <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center px-3 backdrop-blur-xs">
      <form
        className="mx-auto flex w-full max-w-110 flex-col overflow-hidden rounded-lg border border-slate-600"
        onSubmit={handleSubmit}
      >
        {/* form div */}
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-6">
          {/* Title row */}
          <div className="flex w-full items-center justify-between">
            <h2 className="text-base font-medium md:text-xl md:font-semibold">
              Add Transaction
            </h2>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-gray-200 active:bg-red-200"
              onClick={() => setIsAddModelOpen(false)}
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Segmented Control */}
          <SegmentedControls btns={segmentedControlBtns} setType={setType} />

          {/* Amount Input */}
          <AmountInput
            amount={amount}
            onChange={handleAmountChange}
            error={error.amount}
          />

          {/* Category dropdown */}
          <SelectDropdown
            label="category"
            placeholder="category"
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            categories={categories}
            error={error.category}
          >
            Choose a Category
          </SelectDropdown>

          {/* Date and Time */}
          <Input
            label="Date"
            placeholder="mm/dd/yy"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            error={error.date}
          />

          {/* Notes Description */}
          <Textarea
            label="Notes (optional)"
            placeholder="Add a description..."
            value={note}
            onChange={(event) => setNote(event.target.value)}
            error={error.textarea}
          ></Textarea>
        </div>

        {/* btns */}
        <div className="flex w-full justify-end gap-4 bg-[#f2f3ff] px-6 py-3 md:py-4">
          <Button
            className="w-auto bg-transparent text-slate-900 hover:bg-red-200 hover:text-white active:bg-red-400"
            onClick={() => setIsAddModelOpen(false)}
          >
            cancel
          </Button>
          <Button className="w-auto" type="submit">
            Save Transaction
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TransactionModal;
