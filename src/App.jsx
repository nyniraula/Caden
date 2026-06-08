import Transactions from './pages/Transactions';
import AppProvider from './context/AppProvider';
import TransactionProvider from './context/TransactionProvider';

const App = () => {
  return (
    <AppProvider>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </AppProvider>
  );
};

export default App;
