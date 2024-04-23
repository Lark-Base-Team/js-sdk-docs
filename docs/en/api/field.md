# Field Module
The Field module represents the columns in a data table (Table). The field type determines the data type of the column. For example, a multi-line text field can contain text, links, and other data, while a person field can contain personnel information.

There are multiple ways to retrieve a field, mostly through the [Table module](table). Here's an example:
```typescript
const singleSelectField = await table.getField<ISingleSelectField>(fieldNameOrId);
```
An important point here is that we specify the type `<ISingleSelectField>` when calling the `getField` method. We highly recommend using this approach as it provides sufficient type hints. For example, we can easily add a new option to this single select field:
```typescript
await singleSelectField.addOption('Option1');
```
In addition to setting field properties, we also recommend performing CRUD operations on values from a field perspective. For example:
```typescript
await singleSelectField.setValue(recordOrId, 'Option2');
```
The data type of a multidimensional table is determined by its column type. Therefore, it is straightforward and convenient to perform CRUD operations on data from a column perspective. We provide convenient methods for many fields. Here's an example of using a `Field` to create a record:
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
await table.addRecord(attachmentCell);
```