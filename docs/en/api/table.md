# Table Module
The Table module can be understood as a database for the current data table, which does not involve the UI display of various views (for example, the order of getting fields under a table is unordered, while getting fields under a view is ordered).

After obtaining the Table through `Base`, you can call the APIs in the Table module. The most common method to get a Table is `getActiveTable`:
```typescript
const table = await bitable.base.getActiveTable()
```

## getName
```typescript
getName: () => Promise<string>;
```
Gets the table name.

## addField
```typescript
addField: (fieldConfig: IAddFieldConfig) => Promise<IFieldRes>;
```
Adds a new field and returns the corresponding field ID.
```typescript
type IAddFieldConfig = {
  type: FieldType;
  property?: FieldProperty;
}

type IFieldRes = string;
```
It is recommended to only pass the type parameter and set the properties after creating the field using the corresponding field-specific methods.
```typescript
const singleSelectField = await table.addField({ type: FieldType.SingleSelect });
const singleField = await table.getField<ISingleSelectField>(singleSelectField);
await singleField.addOption('Option1');
```
In the example above, we first add a single select field, and then add an option to this field (it is recommended to specify the corresponding type `<ISingleSelectField>` when obtaining the field to get better syntax prompts).

## setField
Modifies the field properties.
```typescript
setField(fieldId: string, fieldConfig: ISetFieldConfig): Promise<IFieldRes>;
```

## getFieldMetaById
```typescript
getFieldMetaById(fieldId: string): Promise<IFieldMeta>;
```
Gets the field information corresponding to the ID. The data structure definition of the field information is as follows:
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
Gets all field information. The data structure definition of the field information is as follows:
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

## isFieldExist
```typescript
isFieldExist(fieldId: string): Promise<boolean>;
```
Checks if the field exists based on the field ID.

## getFieldListByType
```typescript
getFieldListByType: <T extends IField>(type: FieldType) => Promise<T[]>;
```
Gets the fields corresponding to the FieldType (field type enumeration). When calling this function, you can pass the expected field type to get syntax prompts in subsequent development. Here is an example:
```typescript
const attachmentFieldList = await table.getFieldListByType<IAttachmentField>(FieldType.Attachment);
```
In this example, I specify the expected `IAttachmentField` field type when getting the field, so that I can get syntax prompts for the `IAttachmentField` field type in subsequent development.

## getFieldMetaListByType
```typescript
getFieldMetaListByType: <T extends IFieldMeta>(type: FieldType) => Promise<T[]>;
```
Gets the meta data of the fields corresponding to the FieldType (field type enumeration). The type definition for the meta data is as follows:
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
  // determined based on the field type
  property: T
}
```
When getting the corresponding meta data, you can pass the corresponding type to get the exact type (mainly to determine the `property` type). Here is an example:
```typescript
const attachmentMetaList = await table.getFieldMetaListByType<IAttachmentFieldMeta>(FieldType.Attachment)
```

## getField
```typescript
getField: <T extends IField>(idOrName: string) => Promise<T>;
```
Gets the corresponding field (Field) based on the ID or name. It is recommended to pass the Field type (such as `<IAttachmentField>`) to get better syntax prompts.
```typescript
const Field = await table.getField<IAttachmentField>(idOrName);
```
## getFieldByName
```typescript
getFieldByName: <T extends IField>(name: string) => Promise<T>;
```
Get the corresponding `Field` by `name`. It is recommended to pass in the `Field` type (e.g. `<IAttachmentField>`) for better syntax highlighting.
```typescript
const Field = await table.getFieldByName<IAttachmentField>(idOrName);
```

## getFieldById
```typescript
getFieldById: <T extends IField>(id: string) => Promise<T>;
```
Get the corresponding `Field` by `id`. It is recommended to pass in the `Field` type (e.g. `<IAttachmentField>`) for better syntax highlighting.
```typescript
const Field = await table.getFieldById<IAttachmentField>(idOrName);
```

## getFieldList
```typescript
getFieldList: <T extends IField>() => Promise<T[]>;
```
Get the FieldList under the current table.
```typescript
const fieldList = await table.getFieldList();
```

## addRecord
```typescript
addRecord: (recordVale?: IRecordValue | ICell | ICell[]) => Promise<IRecordRes>;
```
Add a record (if adding multiple records, it is recommended to use `addRecords` to avoid performance issues). ICell can be created using the `createCell` method of each field (Field) ([specific implementation method](cell.md)). If using RecordValue to create, the data structure is as follows:
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
The return value `IRecordRes` is the recordId of the inserted record.
```typescript
type IRecordRes = string;
```
It is recommended to use the `Field.createCell` method to create the Cell, and then insert a record by combining the cells. Here is an example:
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
The attachmentField can be obtained by using the `table.getField` method.

## addRecords
```typescript
addRecords: (record?: IRecordValue[] | ICell[] | Array<ICell[]>) => Promise<IRecordRes[]>;
```
Add multiple records. ICell can be created using the `createCell` method of each field (Field) ([specific implementation method](cell.md)). If using RecordValue to create, the data structure is as follows:
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
The return value `IRecordRes` is an array of recordIds of the inserted records.
```typescript
type IRecordRes = string;
```
It is recommended to use the `Field.createCell` method to create the Cell, and then insert multiple records by combining the cells. Here is an example:
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
The attachmentField can be obtained by using the `table.getField` method.

## addRecordByCell
```typescript
addRecordByCell: (cells: ICell[]) => Promise<IRecordRes>;
```
Add a record (Record) by Cell and return the corresponding RecordId.
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
The attachmentField can be obtained by using the `table.getField` method.

## addRecordsByCell
```typescript
addRecordsByCell: (cells: Array<ICell[]>) => Promise<IRecordRes[]>;
```
Add multiple records (Records) by Cell and return an array of corresponding RecordIds.
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
The attachmentField can be obtained by using the `table.getField` method.

## deleteField
```typescript
deleteField: (fieldOrId: string | IField) => Promise<boolean>;
```
Delete a field (Field).
```typescript
await table.deleteField(attachmentField);
```
The attachmentField can be obtained by using the `table.getField` method.

## getViewById
```typescript
getViewById: (id: string) => Promise<IView>;
```
Get the view by id.
```typescript
const view = await table.getViewById(id);
```

## getViewList
```typescript
getViewList: () => Promise<IView[]>;
```
Get the ViewList.
```typescript
const viewList = await table.getViewList();
```
## getViewMetaById
```typescript
getViewMetaById(viewId: string): Promise<IViewMeta>;
```
Retrieve the information of a view by its id. The type definition of IViewMeta is as follows:
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

## getViewMetaList
```typescript
getViewMetaList(): Promise<IViewMeta[]>;
```
Get the information of all views and return them as an array. The type definition of IViewMeta is as follows:
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

## isViewExist
```typescript
isViewExist(viewId: string): Promise<boolean>;
```
Check if a view exists by its viewId.

## getRecordById
```typescript
getRecordById(recordId: string): Promise<IRecordValue>;
```
Retrieve a record by its id. The type definition of IRecordValue is as follows:
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```

