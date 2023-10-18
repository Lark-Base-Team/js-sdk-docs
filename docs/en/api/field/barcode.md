# Barcode Field
The type definition for `IBarcodeField` is as follows:
```typescript
const barcodeField = await table.getField<IBarcodeField>(fieldId);
```
The corresponding data type is:
```typescript
export type IOpenTextSegment = { type: IOpenSegmentType.Text; text: string };
```

## createCell
```typescript
createCell: (val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<ICell>;
```
Creates a cell for the barcode field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell for the barcode field using the corresponding record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<boolean>;
```
Sets the value for the barcode field using the corresponding record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTextSegment[]>;
```
Gets the value for the barcode field using the corresponding record.

## setOnlyMobile
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<IFieldRes>;
```
Sets whether only mobile devices can input values for the barcode field.

## getOnlyMobile
```typescript
getOnlyMobile: () => Promise<boolean>;
```
Gets whether only mobile devices can input values for the barcode field.