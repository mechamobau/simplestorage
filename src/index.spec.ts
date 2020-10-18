import { useState } from 'react';
import { useStorage } from './';
import localStorageMock from './__mocks__/localStorageMock';

const useStateMock = useState as jest.Mock;

jest.mock('react', () => ({
  useState: jest.fn(),
  useCallback: jest.fn((fn) => fn),
}));

describe('useStorage unit tests', () => {
  let key: string;
  let placeholder: string;
  const setStateMock = jest.fn();

  beforeEach(() => {
    key = `key_${Math.random()}`;
    placeholder = `placeholder_${Math.random()}`;

    // Clear mocks.
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  describe('Initializing when storage is empty', () => {
    beforeEach(() => {
      useStateMock.mockImplementationOnce((fn: () => any) => [
        fn(),
        setStateMock,
      ]);

      localStorageMock.getItem.mockReturnValueOnce(null);
    });

    it('uses placeholder as initialState', () => {
      useStorage(key, { placeholder, storage: localStorageMock });

      expect(useStateMock).toHaveReturnedWith([placeholder, setStateMock]);
    });

    it('set placeholder on storage', () => {
      useStorage(key, { placeholder, storage: localStorageMock });

      expect(localStorageMock.setItem).toBeCalledWith(
        key,
        JSON.stringify(placeholder)
      );
    });
  });

  describe('Initializing when storage is not empty', () => {
    let persistedValue: string;

    beforeEach(() => {
      useStateMock.mockImplementationOnce((fn: () => string) => [
        fn(),
        setStateMock,
      ]);

      persistedValue = `persisted_value_${Math.random()}`;

      localStorageMock.getItem.mockReturnValueOnce(
        JSON.stringify(persistedValue)
      );
    });

    it('uses persisted value as initialState', () => {
      useStorage(key, { placeholder, storage: localStorageMock });

      expect(useStateMock).toHaveReturnedWith([persistedValue, setStateMock]);
    });
  });
});
