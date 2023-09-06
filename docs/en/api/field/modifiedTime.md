# ModifiedTime Field
::: danger
The ModifiedTime field cannot be set manually.
:::
The field type is defined as `IModifiedTimeField`. You can use the following code to get the field:

```typescript
const modifiedTimeField = await table.getField<IModifiedTimeField>(fieldId);
```

The corresponding data type is:

```typescript
type IOpenTimestamp = number;
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTimestamp>;
```
Get the modified time value.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Get the cell of the ModifiedTime field for a given record.

## setDateFormat
```typescript
setDateFormat: (format: DateFormatter) => Promise<IFieldRes>;
```
Set the date format for the ModifiedTime field. `format` should be one of the following values:

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

## getDateFormat
```typescript
getDateFormat: () => Promise<DateFormatter>;
```
Get the date format for the ModifiedTime field. The return value will be one of the following values:

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