# Group Field

The `IGroupField` interface is used to define the methods and properties of a Group field. Here is an example of how to use it:

```typescript
const groupField = await table.getField<IGroupField>(fieldId);
```

The corresponding data type is defined as follows:

```typescript
type IOpenGroupChat = {
  id: string;
  name: string;
  avatarUrl: string;
  enName?: string;
  // Group link token
  linkToken?: string;
  /** @deprecated */
  en_name?: string;
};
```

## createCell
```typescript
createCell: (val: IOpenGroupChat[]) => Promise<ICell>;
```
Creates a new cell for the Group field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell value for the Group field based on a record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenGroupChat[]) => Promise<boolean>;
```
Sets the cell value for the Group field based on a record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenGroupChat[]>;
```
Gets the cell value for the Group field based on a record.

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
Sets whether multiple values can be selected for the Group field.

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
Gets whether multiple values can be selected for the Group field.