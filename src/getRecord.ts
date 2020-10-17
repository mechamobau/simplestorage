import type IStorage from "./IStorage";

/**
 * An union between empty and not empty records.
 */
type Record<T> =
  | { empty: true }
  | { empty: false, payload: T };

/**
 * Get an item from storage with its key and parse from JSON.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 */
const getRecord = <T>(key: string, storage: IStorage): Record<T> => {
  try {
    const persistedValue = storage.getItem(key);
    if (persistedValue !== null)
      return {
        empty: false,
        payload: JSON.parse(persistedValue) as T
      };
    return {
      empty: true
    };
  } catch (error) {
    throw new Error('Can\'t get persisted value from storage or parse it from JSON.');
  }
}

export default getRecord;
