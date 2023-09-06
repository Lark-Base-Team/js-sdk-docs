# Checkbox Field

The Checkbox field is a type of field that represents a checkbox input. It can be used to store boolean values (true or false).

To work with a Checkbox field, you can use the `ICheckBoxField` interface. Here is an example of how to use it:

```typescript
const checkboxField = await table.getField<ICheckBoxField>(fieldId);
```

The corresponding data type for a Checkbox field is `boolean`.

## Methods

### createCell

This method creates a new cell for the Checkbox field with the specified value.

```typescript
createCell: (val: boolean) => Promise<ICell>;
```

### getCell

This method retrieves the cell for the Checkbox field from the specified record.

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

### setValue

This method sets the value of the Checkbox field in the specified record.

```typescript
setValue: (recordOrId: IRecordType | string, val: boolean) => Promise<boolean>;
```

### getValue

This method retrieves the value of the Checkbox field from the specified record.

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<boolean>;
```

These methods allow you to interact with Checkbox fields in order to create, retrieve, set, and get the values of the field in your records.