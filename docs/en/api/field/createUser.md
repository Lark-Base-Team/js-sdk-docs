# CreateUser field
::: danger
The CreateUser field cannot be set a value.
:::
The type definition is `ICreateUserField` and can be used as follows:
```typescript
const createUserField = await table.getField<ICreateUserField>(fieldId);
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
Get the value of the CreateUser field.

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Get the corresponding Cell using the corresponding Record.