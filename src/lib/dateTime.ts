function padDateTime(...rest: number[]): string[] {
  const result = rest.map((el) => {
    return String(el).padStart(2, "0");
  });

  return result;
}

export function getDate(): string {
  const date = new Date();

  const formattedDateArray = padDateTime(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  const formattedDate = formattedDateArray.join("-");

  return formattedDate;
}

export function getTime(): string {
  const date = new Date();

  const formattedTimeArray = padDateTime(date.getHours(), date.getMinutes());
  const formattedTime = formattedTimeArray.join(":");
  return formattedTime;
}

export function getDateTime() {
  return `${getDate()}T${getTime()}`;
}

export function validateDate(dateStr: string): boolean {
  //accepts yyyy/mm/dd format
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);

  return (
    date.getDate() === d &&
    date.getMonth() === m - 1 &&
    date.getFullYear() === y
  );
}
