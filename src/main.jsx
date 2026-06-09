import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './router.jsx';
import { RouterProvider } from 'react-router';
import AppProvider from './context/AppProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
