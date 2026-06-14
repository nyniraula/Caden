import { X } from "lucide-react";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { useState } from "react";
import SegmentedControls from "../../../components/UI/Button/SegmentedControls";
import SelectDropdown from "../../../components/UI/Input/SelectDropdown";
import Textarea from "../../../components/UI/Input/Textarea";
import { getDate, validateDate } from "../../../lib/dateTime";
import AmountInput from "../../../components/UI/Input/AmountInput";
import { useEffect } from "react";
import useUserContext from "../../../app/hooks/useUserContext";
import type { Transaction } from "../../../lib/transactionUtil";

const segmentedControlBtns = ["expense", "income"];

const categories = [
  "Groceries",
  "Dining Out",
  "Entertainment",
  "Transportation",
  "Utilities",
  "Shopping",
];

type ErrorStatus = {
  amount?: string;
  category?: string;
  date?: string;
  textarea?: string;
};

type Props = {
  setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionModal = ({ setIsAddModalOpen }: Props) => {
  const [type, setType] = useState(segmentedControlBtns[0]);
  const [amount, setAmount] = useState("0");
  const [categoryValue, setCategoryValue] = useState<string | null>(null);
  const [date, setDate] = useState(getDate());
  const [note, setNote] = useState("");

  const [error, setError] = useState<ErrorStatus>({}); //error object

  const { dispatch } = useUserContext();

  //verify Amount
  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    //only accept empty value or digits (still str tho), the gibberish is regex
    // ^ -> start regex, /d -> digit, * -> any no of digits, $ -> end regex
    if (value === "" || /^\d*(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
    }
  }

  function validateForm() {
    const errorStatus: ErrorStatus = {};
    let hasError = false;
    //validate amount
    if (amount == "" || Number.isNaN(Number(amount)) || Number(amount) <= 0) {
      errorStatus.amount = "Invalid Amount";
      hasError = true;
    }

    if (!categoryValue) {
      errorStatus.category = "Choose a category";
      hasError = true;
    }

    if (!validateDate(date)) {
      errorStatus.date = "Invalid date or format";
      hasError = true;
    }

    if (hasError) {
      setError(errorStatus);
      return false;
    }

    setError({}); //a make sure to clear the old error if no error found on validation
    return true;
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return false;
    }

    const newTxn: Transaction = {
      id: crypto.randomUUID(),
      type: type as "income" | "expense",
      amount: Number(amount),
      category: categoryValue as string,
      date,
      note,
    };

    dispatch({
      type: "ADD_TXN",
      newTxn,
    });

    setIsAddModalOpen(false);
  }

  useEffect(() => {
    function escGrab(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsAddModalOpen(false);
      }
    }

    window.addEventListener("keydown", escGrab);
    return () => {
      window.removeEventListener("keydown", escGrab);
    };
  }, [setIsAddModalOpen]);

  return (
    <div className="fixed -top-20 left-0 flex h-screen w-full items-center justify-center px-3 backdrop-blur-xs lg:top-0">
      <form
        className="mx-auto flex w-full max-w-110 flex-col overflow-hidden rounded-lg border border-slate-600"
        onSubmit={handleSubmit}
      >
        {/* form div */}
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 dark:bg-zinc-800 dark:text-[#f8f8f8]">
          {/* Title row */}
          <div className="flex w-full items-center justify-between">
            <h2 className="text-base font-medium md:text-xl md:font-semibold">
              Add Transaction
            </h2>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-gray-500 active:bg-red-200"
              onClick={() => setIsAddModalOpen(false)}
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
            categoryValue={categoryValue as string}
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
        <div className="flex w-full justify-end gap-4 bg-[#f2f3ff] px-6 py-3 md:py-4 dark:bg-zinc-800">
          <Button
            className="w-auto bg-transparent text-slate-900 hover:bg-red-400 hover:text-[#f8f8f8] active:bg-red-400 dark:text-[#f8f8f8]"
            onClick={() => setIsAddModalOpen(false)}
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
