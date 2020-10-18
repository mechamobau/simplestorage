import type IStorage from './IStorage';

/**
 * Stringify value to JSON and set as storage's item using key.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 * @param value - New value of record.
 */
const updateRecord = <T>(key: string, storage: IStorage, value: T) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error("Can't stringify value to JSON or set it in the storage.");
  }
};

export default updateRecord;
