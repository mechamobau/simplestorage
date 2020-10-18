import { useCallback, useState } from 'react';

import getRecord from './getRecord';
import updateRecord from './updateRecord';

import type IStorage from './IStorage';

/**
 * The default value for storage is browser's local storage API.
 */
const DEFAULT_STORAGE: IStorage = window.localStorage;

/**
 * Options passed to the hook to decide what placeholder value and storage used
 */
export type Options<T> = {
  storage?: IStorage;
  placeholder: T;
};

/**
 * React Hook used to get an interface with LocalStorage or another API. The
 * params used are the `key` to access the value and `options` used to
 * determinate the placeholder value and the storage API.
 * @param key - Key used to access the LocalStorage value
 * @param options - Options of **useStorage**
 */
export const useStorage = <T>(
  key: string,
  { storage = DEFAULT_STORAGE, placeholder }: Options<T>
) => {
  const [value, setValue] = useState<T>(() => {
    const record = getRecord<T>(key, storage);

    if (!record.empty) {
      return record.payload;
    }

    updateRecord(key, storage, placeholder);

    return placeholder;
  });

  /**
   * Function to change the value inside the Storage and in the State of Hook.
   * @param newValue - value to change on Storage
   */
  const setStorageValue = useCallback(
    (newValue: T) => {
      updateRecord(key, storage, newValue);
      setValue(newValue);
    },
    [key, storage, setValue]
  );

  return [value, setStorageValue] as const;
};
