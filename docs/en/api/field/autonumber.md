# Autonumber Field
::: danger
Autonumber fields cannot be set with a value.
:::

The type definition for autonumber fields is `IAutonumberField`. You can use it like this:

```typescript
const autonumberField = await table.getField<IAutonumberField>(fieldId);
```

The corresponding data type is:

```typescript
export type IOpenAutoNumber = string;
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAutoNumber>;
```

This method is used to get the value of an autonumber field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

This method is used to get the cell of an autonumber field using the corresponding record.