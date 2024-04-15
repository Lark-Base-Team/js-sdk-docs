# Record Module
::: warning
It is recommended for developers to consider data manipulation from the perspective of [`Field`](field.md) fields.
:::
In the `Table`, you can use the `getRecordList` interface to get a `RecordList` (an array collection of Record records, which includes all the records in the current table). The `RecordList` can be traversed and used in the following way (not recommended, as it may have performance-related issues):
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
  const cell = await record.getCellByField(fieldId);
  const val = await cell.getValue();
}
```
`Cell` can be considered as a cell in a table, which contains the corresponding value (about [`Cell`](cell.md)):
```typescript
const record = await recordList.getRecordById(recordId);
```
However, it is still recommended for developers to consider data manipulation from the perspective of [`Field`](field.md) when performing CRUD operations on data.

## getCellList
```typescript
getCellList: () => Promise<ICell[]>;
```
Get all the `Cell`s in the current record (about [`Cell`](cell.md)).

## getCellByField
```typescript
getCellByField: (fieldOrId: IField | string) => Promise<ICell>;
```
Get the `Cell` by Field (about [`Cell`](cell.md)).