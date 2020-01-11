[[libraryNameWithSpacesAndUpperCases]](../README.md) › [IStorage](istorage.md)

# Interface: IStorage

Interface used to mock the Storage API

## Hierarchy

* **IStorage**

## Index

### Methods

* [getItem](istorage.md#getitem)
* [removeItem](istorage.md#removeitem)
* [setItem](istorage.md#setitem)

## Methods

###  getItem

▸ **getItem**(`key`: string): *string | null*

*Defined in [index.ts:11](https://github.com/mechamobau/simplestorage/blob/6b9301e/src/index.ts#L11)*

Retrieves the value in Storage, if not exists return null

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the Storage value  |

**Returns:** *string | null*

___

###  removeItem

▸ **removeItem**(`key`: string): *void*

*Defined in [index.ts:22](https://github.com/mechamobau/simplestorage/blob/6b9301e/src/index.ts#L22)*

Remove the value at `key` passed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the Storage value  |

**Returns:** *void*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *void*

*Defined in [index.ts:17](https://github.com/mechamobau/simplestorage/blob/6b9301e/src/index.ts#L17)*

Update the value on `key` passed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key used to access the Storage value |
`value` | string | Value to be set  |

**Returns:** *void*
