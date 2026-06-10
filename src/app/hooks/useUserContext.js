import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUserContext = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('userContext must be called within wrapped children');
  }

  return data;
};

export default useUserContext;
