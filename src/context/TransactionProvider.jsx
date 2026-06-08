import { useState } from 'react';
import { TransactionContext } from './TransactionContext';
import { useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';

const TransactionProvider = ({ children }) => {
  const { appSettings } = useAppContext();
  const userName = appSettings.userName;

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem(`${userName}Transactions`)) || []
  );

  useEffect(() => {
    localStorage.setItem(
      `${userName}Transactions`,
      JSON.stringify(transactions)
    );
  }, [transactions, userName]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
