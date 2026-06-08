import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const useTransactionContext = () => {
  const data = useContext(TransactionContext);

  if (!data) {
    throw new Error(
      'Transaction Context must be used within a wrapped provider.'
    );
  }

  return data;
};

export default useTransactionContext;
