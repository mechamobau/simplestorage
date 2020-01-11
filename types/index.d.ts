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
declare type Options = {
    storage?: IStorage;
    placeholder: string;
};
/**
 * React Hook used to get an interface with LocalStorage or another API. The
 * params used are the `key` to access the value and `options` used to
 * determinate the placeholder value and the storage API.
 * @param key - Key used to access the LocalStorage value
 * @param options - Options of **useStorage**
 */
export declare const useStorage: (key: string, options?: Options) => readonly [string, (newValue: string) => void];
export {};
