const storeToLocalStorage = <T>({
  key,
  value,
}: {
  key: string;
  value: string | Record<string, string | number | Array<T>>;
}) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  storeToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
};
