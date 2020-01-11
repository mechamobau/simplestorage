import { useState, useEffect } from 'react';

/**
 * Interface used to mock the Storage API
 */
interface IStorage {
  /**
   * Retrieves the value in Storage, if not exists return null
   * @param key - Key used to access the Storage value
   */
  getItem(key: string): string | null;
  /**
   * Update the value on `key` passed
   * @param key - Key used to access the Storage value
   * @param value - Value to be set
   */
  setItem(key: string, value: string): void;
  /**
   * Remove the value at `key` passed
   * @param key - Key used to access the Storage value
   */
  removeItem(key: string): void;
}

/**
 * Options passed to the hook to decide what placeholder value and storage used
 */
type Options = {
  storage?: IStorage;
  placeholder: string;
};

/**
 * Default values for options in **useStorage**
 */
const defaultOptions: Options = {
  storage: window.localStorage,
  placeholder: ''
};

/**
 * React Hook used to get an interface with LocalStorage or another API. The
 * params used are the `key` to access the value and `options` used to
 * determinate the placeholder value and the storage API.
 * @param key - Key used to access the LocalStorage value
 * @param options - Options of **useStorage**
 */
export const useStorage = (key: string, options: Options = defaultOptions) => {
  const { storage = window.localStorage, placeholder } = options;

  /**
   * Function to change the value inside the Storage and in the State of Hook.
   * @param newValue - value to change on Storage
   */
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
