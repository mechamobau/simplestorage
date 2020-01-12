[[libraryNameWithSpacesAndUpperCases]](README.md)

# [libraryNameWithSpacesAndUpperCases]

## Index

### Interfaces

* [IStorage](interfaces/istorage.md)

### Type aliases

* [Options](README.md#options)

### Functions

* [useStorage](README.md#const-usestorage)

### Object literals

* [defaultOptions](README.md#const-defaultoptions)

## Type aliases

###  Options

Ƭ **Options**: *object*

*Defined in [index.ts:28](https://github.com/mechamobau/simplestorage/blob/0130b15/src/index.ts#L28)*

Options passed to the hook to decide what placeholder value and storage used

#### Type declaration:

* **placeholder**: *string*

* **storage**? : *[IStorage](interfaces/istorage.md)*

## Functions

### `Const` useStorage

▸ **useStorage**(`key`: string, `options`: [Options](README.md#options)): *[string, setStorageValue]*

*Defined in [index.ts:48](https://github.com/mechamobau/simplestorage/blob/0130b15/src/index.ts#L48)*

React Hook used to get an interface with LocalStorage or another API. The
params used are the `key` to access the value and `options` used to
determinate the placeholder value and the storage API.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`key` | string | - | Key used to access the LocalStorage value |
`options` | [Options](README.md#options) |  defaultOptions | Options of **useStorage**  |

**Returns:** *[string, setStorageValue]*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [index.ts:36](https://github.com/mechamobau/simplestorage/blob/0130b15/src/index.ts#L36)*

Default values for options in **useStorage**

###  placeholder

• **placeholder**: *string* = ""

*Defined in [index.ts:38](https://github.com/mechamobau/simplestorage/blob/0130b15/src/index.ts#L38)*

###  storage

• **storage**: *Storage* =  window.localStorage

*Defined in [index.ts:37](https://github.com/mechamobau/simplestorage/blob/0130b15/src/index.ts#L37)*
