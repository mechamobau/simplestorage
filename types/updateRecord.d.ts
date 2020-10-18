import type IStorage from './IStorage';
/**
 * Stringify value to JSON and set as storage's item using key.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 * @param value - New value of record.
 */
declare const updateRecord: <T>(key: string, storage: IStorage, value: T) => void;
export default updateRecord;
//# sourceMappingURL=updateRecord.d.ts.map