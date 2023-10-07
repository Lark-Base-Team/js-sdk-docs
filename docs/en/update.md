# Upgrade Guide for Old Versions

Currently, many developers are using version 0.2.x of the JS SDK. The API version with significant changes is 0.3.x, and developers can directly upgrade to version 0.3.x without any break changes. The current JS SDK can be found at [npm address](https://www.npmjs.com/package/@lark-base-open/js-sdk).

The major difference in the new version is the refinement of field operations. We recommend developers to first retrieve the fields and then implement the corresponding capabilities. When retrieving the fields, it is strongly recommended to pass the corresponding field types to get comprehensive syntax hints. For example, in the following example, `IAttachmentField` is used:

```typescript
const attachmentField = await table.getField<IAttachmentField>(attachmentFieldId);
```

Users can upgrade by updating the package version of `@lark-base-open/js-sdk` to 0.3.x.

# Improved Convenience in the New Version Compared to the Old Version

## Optimized Way to Retrieve Tables
In the old version, to retrieve a table using the API:
```typescript
const { tableId } = await bitable.base.getSelection();
const table = await bitable.base.getTableById(tableId);
```
Many developers have written similar template code. In the new API, we have optimized this process and made it possible to retrieve a table in one step:
```typescript
const table = await bitable.base.getActiveTable();
```

## Improved CRUD Operations on Data for Developers
In the old version, it was cumbersome to perform CRUD operations on data. In the new version, we have made a significant improvement. Taking the attachment field as an example, we can add attachment data in the following way:
```typescript
const attachmentField = await table.getField<IAttachmentField>(attachmentFieldId);
const attachmentCell = await attachmentField.createCell(File);
const recordId = await table.addRecord(attachmentCell);
```
This is a new way to add a record. We first retrieve the corresponding attachment field (`table.getField<IAttachmentField>(attachmentFieldId)`) and then create an attachment cell using the `createCell` method of this field (you can directly pass the file to this method without the need for file upload operations). Finally, we insert this cell into the `table` using the `addRecord` method to add a record with attachment data. We have made similar optimizations for other types of fields as well. For more details, please refer to the [API](api/guide.md) section.

## Refined Fields and Optimized Field Property Settings
In the old version, setting field properties was very complex and often lacked proper syntax hints. In the new version, we have optimized this process to allow users to conveniently set field properties. For example, in the new version, you can add an option to a single select field as follows:
```typescript
const singleSelectField = await table.getField<ISingleSelectField>(singleSelectFieldId);
await singleSelectField.addOption('option1');
```
Similar to the optimized CRUD operations on data, we first retrieve the corresponding field and then call a specific method of that field.

## Summary
In the new version of the API, we have optimized the data structure from the perspective of fields. For more related content, please refer to the [API](api/guide.md) section. We welcome users to try it out. 👏