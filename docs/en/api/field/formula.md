# Formula Field

The formula field represents a field in a table that contains a formula. It calculates its value based on the values of other fields in the same record or in related records.

## Interface Definition

The `IFormulaField` interface extends the `IDuplexLinkField` interface.

```typescript
interface IFormulaField extends IDuplexLinkField {
  createCell(val: IOpenFormulaCellValue): Promise<ICell>;
  getCell(recordOrId: IRecordType | string): Promise<ICell>;
  setValue(recordOrId: IRecordType | string, val: IOpenFormulaCellValue): Promise<boolean>;
  getValue(recordOrId: IRecordType | string): Promise<IOpenFormulaCellValue>;
}
```

## Methods

### createCell

Creates a new cell in the formula field with the specified value.

```typescript
createCell(val: IOpenFormulaCellValue): Promise<ICell>
```

- `val`: The value to set in the cell.

### getCell

Gets the cell in the formula field for the specified record.

```typescript
getCell(recordOrId: IRecordType | string): Promise<ICell>
```

- `recordOrId`: The record or record ID to get the cell for.

### setValue

Sets the value of the cell in the formula field for the specified record.

```typescript
setValue(recordOrId: IRecordType | string, val: IOpenFormulaCellValue): Promise<boolean>
```

- `recordOrId`: The record or record ID to set the value for.
- `val`: The value to set in the cell.

### getValue

Gets the value of the cell in the formula field for the specified record.

```typescript
getValue(recordOrId: IRecordType | string): Promise<IOpenFormulaCellValue>
```

- `recordOrId`: The record or record ID to get the value for.

## Usage

To use the formula field methods, you can first retrieve the formula field from the table:

```typescript
const formulaField = await table.getField<IFormulaField>(fieldId);
```

Then, you can use the methods on the formula field to interact with the cells and values in the field.