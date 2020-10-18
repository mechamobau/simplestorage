import updateRecord from './updateRecord';
import localStorageMock from './__mocks__/localStorageMock';

describe('updateRecord', () => {
  let key: string;

  beforeEach(() => {
    key = `key_${Math.random()}`;

    // Clear mocks.
    localStorageMock.setItem.mockClear();
  });

  it('stringifies value to JSON before set them into IStorage', () => {
    const value = `value_${Math.random()}`;

    updateRecord(key, localStorageMock, value);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("throws an error when can't persist value into IStorage", () => {
    localStorageMock.setItem.mockImplementationOnce(() => {
      throw new Error('This error is expected.');
    });

    const value = `value_${Math.random()}`;

    expect(() => updateRecord(key, localStorageMock, value)).toThrowError();
  });

  it("throws an error when can't stringify value to JSON", () => {
    const value = {};
    // @ts-expect-error
    value.value = value;

    expect(() => updateRecord(key, localStorageMock, value)).toThrowError();
  });
});
