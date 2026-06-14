import { getStorage } from "../../../lib/localStorage";
import type { Transaction } from "../../../lib/transactionUtil";

//types
export type Action =
  | { type: "ADD_TXN"; newTxn: Transaction }
  | { type: "DEL_TXN"; id: string }
  | { type: "SET_CURR_USER"; newCurrentUser: string | null }
  | { type: "SET_THEME"; theme: "light" | "dark" }
  | { type: "SET_CURRENCY"; currency: string };

export type UserData = {
  username: string;
  settings: {
    theme: "light" | "dark";
    currency: string;
  };
  txn: Transaction[];
};

export type State = {
  currentUser: string | null;
  userData: UserData;
};

//actual code
const emptyUserData: UserData = {
  username: "",
  settings: {
    theme: "light",
    currency: "USD",
  },
  txn: [],
};

const currentUser = getStorage<string>("currentUser");

const createNewUserObject = (currentUser: string): UserData => {
  return {
    username: currentUser,
    settings: {
      theme: "light",
      currency: "USD",
    },
    txn: [],
  };
};

export const initialState = {
  currentUser,
  userData: currentUser
    ? getStorage<UserData>(currentUser) || createNewUserObject(currentUser)
    : emptyUserData,
};

export function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TXN":
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          txn: [...state.userData.txn, action.newTxn],
        },
      };
    case "DEL_TXN":
      if (!state.userData) return state;
      return {
        ...state,
        userData: {
          ...state.userData,
          txn: state.userData.txn.filter((el) => el.id !== action.id),
        },
      };

    case "SET_CURR_USER": {
      const newUser = action.newCurrentUser;
      return {
        ...state,
        currentUser: newUser,
        userData: newUser
          ? getStorage<UserData>(newUser) || createNewUserObject(newUser)
          : emptyUserData,
      };
    }

    case "SET_THEME":
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
    case "SET_CURRENCY":
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
