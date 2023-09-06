# Phone Field
Type definition `IPhoneField`, usage example:
```typescript
const phoneField = await table.getField<IPhoneField>(fieldId);
```
The corresponding data type is:
```typescript
type IPhone = string;
```

## createCell
```typescript
createCell: (val: number | IPhone) => Promise<ICell>;
```
Creates a cell for the phone field with the specified value.

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell for the phone field from the specified record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: number | IPhone) => Promise<boolean>;
```
Sets the value of the phone field for the specified record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IPhone>;
```
Gets the value of the phone field from the specified record.