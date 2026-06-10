export const calcNet = (transactions) => {
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

export const calcRecentMonthTotal = (transactions, type) => {
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

export const recentTransactions = (transactions) => {
  const rev = [...transactions].reverse();
  return rev.slice(0, 5);
};

export const getGraphData = (transactions) => {
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
