**[Simple Storage](README.md)**

> Globals

# Simple Storage

## Index

### Interfaces

* [IStorage](interfaces/istorage.md)

### Type aliases

* [Options](README.md#options)
* [Record](README.md#record)

### Variables

* [DEFAULT\_STORAGE](README.md#default_storage)

### Functions

* [getRecord](README.md#getrecord)
* [updateRecord](README.md#updaterecord)
* [useStorage](README.md#usestorage)

## Type aliases

### Options

Ƭ  **Options**\<T>: { placeholder: T ; storage?: [IStorage](interfaces/istorage.md)  }

*Defined in [index.ts:16](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/index.ts#L16)*

Options passed to the hook to decide what placeholder value and storage used

#### Type parameters:

Name |
------ |
`T` |

#### Type declaration:

Name | Type |
------ | ------ |
`placeholder` | T |
`storage?` | [IStorage](interfaces/istorage.md) |

___

### Record

Ƭ  **Record**\<T>: { empty: true  } \| { empty: false ; payload: T  }

*Defined in [getRecord.ts:6](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/getRecord.ts#L6)*

An union between empty and not empty records.

#### Type parameters:

Name |
------ |
`T` |

## Variables

### DEFAULT\_STORAGE

• `Const` **DEFAULT\_STORAGE**: [IStorage](interfaces/istorage.md) = window.localStorage

*Defined in [index.ts:11](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/index.ts#L11)*

The default value for storage is browser's local storage API.

## Functions

### getRecord

▸ `Const`**getRecord**\<T>(`key`: string, `storage`: [IStorage](interfaces/istorage.md)): [Record](README.md#record)\<T>

*Defined in [getRecord.ts:13](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/getRecord.ts#L13)*

Get an item from storage with its key and parse from JSON.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | IStorage's key. |
`storage` | [IStorage](interfaces/istorage.md) | IStorage's implementation.  |

**Returns:** [Record](README.md#record)\<T>

___

### updateRecord

▸ `Const`**updateRecord**\<T>(`key`: string, `storage`: [IStorage](interfaces/istorage.md), `value`: T): void

*Defined in [updateRecord.ts:9](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/updateRecord.ts#L9)*

Stringify value to JSON and set as storage's item using key.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | IStorage's key. |
`storage` | [IStorage](interfaces/istorage.md) | IStorage's implementation. |
`value` | T | New value of record.  |

**Returns:** void

___

### useStorage

▸ `Const`**useStorage**\<T>(`key`: string, `__namedParameters`: { placeholder: T ; storage: [IStorage](interfaces/istorage.md) = DEFAULT\_STORAGE }): [T, (Anonymous function)]

*Defined in [index.ts:28](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/index.ts#L28)*

React Hook used to get an interface with LocalStorage or another API. The
params used are the `key` to access the value and `options` used to
determinate the placeholder value and the storage API.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the LocalStorage value |
`__namedParameters` | { placeholder: T ; storage: [IStorage](interfaces/istorage.md) = DEFAULT\_STORAGE } | - |

**Returns:** [T, (Anonymous function)]
