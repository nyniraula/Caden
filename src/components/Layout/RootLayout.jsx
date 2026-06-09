import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import TransactionProvider from '../../context/TransactionProvider';

const RootLayout = () => {
  return (
    <TransactionProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </TransactionProvider>
  );
};

export default RootLayout;
