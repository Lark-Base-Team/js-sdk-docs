# Text Field

The definition of the `ITextField` type is as follows:

```typescript
const textField = await table.getField<ITextField>(fieldId);
```

The corresponding data types are:

```typescript
type IOpenTextSegment = { type: IOpenSegmentType.Text; text: string };

type IOpenUrlSegment = {
  type: IOpenSegmentType.Url;
  text: string;
  link: string;
};

type IOpenSegment = IOpenTextSegment | IOpenUrlSegment | IOpenUserMentionSegment | IOpenDocumentMentionSegment;

type TextFieldTransformVal = string | IOpenSegment | IOpenSegment[];
```

## createCell

```typescript
createCell: (val: TextFieldTransformVal) => Promise<ICell>;
```

Creates a cell for the text field. Developers can specify the format by providing the text. URL links will be converted to corresponding hyperlinks.

## getCell

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

Gets the cell for the corresponding record.

## setValue

```typescript
setValue: (recordOrId: IRecordType | string, val: TextFieldTransformVal) => Promise<boolean>;
```

Sets the value for the corresponding record.

## getValue

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenSegment[]>;
```

Gets the value for the corresponding record.