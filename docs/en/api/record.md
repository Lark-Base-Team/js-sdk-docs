# Record Module
::: warning
It is recommended that developers consider data operations from the perspective of [`Field`](field/guide.md) fields.
:::
In the `Table` module, you can use the `getRecordList` interface to obtain a `RecordList`. The `RecordList` can be iterated through using the following method:
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
  const cell = await record.getCellByField(fieldId);
  const val = await cell.getValue();
}
```
The `cell` can be considered as a cell in the table, which has a corresponding value (see [`Cell`](cell.md)).
```typescript
const record = await recordList.getRecordById(recordId);
```
However, it is still recommended that developers consider data operations from the perspective of [`Field`](field/guide.md) when performing CRUD operations on data.

## getCellList
```typescript
getCellList: () => Promise<ICell[]>;
```
Get all the `Cell`s in the current record (see [`Cell`](cell.md)).

## getCellByField
```typescript
getCellByField: (fieldOrId: IField | string) => Promise<ICell>;
```
Get the `Cell` by the Field (see [`Cell`](cell.md)).