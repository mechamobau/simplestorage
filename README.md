# Simple Storage

[![Build Status](https://travis-ci.org/mechamobau/simplestorage.svg?branch=master)](https://travis-ci.org/mechamobau/simplestorage)
[![License](https://badgen.net/github/license/mechamobau/simplestorage)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/simplestorage)](https://bundlephobia.com/result?p=simplestorage)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/simplestorage)](https://bundlephobia.com/result?p=simplestorage)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install simplestorage --save

# For Yarn, use the command below.
yarn add simplestorage
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/simplestorage"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/simplestorage"></script>

<script>
  // UMD module is exposed through the "simpleStorage" global variable.
  console.log(simpleStorage);
</script>
```

## Usage

This module needs to be used inside a functional component. The `useStorage` hook
return `value` from Storage API and `setValue` change that value.

```javascript
import React, { useState } from 'react';
import { useStorage } from 'simplestorage';

const Todo = () => {
  const [value, setValue] = useStorage('<YOUR-LOCAL-STORAGE-KEY>', {
    placeholder: 'undone'
  });
  const [status, setStatus] = useState(false)

  handleClick = () => {
    setValue(status ? 'done' : 'undone')
    setStatus(!status);
  };

  return (
    <p>Todo Status: {value}</p>
    <button onClick={handleClick}>Toggle Status</button>
  );
};
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
