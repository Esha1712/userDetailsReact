export const saveToLocalStorage = (key: string, value: unknown) => { // Save data to local storage
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T,>(key: string): T | null => { // Retrieve data from local storage
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};
