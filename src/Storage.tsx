import { ReactNode } from 'react';

import { Options, useStorage } from './index';

/**
 * Props of React Component **Storage**
 */
type Props<T> = {
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
const Storage = <T,>({ key, storage, placeholder, children }: Props<T>) => {
  const [value, setValue] = useStorage(key, { storage, placeholder });

  return children(value, setValue);
};

export default Storage;
