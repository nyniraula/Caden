import { useState } from 'react';
import { TransactionContext } from './TransactionContext';
import { useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';
import { getStorage } from '../lib/localStorage';
import { saveTransactionSettings } from '../services/storage';

const TransactionProvider = ({ children }) => {
  const { appSettings } = useAppContext();
  const userName = appSettings.userName;

  const userObj = userName ? getStorage(userName) || {} : {};

  const [transactions, setTransactions] = useState(userObj.transactions || []);

  useEffect(() => {
    saveTransactionSettings(userName, transactions);
  }, [transactions, userName]);

  if (!userName) {
    return <>{children}</>;
  }

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
