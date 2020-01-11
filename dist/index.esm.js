/*!
 * simplestorage v0.0.0
 * (c) Lucas Viana
 * Released under the MIT License.
 */
import { useState, useEffect } from 'react';

var defaultOptions = {
  storage: window.localStorage,
  placeholder: ''
};
var useStorage = function (key, options) {
  if ( options === void 0 ) options = defaultOptions;

  var storage = options.storage; if ( storage === void 0 ) storage = window.localStorage;
  var placeholder = options.placeholder;

  var setStorageValue = function (newValue) {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  var ref = useState(placeholder);
  var value = ref[0];
  var setValue = ref[1];
  useEffect(function () {
    if (value) { storage.setItem(key, value); }
  }, [value]);
  useEffect(function () {
    setValue(storage.getItem(key));
  }, [storage.getItem(key)]);
  return [value, setStorageValue];
};

export { useStorage };
//# sourceMappingURL=index.esm.js.map
