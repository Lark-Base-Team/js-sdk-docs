# Base 模块
获取 `base` 的的方法

```typescript
const base = bitable.base
```

## getActiveTable
```typescript
getActiveTable: () => Promise<ITable>;
```
`getActiveTable` 是用来获取当前的 `table` 
```typescript
const table = await base.getActiveTable();
```

## getTable
```typescript
getTable(idOrName: string): Promise<ITable>
```
传入 `table` 的名称或者 ID 都可以获取到 `table`
```typescript
const table = await base.getTable(idOrName);
```

## getTableById
```typescript
getTableById(id: string): ITable[];
```
通过 `id` 来获取对应的 `table`
```typescript
const tableById = await base.getTableById(id);
```

## getTableByName
```typescript
getTableByName(name: string): Promise<ITable>
```
传入 `table` 的名称都可以获取到 `table`
```typescript
const table = await base.getTableByName(name);
```

## getTableList
```typescript
getTableList: () => Promise<ITable[]>;
```
获取所有的 `table` 
```typescript
const tableList = await base.table.getTableList();
```

## getSelection
读取当前 `tableId` 等信息
```typescript
const { tableId, viewId } = await base.getSelection();
```

## getTableMetaList
```typescript
getTableMetaList(): Promise<TableMeta[]>
```
获取当前 `base` 下所有表元信息
```typescript
const tableMetaList = await base.getTableMetaList();
```

## getPermission
```typescript
getPermission(params: GetPermissionParams): Promise<boolean>;
```
获取 Base、Table、Field、Record、Cell 等不同实体的权限，当返回 true 的时候表示有权限，返回为 false 的时候没有权限

其中 `GetPermissionParams` 的类型定义如下：
```typescript
type GetPermissionParams = BasePermissionParams | TablePermissionParams | RecordPermissionParams | FieldPermissionParams | CellPermissionParams;

interface BasePermissionParams {
  entity: PermissionEntity.Base;
  type: BaseOperation;
}

interface TablePermissionParams {
  entity: PermissionEntity.Table;
  param: {
    tableId?: string;
  };
  type: TableOperation;
}

interface RecordPermissionParams {
  entity: PermissionEntity.Record;
  param: {
    tableId: string;
    recordId?: string;
  };
  type: RecordOperation;
}

interface FieldPermissionParams {
  entity: PermissionEntity.Field;
  param: {
    tableId: string;
    fieldId?: string;
  };
  type: FieldOperation;
}

interface CellPermissionParams {
  entity: PermissionEntity.Cell;
  param: {
    tableId: string;
    recordId?: string;
    fieldId?: string;
  };
  type: CellOperation;
}
```
使用的时候，需要传入对应的配置，来查询对应的权限, 下面展示一个查询字段权限的例子

```typescript
const fieldInfo: FieldPermissionParams = {
  entity: PermissionEntity.Field,
  params: {
    tableId,
    fieldId,
  },
  type: OperationType.Editable,
}
const hasPermission = await base.getPermission(params);
```
我们传入对应的 `entity` 是确定查询的对象为 `field`，`params` 是用来获取需要判断权限的 `field` 具体信息，`type` 则是的权限类型，在这里就是判断是否有编辑的权限。

## isEditable
```typescript
gisEditable(): Promise<boolean>;
```
是否可以编辑
```typescript
const isEditable = await base.isEditable();
```

## batchUploadFile
```typescript
batchUploadFile(file: File[] | FileList): Promise<string[]>;
```
批量上传文件，按序返回每个文件对应的 fileToken 列表，如果只是想创建一条带有附件的记录/修改附件单元格数据，建议查看 xxxx。

## onTableAdd
```typescript
onTableDelete(callback: () => void): () => void;
```
监听 Table 添加事件

## onTableDelete
```typescript
onTableDelete(callback: () => void): () => void;
```
监听 Table 删除事件

## onSelectionChange
```typescript
onSelectionChange(callback: () => void): () => void;
```
监听选中改变事件

## onPermissionChange
```typescript
onPermissionChange(callback: () => void): () => void;
```
监听权限变化
