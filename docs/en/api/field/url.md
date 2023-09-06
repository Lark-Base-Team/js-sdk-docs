# UrlField Text Field
Definition of `IUrlField` with usage example:
```typescript
const urlField = await table.getField<IUrlField>(fieldId);
```
The corresponding data type is:
```typescript
type IOpenUrlSegment = {
  type: IOpenSegmentType.Url;
  text: string;
  link: string;
};

export type UrlTransformVal = string | IOpenUrlSegment | IOpenUrlSegment[];
```

## createCell
```typescript
createCell: (val: UrlTransformVal) => Promise<ICell>;
```
Creates a cell for a URL field. Developers can specify the format by providing the text, and URLs will be converted to corresponding hyperlinks.

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell for the corresponding record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: UrlTransformVal) => Promise<boolean>;
```
Sets the value of the URL field for the specified record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUrlSegment[]>;
```
Gets the value of the URL field for the specified record.