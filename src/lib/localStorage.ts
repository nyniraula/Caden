export function getStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value) as T;
}

export function setStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
