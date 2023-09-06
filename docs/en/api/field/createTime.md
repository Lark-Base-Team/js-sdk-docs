# CreateTime Field

The `CreateTime` field represents the creation time of a record. It is a read-only field and cannot be set manually.

To use the `CreateTime` field, you need to retrieve it from the table using the `getField` method:

```typescript
const createTimeField = await table.getField<ICreateTimeField>(fieldId);
```

The corresponding data type for the `CreateTime` field is `IOpenTimestamp`, which represents a Unix timestamp in milliseconds.

## Methods

### getValue

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTimestamp>;
```

This method retrieves the creation time of a record. You need to provide either the record object or the record ID as the parameter.

### getCell

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

This method retrieves the cell of the `CreateTime` field for a specific record. You need to provide either the record object or the record ID as the parameter.

### setDateFormat

```typescript
setDateFormat: (format: DateFormatter) => Promise<IFieldRes>;
```

This method sets the date format for the `CreateTime` field. The `format` parameter should be one of the following options from the `DateFormatter` enum:

- `DATE_YMD_WITH_SLASH`: "yyyy/MM/dd" (e.g., "2021/01/30")
- `DATE_TIME`: "yyyy/MM/dd HH:mm" (e.g., "2021/01/30 14:00")
- `DATE_TIME_WITH_HYPHEN`: "yyyy-MM-dd HH:mm" (e.g., "2021-01-30 14:00")
- `DATE_YMD_WITH_HYPHEN`: "yyyy-MM-dd" (e.g., "2021-01-30")
- `DATE_MD_WITH_HYPHEN`: "MM-dd" (e.g., "01-30")
- `DATE_MMDD_WITH_SLASH`: "MM/dd/yyyy" (e.g., "01/30/2021")
- `DATE_DDMM_WITH_SLASH`: "dd/MM/yyyy" (e.g., "30/01/2021")

### getDateFormat

```typescript
getDateFormat: () => Promise<DateFormatter>;
```

This method retrieves the current date format for the `CreateTime` field. It returns a `DateFormatter` value representing the current date format.