# Record 模块
在 `Table` 中，可以通过 `getRecordList` 接口获取到 `RecordList`，`RecordList` 是可以遍历使用的，使用后方式如下
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
}
```
其中 `record` 中就有当前页面含有的 API，在 `RecordList` 中，还含有通过 `recordId` 来获取指定 `Record` 对象的 API
```typescript
const record = await recordList.getRecordById(recordId);
```
不过，还是更推荐开发者在对数据进行增删改查时，从 [`Field(字段)`](field/guide.md) 来考虑

## getCell
```typescript
getCellList: () => Promise<ICell[]>;
```
获取当前记录中所有的 `Cell`(关于 [`Cell`](cell.md))

## getCellByField
```typescript
getCellByField: (fieldOrId: IField | string) => Promise<ICell>;
```
通过 Field 来获取 `Cell`(关于 [`Cell`](cell.md))