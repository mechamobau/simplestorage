import localStorageMock from './__mocks__/localStorageMock';
import getRecord from './getRecord';

describe('getRecord', () => {
  let key: string;

  beforeEach(() => {
    key = `key_${Math.random()}`;

    // Clear mocks.
    localStorageMock.getItem.mockClear();
  });

  it('get persisted value with provided key from provided IStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce('1917');

    getRecord(key, localStorageMock);

    expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
  });

  it('parse persisted value from JSON', () => {
    const value = Math.random();

    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(value));

    const record = getRecord(key, localStorageMock);

    expect(record).toEqual({
      empty: false,
      payload: value,
    });
  });

  it('returns empty: true when IStorage returns `null`', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    const record = getRecord(key, localStorageMock);

    expect(record).toEqual({
      empty: true,
    });
  });

  it("throws an error when can't get persisted value from IStorage", () => {
    localStorageMock.getItem.mockImplementationOnce(() => {
      throw new Error('This error is expected.');
    });

    expect(() => getRecord(key, localStorageMock)).toThrowError();
  });

  it("throws an error when can't parse persisted value from JSON", () => {
    localStorageMock.getItem.mockReturnValueOnce("This isn't a JSON string.");

    expect(() => getRecord(key, localStorageMock)).toThrowError();
  });
});
