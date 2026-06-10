import { useEffect } from 'react';
import useUserContext from './app/hooks/useUserContext.js';
import { router } from './router.jsx';
import { RouterProvider } from 'react-router';

const App = () => {
  const { state } = useUserContext();
  const { userData } = state;
  const {
    settings: { theme },
  } = userData;

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
};

export default App;
