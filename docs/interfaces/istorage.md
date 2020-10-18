**[Simple Storage](../README.md)**

> [Globals](../README.md) / IStorage

# Interface: IStorage

Interface used to mock the Storage API

## Hierarchy

* **IStorage**

## Index

### Methods

* [getItem](istorage.md#getitem)
* [setItem](istorage.md#setitem)

## Methods

### getItem

▸ **getItem**(`key`: string): string \| null

*Defined in [IStorage.ts:9](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/IStorage.ts#L9)*

Retrieves the value in Storage, if not exists return null

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the Storage value  |

**Returns:** string \| null

___

### setItem

▸ **setItem**(`key`: string, `value`: string): void

*Defined in [IStorage.ts:16](https://github.com/VitorLuizC/simplestorage/blob/e191561/src/IStorage.ts#L16)*

Update the value on `key` passed

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the Storage value |
`value` | string | Value to be set  |

**Returns:** void