## getRecords
```typescript
getRecords(param: IGetRecordsParams): Promise<IGetRecordsResponse>;
```
Batch retrieve records with a maximum limit of 500 records per request. The parameter type definition is as follows:
```typescript
interface IGetRecordsParams {
  pageSize?: number; // The number of records to retrieve, default is 500, maximum is 500
  pageToken?: string; // The page token used for pagination, not required for the first request, and will be returned in the response for subsequent requests
  filter?: string; // The filter condition for the records
  sort?: string; // The sort condition for the records
  viewId?: string;  // The viewId for retrieving records in a specific view, if filter/sort is provided, this will be ignored
}
```
The response definition is as follows:
```typescript
interface IGetRecordsResponse {
  total: number;
  hasMore: boolean;
  records: IRecord[];
  pageToken?: string;
}
```
The type definition of IRecord is as follows:
```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```

## getRecordIdList
```typescript
getRecordIdList(filter?: string, sort?: string): Promise<string[]>;
```
Get a list of record ids in the table.

## getCellValue
```typescript
getCellValue(fieldId: string, recordId: string): Promise<IOpenCellValue>;
```
Get the value of a specific cell (it is recommended to use Field to get the cell value).

## setCellValue
```typescript
setCellValue<T extends IOpenCellValue = IOpenCellValue>(fieldId: string, recordId: string, cellValue: T): Promise<boolean>;
```
Set the value of a specific cell (it is recommended to use Field to set the cell value).

## getAttachmentUrl
```typescript
getAttachmentUrl(token: string, fieldId?: string, recordId?: string): Promise<string>;
```
Get the URL of an attachment in the current attachment cell (it is recommended to use AttachmentField to get the attachment URL, AttachmentField can retrieve the attachment URL by passing in Record/RecordId as parameters).

## getCellAttachmentUrls
```typescript
getCellAttachmentUrls(tokens: string[], fieldId: string, recordId: string): Promise<string[]>;
```
Get the URLs of attachments in the current attachment cell (it is recommended to use AttachmentField to get the attachment URLs, AttachmentField can retrieve the attachment URLs by passing in Record/RecordId as parameters).

## getCellThumbnailUrls
```typescript
getCellThumbnailUrls(tokens: string[], fieldId: string, recordId: string): Promise<string[]>;
```
Get the preview URLs of attachments in the current attachment cell (it is recommended to use AttachmentField to get the attachment preview URLs, AttachmentField can retrieve the attachment preview URLs by passing in Record/RecordId as parameters).

## setRecord
```typescript
setRecord(recordId: string, recordValue?: IRecordValue): Promise<IRecordRes>;
```
Set the data of a record and return the corresponding recordId. The data format of IRecordValue is as follows:
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
It is recommended to use Field to set the value (Field.setValue).

## setRecords
```typescript
setRecords(records?: IRecord[]): Promise<IRecordRes[]>;
```
Set the data of multiple records and return the corresponding recordIds. The data format of IRecord is as follows:
```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```
## deleteRecord
```typescript
deleteRecord(recordId: string): Promise<boolean>;
```
Delete the corresponding record by RecordId.

## deleteRecords
```typescript
deleteRecords(recordIdList: string[]): Promise<boolean>;
```
Delete multiple records corresponding to the RecordId array.

## getCellString
```typescript
getCellString(fieldId: string, recordId: string): Promise<string>;
```
Get cellValue and convert it to string format.

## getFieldIdList
```typescript
getFieldIdList(): Promise<string[]>;
```
Get the array of field ids.

## onFieldAdd
```typescript
onFieldAdd(callback: (ev: IEventCbCtx) => void): () => void;
```
Listen for Field add events.

## onFieldDelete
```typescript
onFieldDelete(callback: (ev: IEventCbCtx) => void): () => void;
```
Listen for Field delete events.

## onFieldModify
```typescript
onFieldModify(callback: (ev: IEventCbCtx) => void): () => void;
```
Listen for Field modify events.

## onRecordAdd
```typescript
onRecordAdd(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```
Listen for Record add events.

## onRecordDelete
```typescript
onRecordDelete(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```
Listen for Record delete events.

## onRecordModify
```typescript
onRecordModify(callback: (ev: IEventCbCtx<{
  recordId: string;
  fieldIds: string[];
}>) => void): () => void;
```
Listen for Record modify events.