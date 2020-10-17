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

export default IStorage;
