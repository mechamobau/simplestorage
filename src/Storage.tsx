import { ReactNode } from 'react';

import { Options, useStorage } from './index';

/**
 * Props of React Component **Storage**
 */
type Props = {
  /**
   * Key used to access the LocalStorage value
   */
  key: string;
  /**
   * Which Storage API will be used for
   */
  storage: Options['storage'];
  /**
   * Placeholder value which will be used in the case of blank value
   */
  placeholder: Options['placeholder'];
  /**
   * Children with passed values
   */
  children: (value: string, setValue: (newValue: string) => void) => ReactNode;
};

/**
 * React Component created to be an interface with the Storage API.
 * @param props - Props of React Component **Storage**
 */
const Storage = ({ key, storage, placeholder, children }: Props) => {
  const [value, setValue] = useStorage(key, { storage, placeholder });

  return children(value, setValue);
};

export default Storage;
