// src/context/AppProvider.jsx
import { useState } from 'react';
import { AppContext } from './AppContext'; // Import the context
import { getStorage } from '../lib/localStorage';
import { useEffect } from 'react';
import { saveUserSettings } from '../services/storage';

const AppProvider = ({ children }) => {
  const currUser = getStorage('currentUser');
  const userObj = currUser ? getStorage(currUser) : null;

  const [appSettings, setAppSettings] = useState({
    theme: userObj?.appSettings?.theme || 'light',
    currency: userObj?.appSettings?.currency || 'USD',
    availableCurrencies: userObj?.appSettings?.availableCurrencies || [
      ('USD', 'EUR', 'NPR'),
    ],
    userName: currUser || null,
  });

  useEffect(() => {
    saveUserSettings(appSettings);
  }, [appSettings]);

  return (
    <AppContext.Provider value={{ appSettings, setAppSettings }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
