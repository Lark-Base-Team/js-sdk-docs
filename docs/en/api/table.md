# Table Module
The Table module can be understood as a database for the current data table, which does not involve the UI display of various views (for example, getting the order of fields under Table is unordered, while getting fields under View is ordered).

After obtaining the Table through `Base`, you can call the API in Table. The most common method to get a Table is `getActiveTable`:
```typescript
const table = await bitable.base.getActiveTable()
```

# Methods in Table Module
### getName
```typescript
getName: () => Promise<string>;
```
Get the name of the table.

# Field Related
## Add Field
### addField
```typescript
addField: (fieldConfig: IAddFieldConfig) => Promise<IFieldRes>;
```
Add a new field and return the corresponding field id.
```typescript
type IAddFieldConfig = {
  type: FieldType;
  property?: FieldProperty;
}

type IFieldRes = string;
```
It is recommended to only pass the type parameter, and set the properties after creating the field using the corresponding field-specific methods.
```typescript
const singleSelectField = await table.addField({ type: FieldType.SingleSelect });
const singleField = await table.getField<ISingleSelectField>(singleSelectField);
await singleField.addOption('Option1');
```
In the example above, we first added a single select field, and then added an option on this field (It is recommended to specify the corresponding type `<ISingleSelectField>` when getting the field to obtain better syntax prompts).

### onFieldAdd
```typescript
onFieldAdd(callback: (ev: IEventCbCtx) => void): () => void;
```
Listen to the Field add event.

## Set Field
### setField
Modify the field properties.
```typescript
setField(fieldId: string, fieldConfig: ISetFieldConfig): Promise<IFieldRes>;
```
### onFieldModify
```typescript
onFieldModify(callback: (ev: IEventCbCtx) => void): () => void;
```
Listen to the Field modify event.

## Get Field Information
### getFieldIdList
The `fieldIdList` obtained through this method is unordered because `table` is only at the database level and not at the view (UI display) level. Therefore, it is unordered. If you need to obtain an ordered list, you need to call `view.getFieldIdList` in the `View` to obtain the ordered field IDs.
```typescript
getFieldIdList(): Promise<string[]>;
```
Get an array of field ids.

### getFieldMetaById
```typescript
getFieldMetaById(fieldId: string): Promise<IFieldMeta>;
```
Get the corresponding field information by id. The data structure definition of field information:
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

### getFieldMetaList
The `fieldMetaList` obtained through this method is unordered because the `table` is only at the database level and not at the view (UI display) level. Therefore, it is unordered. If you need to obtain an ordered list, you need to call `view.getFieldMetaList` in the `View` to obtain the corresponding ordered field `meta`.
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
Get all field information. The data structure definition of field information:
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

### isFieldExist
```typescript
isFieldExist(fieldId: string): Promise<boolean>;
```
Check if a field exists by passing the field id.
# Fields

Fields are the columns in a table that define the structure and data types of the records. This section describes the methods available for working with fields in an Open API table.

## Get Field List by Type

```typescript
getFieldListByType: <T extends IField>(type: FieldType) => Promise<T[]>;
```

This method retrieves a list of fields of a specific type. The `FieldType` parameter is an enum that represents the type of field to retrieve. The method returns a promise that resolves to an array of fields of the specified type. Here's an example:

```typescript
const attachmentFieldList = await table.getFieldListByType<IAttachmentField>(FieldType.Attachment);
```

In this example, we retrieve a list of attachment fields and define the expected type as `IAttachmentField` to get proper type checking and intellisense support.

## Get Field Meta List by Type

```typescript
getFieldMetaListByType: <T extends IFieldMeta>(type: FieldType) => Promise<T[]>;
```

This method retrieves a list of field meta data for fields of a specific type. The `FieldType` parameter is an enum that represents the type of field to retrieve. The method returns a promise that resolves to an array of field meta data objects. The field meta data object has the following properties:

```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
  // Determines the property type based on the field type
  property: T
}
```

You can also specify the expected type of the `property` property by passing in the corresponding type parameter. Here's an example:

```typescript
const attachmentMetaList = await table.getFieldMetaListByType<IAttachmentFieldMeta>(FieldType.Attachment)
```

In this example, we retrieve a list of attachment field meta data and define the expected type as `IAttachmentFieldMeta` to get proper type checking and intellisense support.

## Get Field by ID or Name

```typescript
getField: <T extends IField>(idOrName: string) => Promise<T>;
```

