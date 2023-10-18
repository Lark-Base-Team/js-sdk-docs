# Number Field
The type definition for the `INumberField` is as follows:
```typescript
const numberField = await table.getField<INumberField>(fieldId);
```
The corresponding data type is:
```typescript
type IOpenNumber = number;
```

## createCell
```typescript
createCell: (val: number) => Promise<ICell>;
```
Creates a cell for the number field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell value for the specified record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: number) => Promise<boolean>;
```
Sets the value of the number field for the specified record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```
Gets the value of the number field for the specified record.

## setFormatter
```typescript
setFormatter: (formatter: NumberFormatter) => Promise<IFieldRes>;
```
Sets the number format for the field. The `NumberFormatter` enum is defined as follows:
```typescript
enum NumberFormatter {
  INTEGER = '0',
  DIGITAL_ROUNDED_1 = '0.0',
  DIGITAL_ROUNDED_2 = '0.00',
  DIGITAL_ROUNDED_3 = '0.000',
  DIGITAL_ROUNDED_4 = '0.0000',
  DIGITAL_THOUSANDS = '1,000',
  DIGITAL_THOUSANDS_DECIMALS = '1,000.00',
  PERCENTAGE_ROUNDED = '0%',
  PERCENTAGE = '0.00%',
}
```

## getFormatter
```typescript
getFormatter: () => Promise<NumberFormatter>;
```
Gets the current number format for the field. The `NumberFormatter` enum is defined as follows:
```typescript
enum NumberFormatter {
  INTEGER = '0',
  DIGITAL_ROUNDED_1 = '0.0',
  DIGITAL_ROUNDED_2 = '0.00',
  DIGITAL_ROUNDED_3 = '0.000',
  DIGITAL_ROUNDED_4 = '0.0000',
  DIGITAL_THOUSANDS = '1,000',
  DIGITAL_THOUSANDS_DECIMALS = '1,000.00',
  PERCENTAGE_ROUNDED = '0%',
  PERCENTAGE = '0.00%',
}
```