import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import AppProvider from '../../context/AppProvider';
import TransactionProvider from '../../context/TransactionProvider';

const RootLayout = () => {
  return (
    <AppProvider>
      <TransactionProvider>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex w-full overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </TransactionProvider>
    </AppProvider>
  );
};

export default RootLayout;
