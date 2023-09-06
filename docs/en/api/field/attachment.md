# Attachment Field
The Attachment field represents a field that can store attachments, such as files or images. It provides methods to manage and manipulate attachment data.

To use the Attachment field, you need to define its type as `IAttachmentField` and retrieve the field using the `getField` method of the table object. Here's an example:

```typescript
const attachmentField = await table.getField<IAttachmentField>(fieldId);
```

The `IAttachmentField` type defines the following properties for an attachment:

```typescript
type IOpenAttachment = {
  name: string;
  size: number;
  type: string; // mime
  token: string;
  timeStamp: number;
};
```

## getAttachmentThumbnailUrls
```typescript
getAttachmentThumbnailUrls: (recordOrId: IRecordType | string) => Promise<string[]>;
```

This method retrieves the thumbnail URLs of the attachments associated with a record. It returns a Promise that resolves to an array of thumbnail URLs. This method is useful for displaying previews of attachments.

## getAttachmentUrls
```typescript
getAttachmentUrls: (recordOrId: IRecordType | string) => Promise<string[]>;
```

This method retrieves the URLs of the attachments associated with a record. It returns a Promise that resolves to an array of attachment URLs.

## setOnlyMobile
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<IFieldRes>;
```

This method sets whether the attachment field can only be filled on mobile devices. It accepts a boolean value indicating whether only mobile devices are allowed. It returns a Promise that resolves to an `IFieldRes` object.

## getOnlyMobile
```typescript
getOnlyMobile: () => Promise<boolean>;
```

This method retrieves whether the attachment field can only be filled on mobile devices. It returns a Promise that resolves to a boolean value indicating whether only mobile devices are allowed.

## createCell
```typescript
createCell: (val: File | File[] | FileList | IOpenAttachment | IOpenAttachment[]) => Promise<ICell>;
```

This method creates a new cell for the attachment field. It accepts a value representing the attachment, such as a File object or an array of File objects. It returns a Promise that resolves to an `ICell` object representing the new cell.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>
```

This method retrieves the cell for the attachment field associated with a record. It accepts a record object or record ID as a parameter. It returns a Promise that resolves to the `ICell` object representing the cell.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: AttachmentTransformVal ) => Promise<boolean>;
```

This method sets the value of the attachment field for a record. It accepts a record object or record ID as the first parameter and the attachment value as the second parameter. The attachment value can be a File object, an array of File objects, or an array of `IOpenAttachment` objects. It returns a Promise that resolves to a boolean indicating whether the value was successfully set.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAttachment[]>;
```

This method retrieves the value of the attachment field for a record. It accepts a record object or record ID as a parameter. It returns a Promise that resolves to an array of `IOpenAttachment` objects representing the attachments.