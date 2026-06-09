import { getStorage, setStorage } from '../lib/localStorage';

export function saveUserSettings(appSettings) {
  const userName = appSettings.userName;
  if (!userName) {
    return;
  }

  const data = getStorage(userName) || {};

  data.userName = userName;
  data.appSettings = {
    theme: appSettings.theme,
    currency: appSettings.currency,
    availableCurrencies: appSettings.availableCurrencies,
  };

  setStorage(userName, data);
}

export function saveTransactionSettings(userName, transactions) {
  if (!userName) {
    return;
  }

  const data = getStorage(userName) || {};

  data.transactions = transactions;
  setStorage(userName, data);
}
