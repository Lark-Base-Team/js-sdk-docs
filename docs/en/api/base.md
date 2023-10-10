# Base Module
Methods to retrieve information from the `base` module.

```typescript
const base = bitable.base;
```

## getActiveTable
```typescript
getActiveTable: () => Promise<ITable>;
```
`getActiveTable` is used to retrieve the currently active table.
```typescript
const table = await base.getActiveTable();
```

## getTable
```typescript
getTable(idOrName: string): Promise<ITable>
```
Retrieves a table by its name or ID.
```typescript
const table = await base.getTable(idOrName);
```

## getTableById
```typescript
getTableById(id: string): ITable[];
```
Retrieves a table by its ID.
```typescript
const tableById = await base.getTableById(id);
```

## getTableByName
```typescript
getTableByName(name: string): Promise<ITable>
```
Retrieves a table by its name.
```typescript
const table = await base.getTableByName(name);
```

## getTableList
```typescript
getTableList: () => Promise<ITable[]>;
```
Retrieves all tables in the base.
```typescript
const tableList = await base.table.getTableList();
```

## getSelection
Retrieves the current tableId and other information.
```typescript
const { tableId, viewId } = await base.getSelection();
```

## getTableMetaList
```typescript
getTableMetaList(): Promise<TableMeta[]>
```
Retrieves the metadata of all tables in the base.
```typescript
const tableMetaList = await base.getTableMetaList();
```

## getPermission
```typescript
getPermission(params: GetPermissionParams): Promise<boolean>;
```
Retrieves the permission for Base, Table, Field, Record, Cell, and other entities. Returns `true` if the permission exists, `false` otherwise.

The `GetPermissionParams` type is defined as follows:
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
When using this method, you need to pass in the corresponding configuration to query the corresponding permission. Below is an example of querying field permissions:

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
In this example, we pass in the `entity` to specify that we want to query field permissions, `params` is used to specify the field we want to check, and `type` is the type of permission we want to check (in this case, editable permission).

## isEditable
```typescript
isEditable(): Promise<boolean>;
```
Checks if the current user has the permission to edit.
```typescript
const isEditable = await base.isEditable();
```

## batchUploadFile
```typescript
batchUploadFile(file: File[] | FileList): Promise<string[]>;
```
Uploads multiple files and returns a list of fileTokens corresponding to each file.

## onTableDelete
```typescript
onTableDelete(callback: () => void): () => void;
```
Listens for table add events.

## onTableAdd
```typescript
onTableAdd(callback: () => void): () => void;
```
Listens for table delete events.

## onSelectionChange
```typescript
onSelectionChange(callback: () => void): () => void;
```
Listens for selection change events.

## onPermissionChange
```typescript
onPermissionChange(callback: () => void): () => void;
```
Listens for permission change events.