# Lookup Field
Type definition `ILookupField`, usage example:
```typescript
const lookupField = await table.getField<ILookupField>(fieldId);
```

## createCell
```typescript
createCell: (val: IOpenFormulaCellValue) => Promise<ICell>;
```
Creates a cell for the lookup field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell for the corresponding record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenFormulaCellValue) => Promise<boolean>;
```
Sets the value of the lookup field for the corresponding record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenFormulaCellValue>;
```
Gets the value of the lookup field for the corresponding record.