This method retrieves a field by its ID or name. You can specify the expected type of the field by passing in the corresponding type parameter. Here's an example:

```typescript
const field = await table.getField<IAttachmentField>(idOrName);
```

In this example, we retrieve a field by its ID or name and define the expected type as `IAttachmentField` to get proper type checking and intellisense support.

## Get Field by Name

```typescript
getFieldByName: <T extends IField>(name: string) => Promise<T>;
```

This method retrieves a field by its name. You can specify the expected type of the field by passing in the corresponding type parameter. Here's an example:

```typescript
const field = await table.getFieldByName<IAttachmentField>(name);
```

In this example, we retrieve a field by its name and define the expected type as `IAttachmentField` to get proper type checking and intellisense support.

## Get Field by ID

```typescript
getFieldById: <T extends IField>(id: string) => Promise<T>;
```

This method retrieves a field by its ID. You can specify the expected type of the field by passing in the corresponding type parameter. Here's an example:

```typescript
const field = await table.getFieldById<IAttachmentField>(id);
```

In this example, we retrieve a field by its ID and define the expected type as `IAttachmentField` to get proper type checking and intellisense support.

## Get Field List

```typescript
getFieldList: <T extends IField>() => Promise<T[]>;
```

This method retrieves the list of fields in the table. You can specify the expected type of the fields by passing in the corresponding type parameter. Here's an example:

```typescript
const fieldList = await table.getFieldList();
```

In this example, we retrieve the list of fields and define the expected type as `IAttachmentField` to get proper type checking and intellisense support.

## Delete Field

```typescript
deleteField: (fieldOrId: string | IField) => Promise<boolean>;
```

This method deletes a field from the table. You can pass in the field object or its ID as the parameter. Here's an example:

```typescript
await table.deleteField(attachmentField);
```

In this example, we delete the `attachmentField` field. The `attachmentField` object can be obtained using the `table.getField` method.

## Field Delete Event

```typescript
onFieldDelete(callback: (ev: IEventCbCtx) => void): () => void;
```

This method registers a callback function to be called when a field is deleted from the table. The callback function receives an event context object as the parameter. Here's an example:

```typescript
table.onFieldDelete((ev) => {
  console.log(`Field ${ev.fieldId} deleted`);
});
```

In this example, we register a callback function that logs a message when a field is deleted.
# Record API
## Add Record
### addRecord
```typescript
addRecord: (recordVale?: IRecordValue | ICell | ICell[]) => Promise<IRecordRes>;
```
Add a new record. If adding multiple records, it is recommended to use addRecords to improve performance. ICell can be created using the createCell method of each field. If using RecordValue, the data structure is as follows:
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
It is recommended to use the createCell method of Field to create Cell, and then insert a record by combining cells. Here is an example:
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
The attachmentField can be obtained through the `table.getField` method.

### addRecords
```typescript
addRecords: (record?: IRecordValue[] | ICell[] | Array<ICell[]>) => Promise<IRecordRes[]>;
```
Add multiple records. ICell can be created using the createCell method of each field. If using RecordValue, the data structure is as follows:
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
It is recommended to use the createCell method of Field to create Cell, and then insert multiple records by combining cells. Here is an example:
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
The attachmentField can be obtained through the `table.getField` method.

### addRecordByCell
```typescript
addRecordByCell: (cells: ICell[]) => Promise<IRecordRes>;
```
Add a record using Cell and return the corresponding RecordId.
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
The attachmentField can be obtained through the `table.getField` method.

### addRecordsByCell
```typescript
addRecordsByCell: (cells: Array<ICell[]>) => Promise<IRecordRes[]>;
```
Add multiple records using Cell and return an array of corresponding RecordIds.
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
The attachmentField can be obtained through the `table.getField` method.

### onRecordAdd
```typescript
onRecordAdd(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```
Listen to the Record Add event.

