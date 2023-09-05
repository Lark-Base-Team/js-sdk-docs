# Cell 模块

Cell 模块可以简单理解为表格视图中的单元格，可以 `get/set value`，cell 的获取方式主要有以下几种：
1. 通过字段来创建一个 `Cell`，此时的 `Cell` 是没有插入 `Table` 的，所以在 `set/get value` 时都不会对 `table` 有任何影响, 
此时的 `Cell` 最大的用途是用来作为 `addRecord/addRecords` 的参数
```typescript
const cell = await field.createCell(val);
````
2. 通过 `Field` 来获取一个 `Cell` 此时的 `Cell` 是从 `Table` 中获取的,所以在 `set/get value` 时都会对 `table` 有影响在 `setValue` 时会实时改变对应 `table` 中的数据
```typescript
const cell = await field.getCell(recordOrId)
```
3. 通过 `Record` 获取 `Cell`, `record` 有两个接口都是获取 `Cell` 的, 通过 `record` 获取的 `Cell` 都是与 `table` 相关联的因此在 `set/get Value` 时都会对 `table` 有影响

```typescript
const cellList = await record.getCellList();
const cell = await record.getCellByField(fieldOrId);
``` 

更推荐通过 `Field` 来对 `Cell` 进行操作，因为会有足够的类型提示，每一个 `Cell` 的类型定义都会有准确的补全，因此会有更好的语法提示，例如：
```typescript
const attachmentCell = await attachmentField.getCell(recordOrId);
await attachmentCell.setValue(newImageFile);
```
在通过 `attachmentField` 获取 `cell` 之后，在 `setValue` 会告知开发者，可以传入 `File/File[]/FileList`，来实现设置值

`Cell` 可以用 `Field` 调用 `createCell` 来创建，创建出来的 `Cell` 可以用做 `addRecord`
 的参数，因此可以很方便的用来插入数据，利用 `Cell` 来插入数据，也是较为推荐的做法(从字段角度来思考数据的增删改查)：
```typescript
const attachmentCell = await attachmentField.createCell(imageFileList);
const singleSelectCell = await singleSelectField.createCell('option1');
const recordId = await table.addRecord([attachmentCell, singleSelectCell]);
```

## editable
```typescript
editable: boolean;
```
在多维表格中，并不是所有的字段都支持编辑（例如创建人/创建时间字段），因此可以通过该属性查看是否可以编辑

## setValue
```typescript
setValue: (val: V) => Promise<void | boolean>;
```
设置一个单元格的值，当单元格已经插入 `Table` 后，会实时改变 `Table` 中的值

## getValue
```typescript
getValue: () => Promise<R>;
```
获取一个单元格的值，当单元格已经插入 `Table` 后，会获取 `Table` 中的值

## getFieldId
```typescript
getFieldId: () => string;
```
获取当前单元格所属的字段的 `id`

