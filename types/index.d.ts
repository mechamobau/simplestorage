interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
declare type Options = {
    storage?: IStorage;
    placeholder: string;
};
export declare const useStorage: (key: string, options?: Options) => readonly [string | null, (newValue: string) => void];
export {};
