// src/context/AppProvider.jsx
import { useState } from "react";
import { AppContext } from "./AppContext"; // Import the context

const AppProvider = ({ children }) => {
  const [appSettings, setAppSettings] = useState({
    theme: "light",
    currency: "USD",
    isAuthenticated: false,
    userName: null,
  });

  // CRITICAL: The 'value' prop must be here!
  return (
    <AppContext.Provider value={{ appSettings, setAppSettings }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
