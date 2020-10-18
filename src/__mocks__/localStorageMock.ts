/**
 * A mock of LocalStorage implementation.
 */
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

export default localStorageMock;
