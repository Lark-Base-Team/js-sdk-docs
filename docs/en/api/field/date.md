# Date Field
The type definition for `IDateTimeField` is used to represent a date field in a record. Here is an example of how to use it:

```typescript
const dateTimeField = await table.getField<IDateTimeField>(fieldId);
```

The corresponding data type for a date field is:

```typescript
type IOpenTimestamp = number;
```

## createCell
```typescript
createCell: (val: IOpenTimestamp) => Promise<ICell>;
```
Creates a cell for the date field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Retrieves the cell for the date field from the specified record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenTimestamp) => Promise<boolean>;
```
Sets the value of the date field for the specified record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTimestamp>;
```
Retrieves the value of the date field from the specified record.

## setDateFormat
```typescript
setDateFormat: (format: DateFormatter) => Promise<IFieldRes>;
```
Sets the date format for the date field. The `DateFormatter` enum defines the available formats.

## getDateFormat
```typescript
getDateFormat: () => Promise<DateFormatter>;
```
Retrieves the date format for the date field. The `DateFormatter` enum defines the available formats.

The `DateFormatter` enum has the following values:

```typescript
enum DateFormatter {
  DATE_YMD_WITH_SLASH = 'yyyy/MM/dd', // 2021/01/30
  DATE_TIME = 'yyyy/MM/dd HH:mm', // 2021/01/30 14:00
  DATE_TIME_WITH_HYPHEN = 'yyyy-MM-dd HH:mm', // 2021-01-30 14:00
  DATE_YMD_WITH_HYPHEN = 'yyyy-MM-dd', // 2021-01-30
  DATE_MD_WITH_HYPHEN = 'MM-dd', // 01-30
  DATE_MMDD_WITH_SLASH = 'MM/dd/yyyy', // 01/30/2021
  DATE_DDMM_WITH_SLASH = 'dd/MM/yyyy', // 30/01/2021
}
```