## Get Record
### getRecordById
```typescript
getRecordById(recordId: string): Promise<IRecordValue>;
```
Get the record by id. IRecordValue is defined as follows:
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```

### getRecords
```typescript
getRecords(param: IGetRecordsParams): Promise<IGetRecordsResponse>;
```
Batch get records, with a maximum of 500 records at a time. The parameter type is defined as follows:
```typescript
interface IGetRecordsParams {
  pageSize?: number; // The number of records to get, default is 500, and the maximum is 500
  pageToken?: string; // The page token, not filled in for the first request, indicating to start from the beginning; when there are more results in the page query, a new pageToken will be returned at the same time, and the next traversal can use this pageToken to get the query result
  viewId?: string;  // Get records of the specified view. When filter/sort is passed in, this attribute will be ignored.
}
```
The return value is defined as follows:
```typescript
interface IGetRecordsResponse {
  total: number;
  hasMore: boolean;
  records: IRecord[];
  pageToken?: string;
}
```
Where IRecord is defined as follows:
```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```

### getRecordList
```typescript
getRecordsList(filter?: Formula, sort?: Sort): Promise<IRecordList>;
```
Call `getRecordList` to retrieve the current array of records and then use the encapsulated methods to perform operations on the data, for example:
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
  const cell = await record.getCellByField(fieldId);
  const val = await cell.getValue();
}
```
For more usage examples, you can refer to the [Record module](./record.md).

### getRecordIdList

```typescript
getRecordIdList(filter?: string, sort?: string): Promise<string[]>;
```

Get the ids of the records in the table.

### getCellValue

```typescript
getCellValue(fieldId: string, recordId: string): Promise<IOpenCellValue>;
```

Get the value of a cell (it is recommended to use Field to get the value instead).

### getCellAttachmentUrls

:::warning
The temporary link returned by the interface is valid for 10 minutes.
:::

```typescript
getCellAttachmentUrls(tokens: string[], fieldId: string, recordId: string): Promise<string[]>;
```

Get the URLs of the attachments in the current attachment cell (it is recommended to use AttachmentField to get the URLs, AttachmentField can get the attachment URLs by passing in the Record/RecordId parameter).

[//]: # (### getCellThumbnailUrls)

[//]: # (::: danger)

[//]: # (The current API does not support the use of all Base.)

[//]: # (:::)

[//]: # ()
[//]: # (```typescript)

[//]: # (getCellThumbnailUrls&#40;tokens: string[], fieldId: string, recordId: string&#41;: Promise<string[]>;)

[//]: # (```)

Get the preview URLs of the attachments in the current attachment cell (it is recommended to use AttachmentField to get the URLs, AttachmentField can get the attachment URLs by passing in the Record/RecordId parameter).

### getRecordShareLink

```typescript
getRecordShareLink(recordId: string)
```

Get the sharing link for a specific record.

## Set Record Values

### setCellValue

```typescript
setCellValue<T extends IOpenCellValue = IOpenCellValue>(fieldId: string, recordId: string, cellValue: T): Promise<boolean>;
```

Set the value of a cell (it is recommended to use Field to set the value instead).

### setRecord

```typescript
setRecord(recordId: string, recordValue?: IRecordValue): Promise<IRecordRes>;
```

Set the value of a Record and return the corresponding RecordId. The data format of IRecordValue is as follows:

```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```

It is recommended to set the value through Field (Field.setValue).

### setRecords

```typescript
setRecords(records?: IRecord[]): Promise<IRecordRes[]>;
```

Set the values of multiple Records and return the corresponding RecordIds. The data format of IRecord is as follows:

```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```

### getCellString

```typescript
getCellString(fieldId: string, recordId: string): Promise<string>;
```

Get the cell value and convert it to a string format.

### onRecordModify

```typescript
onRecordModify(callback: (ev: IEventCbCtx<{
  recordId: string;
  fieldIds: string[];
}>) => void): () => void;
```

Listen for Record modification events.

## Delete Records

### deleteRecord

```typescript
deleteRecord(recordId: string): Promise<boolean>;
```

Delete a record by RecordId.

### deleteRecords

```typescript
deleteRecords(recordIdList: string[]): Promise<boolean>;
```

Delete multiple records by an array of RecordIds.

### onRecordDelete

```typescript
onRecordDelete(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```

Listen for Record deletion events.

# View Related

## Get Views

### getActiveView
```typescript
getActiveView: () => Promise<IView>;
```
Get current view

### getViewById
```typescript
getViewById: (id: string) => Promise<IView>;
```

Get a view by its id.

### getViewList

```typescript
getViewList: () => Promise<IView[]>;
```

Get a list of views.

### getViewMetaById

```typescript
getViewMetaById(viewId: string): Promise<IViewMeta>;
```

Get the view information by its id. The type definition of IViewMeta is as follows:

```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

### getViewMetaList

```typescript
getViewMetaList(): Promise<IViewMeta[]>;
```

Get a list of all view information. The type definition of IViewMeta is as follows:

```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

### isViewExist

```typescript
isViewExist(viewId: string): Promise<boolean>;
```

Check if a view exists by its viewId.