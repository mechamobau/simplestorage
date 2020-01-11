import { useState } from 'react';

interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

type Options = {
  storage?: IStorage;
  placeholder: string;
};

const defaultOptions: Options = {
  storage: window.localStorage,
  placeholder: ''
};

export const useStorage = (key: string, options: Options = defaultOptions) => {
  const { storage = window.localStorage, placeholder } = options;

  const [value, setValue] = useState<string>(() => {
    const persistedValue = storage.getItem(key);
    if (persistedValue === null) {
      storage.setItem(key, placeholder);
      return placeholder;
    }
    return persistedValue;
  });

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  return [value, setStorageValue] as const;
};
