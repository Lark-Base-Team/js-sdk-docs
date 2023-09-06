# API Guide

> It is recommended to start reading from the [Quick Start](../start.md)

Based on the knowledge from the [Quick Start](../start.md), you should have a preliminary understanding of the multidimensional table model. This article will help you reinforce your understanding of this model, making it easier to design plugins and query the API.

`bitable` is the entry point for all APIs. It does not have any API interfaces itself, but it has three properties: `base`, `ui`, and `bridge`. We won't go into detail about the functions of these modules here, but we will explain some common usage patterns.

## Base Module

Most API calls are made through the `base` module because the APIs for manipulating multidimensional tables, such as CRUD operations, are located under `base`. Here is an example:

```typescript
import { bitable } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
```

The purpose of `getActiveTable` is to get the currently selected `table` on the page. There are many other interfaces available to get a `table` from the `Base` module, which can be found in the [documentation](./base).

## Table Module and Field Module
Once you have obtained a `table`, you can perform many operations on the data, such as CRUD.

Again, it is recommended to manipulate data from the perspective of `field`, because the data in each cell is determined by the field type it belongs to. Therefore, when performing CRUD operations using fields, there are many optimizations that can be made. Here is an example:

```typescript
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const attachemntCell = await attachmentField.createCell(file);
await table.addRecord(attachmentCell);
```

In this example, we obtain an `attachmentField` (attachment field) by using the `fieldId`. When obtaining this field, we pass an important thing: `IAttachmentField`. This is a type parameter that tells TypeScript that we are getting an attachment field. Therefore, when calling `attachmentField.createCell(file)`, we can get sufficient type hints, indicating that we can construct an attachment cell by directly passing in a `File / File[] / FileList`.

Then we call the `table.addRecord(attachmentCell)` method to insert this cell into the table (add a record). The `table.addRecord` method also supports passing in `Cell[]` parameters to create a more complete record.

In addition, the `IAttachmentField` (attachment field) has several convenient APIs for developers:

```typescript
const attachmentUrls = await attachmentField.getAttachmentUrls(recordId);
```

Because the attachment field does not store the actual URLs, multiple steps are required to obtain the actual URLs. However, when considering from the perspective of the field, we can implement these steps in the methods of the field itself. Therefore, it is still highly recommended that you consider data manipulation, field property settings, etc. from the perspective of the field.

In addition to `IAttachmentField`, we have defined many other field types. You can read more about them in the [Field Guide](field/guide.md). The Table module also has more API methods for developers to use.

## Cell Module
In the previous section, the `Cell` constructed using the `attachmentField.createCell` method is also a very important module. When performing data insertion operations, we recommend that developers use `Field` to construct `Cell` and insert data. Once a `Cell` is successfully inserted into a `Table`, it will be associated with a record. At this time, when performing `getValue/setValue`, it will be associated with real-time data. You can change the value of the corresponding cell in the table as follows:

```typescript
await attachmentCell.setValue(newFile);
```

After `setValue` is successfully executed, the value of the corresponding cell in the table will change. For more API usage, you can refer to the corresponding [documentation](cell.md).

## Record Module
The Record module is mainly used to store data. You can find the API documentation [here](record.md).

## UI Module and Bridge Module
[UI Module Documentation](ui.md)

[Bridge Module Documentation](bridge.md)