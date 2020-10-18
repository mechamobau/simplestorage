import type IStorage from './IStorage';
/**
 * Options passed to the hook to decide what placeholder value and storage used
 */
export declare type Options<T> = {
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
export declare const useStorage: <T>(key: string, { storage, placeholder }: Options<T>) => readonly [T, (newValue: T) => void];
//# sourceMappingURL=index.d.ts.map