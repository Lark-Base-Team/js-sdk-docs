# Duplex Bidirectional Link Field

Type definition `IDuplexLinkField`, usage example:
```typescript
const duplexLinkField = await table.getField<IDuplexLinkField>(fieldId);
```
The corresponding data type is:
```typescript
type IOpenLink = {
  text: string;
  /** Only "text" is currently supported */
  type: string;
  recordIds: string[];
  tableId: string;
};
```
## createCell
```typescript
createCell: (val: IOpenLink) => Promise<ICell>;
```
Create a cell for the bidirectional link field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Get the cell for the corresponding record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenLink) => Promise<boolean>;
```
Set the value for the corresponding record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenLink>;
```
Get the value for the corresponding record.

## setTableId
```typescript
setTableId: (tableId: string) => Promise<IFieldRes>;
```
Set the associated table.

## getTableId
```typescript
getTableId: () => Promise<string>;
```
Get the associated table ID.

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
Set whether to allow multiple record associations.

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
Get whether multiple record associations are allowed.