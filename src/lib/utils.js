import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function mergeClass(fixed, extra) {
  return twMerge(clsx(fixed, extra));
}

function padDateTime(...rest) {
  const result = rest.map((el) => {
    return String(el).padStart(2, '0');
  });

  return result;
}

export function getDate() {
  const date = new Date();

  const formattedDateArray = padDateTime(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

  const formattedDate = formattedDateArray.join('-');

  return formattedDate;
}
export function getTime() {
  const date = new Date();

  const formattedTimeArray = padDateTime(date.getHours(), date.getMinutes());
  const formattedTime = formattedTimeArray.join(':');
  return formattedTime;
}

export function getDateTime() {
  return `${getDate()}T${getTime()}`;
}

export function validateDate(dateStr) {
  //accepts yyyy/mm/dd format
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);

  return (
    date.getDate() === d &&
    date.getMonth() === m - 1 &&
    date.getFullYear() === y
  );
}

export function getCurrencySymbol(currency) {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'NPR':
      return 'रु';
    default:
      return '$';
  }
}
