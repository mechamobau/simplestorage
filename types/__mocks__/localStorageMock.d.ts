/// <reference types="jest" />
/**
 * A mock of LocalStorage implementation.
 */
declare const localStorageMock: {
    getItem: jest.Mock<any, any>;
    setItem: jest.Mock<any, any>;
    removeItem: jest.Mock<any, any>;
};
export default localStorageMock;
