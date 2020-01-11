import { useState, useEffect } from 'react';

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

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  const [value, setValue] = useState<string | null>(placeholder);

  useEffect(() => {
    if (value) storage.setItem(key, value);
  }, [value]);

  useEffect(() => {
    setValue(storage.getItem(key));
  }, [storage.getItem(key)]);

  return [value, setStorageValue] as const;
};
