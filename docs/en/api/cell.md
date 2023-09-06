# Cell Module

The Cell module can be understood as a cell in a table view. It can `get/set value`. There are several ways to retrieve a cell:

1. Create a `Cell` by using a field. In this case, the `Cell` is not inserted into a `Table`, so setting/getting values will not affect the table. The main purpose of this type of `Cell` is to be used as a parameter for `addRecord/addRecords`.

```typescript
const cell = await field.createCell(val);
```

2. Get a `Cell` by using a `Field`. In this case, the `Cell` is retrieved from the `Table`, so setting/getting values will affect the table. Setting a value will update the corresponding data in the `Table`.

```typescript
const cell = await field.getCell(recordOrId);
```

3. Get a `Cell` by using a `Record`. There are two interfaces in a `Record` that can be used to retrieve a `Cell`. The `Cell` obtained through the `Record` is associated with the `Table`, so setting/getting values will affect the table.

```typescript
const cellList = await record.getCellList();
const cell = await record.getCellByField(fieldOrId);
```

It is recommended to use the `Field` to perform operations on the `Cell`, as it provides better type hints and autocomplete suggestions for each `Cell` type. For example:

```typescript
const attachmentCell = await attachmentField.getCell(recordOrId);
await attachmentCell.setValue(newImageFile);
```

After obtaining the `cell` through `attachmentField`, the `setValue` method will inform developers that they can pass in `File/File[]/FileList` to set the value.

`Cell` can be created using the `createCell` method of a `Field`. The created `Cell` can be used as a parameter for `addRecord`, making it convenient to insert data. Using a `Cell` to insert data is also a recommended practice (thinking about data manipulation from the perspective of fields):

```typescript
const attachmentCell = await attachmentField.createCell(imageFileList);
const singleSelectCell = await singleSelectField.createCell('option1');
const recordId = await table.addRecord([attachmentCell, singleSelectCell]);
```

## editable
```typescript
editable: boolean;
```

In a multi-dimensional table, not all fields support editing (e.g., creator/creation time fields). This property can be used to check if a field is editable.

## setValue
```typescript
setValue: (val: V) => Promise<void | boolean>;
```

Sets the value of a cell. If the cell is already inserted into a `Table`, the value in the `Table` will be updated in real-time.

## getValue
```typescript
getValue: () => Promise<R>;
```

Gets the value of a cell. If the cell is already inserted into a `Table`, it will retrieve the value from the `Table`.

## getFieldId
```typescript
getFieldId: () => string;
```

Gets the ID of the field to which the current cell belongs.