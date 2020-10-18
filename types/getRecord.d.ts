import type IStorage from './IStorage';
/**
 * An union between empty and not empty records.
 */
declare type Record<T> = {
    empty: true;
} | {
    empty: false;
    payload: T;
};
/**
 * Get an item from storage with its key and parse from JSON.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 */
declare const getRecord: <T>(key: string, storage: IStorage) => Record<T>;
export default getRecord;
//# sourceMappingURL=getRecord.d.ts.map