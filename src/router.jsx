import { createBrowserRouter } from 'react-router';
import RootLayout from './components/Layout/RootLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import Settings from './pages/Settings';

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: Dashboard,
      },
      {
        path: '/transactions',
        Component: Transactions,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/settings',
        Component: Settings,
      },
    ],
  },
]);
