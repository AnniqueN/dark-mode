import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
  // If that item doesn't exist, it will return undefined
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and Return Stored Json or, if undefined, Return InitialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
