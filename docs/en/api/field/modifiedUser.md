# ModifiedUser Field
::: danger
The ModifiedUser field cannot be set a value.
:::
The type definition of `IModifiedUserField` is as follows:
```typescript
type IModifiedUserField = {
  getValue: (recordOrId: IRecordType | string) => Promise<IOpenUser[]>;
  getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
}
```
The corresponding data type is:
```typescript
type IOpenUser = {
  id: string;
  name?: string;
  enName?: string;
  email?: string;
};
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUser[]>;
```
Get the value of the ModifiedUser field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Get the cell of the ModifiedUser field for the corresponding record.