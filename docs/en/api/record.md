# Record module
In the `Table` module, you can use the `getRecordList` interface to get the `RecordList`. The `RecordList` can be iterated through using a `for...of` loop, as shown below:
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
}
```
The `record` object contains the APIs available for the current page. In addition to this, the `RecordList` also contains APIs to retrieve specific `Record` objects using their `recordId`:
```typescript
const record = await recordList.getRecordById(recordId);
```
However, it is recommended to consider using [`Field`](field/guide.md) when performing data manipulation operations.

## getCell
```typescript
getCellList: () => Promise<ICell[]>;
```
Retrieves all the `Cell` objects in the current record (see [`Cell`](cell.md)).

## getCellByField
```typescript
getCellByField: (fieldOrId: IField | string) => Promise<ICell>;
```
Retrieves the `Cell` object for a specified Field (see [`Cell`](cell.md)).