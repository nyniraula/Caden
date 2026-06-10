import { getStorage } from '../../../lib/localStorage';

const currentUser = getStorage('currentUser');

const createNewUserObject = (currentUser) => {
  return {
    username: currentUser,
    settings: {
      theme: 'light',
      currency: 'USD',
    },
    txn: [],
  };
};

export const initialState = {
  currentUser,
  userData: currentUser
    ? getStorage(currentUser) || createNewUserObject(currentUser)
    : createNewUserObject(currentUser),
};

export function userReducer(state, action) {
  switch (action.type) {
    case 'ADD_TXN':
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          txn: [...state.userData.txn, action.newTxn],
        },
      };
    case 'DEL_TXN':
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          txn: state.userData.txn.filter((el) => el.id !== action.id),
        },
      };

    case 'SET_CURR_USER': {
      const newUser = action.newCurrentUser;
      return {
        ...state,
        currentUser: newUser,
        userData: newUser
          ? getStorage(newUser) || createNewUserObject(newUser)
          : null,
      };
    }

    case 'SET_THEME':
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          settings: {
            ...state.userData.settings,
            theme: action.theme,
          },
        },
      };
    case 'SET_CURRENCY':
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          settings: {
            ...state.userData.settings,
            currency: action.currency,
          },
        },
      };

    default:
      return state;
  }
}
