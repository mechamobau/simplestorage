/*!
 * @mechamobau/simplestorage v0.0.2
 * (c) Lucas Viana
 * Released under the MIT License.
 */
import { useState, useCallback } from 'react';

/**
 * Get an item from storage with its key and parse from JSON.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 */
var getRecord = function (key, storage) {
  try {
    var persistedValue = storage.getItem(key);
    if (persistedValue !== null) { return {
      empty: false,
      payload: JSON.parse(persistedValue)
    }; }
    return {
      empty: true
    };
  } catch (error) {
    throw new Error("Can't get persisted value from storage or parse it from JSON.");
  }
};

/**
 * Stringify value to JSON and set as storage's item using key.
 * @param key - IStorage's key.
 * @param storage - IStorage's implementation.
 * @param value - New value of record.
 */
var updateRecord = function (key, storage, value) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error("Can't stringify value to JSON or set it in the storage.");
  }
};

/**
 * The default value for storage is browser's local storage API.
 */

var DEFAULT_STORAGE = window.localStorage;
/**
 * React Hook used to get an interface with LocalStorage or another API. The
 * params used are the `key` to access the value and `options` used to
 * determinate the placeholder value and the storage API.
 * @param key - Key used to access the LocalStorage value
 * @param options - Options of **useStorage**
 */

var useStorage = function (key, ref) {
  var storage = ref.storage; if ( storage === void 0 ) storage = DEFAULT_STORAGE;
  var placeholder = ref.placeholder;

  var ref$1 = useState(function () {
    var record = getRecord(key, storage);

    if (!record.empty) {
      return record.payload;
    }

    updateRecord(key, storage, placeholder);
    return placeholder;
  });
  var value = ref$1[0];
  var setValue = ref$1[1];
  /**
   * Function to change the value inside the Storage and in the State of Hook.
   * @param newValue - value to change on Storage
   */

  var setStorageValue = useCallback(function (newValue) {
    updateRecord(key, storage, newValue);
    setValue(newValue);
  }, [key, storage, setValue]);
  return [value, setStorageValue];
};

export { useStorage };
//# sourceMappingURL=index.esm.js.map
