export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  note: string;
};

export type MonthlyEntry = {
  month: string;
  income: number;
  expense: number;
};

export const calcNet = (transactions: Transaction[]): number => {
  const netAmt = transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    }
    if (transaction.type === "expense") {
      return total - transaction.amount;
    }
    return total;
  }, 0);
  return Number(netAmt.toFixed(2));
};

export const calcRecentMonthTotal = (
  transactions: Transaction[],
  type: Transaction["type"],
): number => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const thisYear = date.getFullYear();

  const total = transactions.reduce((total, transaction) => {
    const txdate = new Date(transaction.date);
    const tMonth = txdate.getMonth() + 1;
    const tYear = txdate.getFullYear();

    if (
      transaction.type === type &&
      tMonth === thisMonth &&
      tYear === thisYear
    ) {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  return Number(total.toFixed(2));
};

export const recentTransactions = (
  transactions: Transaction[],
): Transaction[] => {
  const rev = [...transactions].reverse();
  return rev.slice(0, 5);
};

export const getGraphData = (
  transactions: Transaction[],
): Record<string, MonthlyEntry> => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();

  const monthlyGraphData: Record<string, MonthlyEntry> = {};

  for (let i = 5; i >= 0; i--) {
    const date = new Date(currYear, currMonth - i, 1);
    const key = `${date.getFullYear()}-${date.getMonth()}`;

    monthlyGraphData[key] = {
      month: date.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
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
