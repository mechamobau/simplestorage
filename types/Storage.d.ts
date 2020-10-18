import { ReactNode } from 'react';
import { Options } from './index';
/**
 * Props of React Component **Storage**
 */
declare type Props<T> = {
    /**
     * Key used to access the LocalStorage value
     */
    key: string;
    /**
     * Which Storage API will be used for
     */
    storage: Options<T>['storage'];
    /**
     * Placeholder value which will be used in the case of blank value
     */
    placeholder: Options<T>['placeholder'];
    /**
     * Children with passed values
     */
    children: (value: T, setValue: (newValue: T) => void) => ReactNode;
};
/**
 * React Component created to be an interface with the Storage API.
 * @param props - Props of React Component **Storage**
 */
declare const Storage: <T>({ key, storage, placeholder, children }: Props<T>) => ReactNode;
export default Storage;
//# sourceMappingURL=Storage.d.ts.map