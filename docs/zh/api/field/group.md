# Group 群组字段
类型定义 `IGroupField`，使用方法示例：
```typescript
const groupField = await table.getField<IGroupField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenGroupChat = {
  id: string;
  name: string;
  avatarUrl: string;
  enName?: string;
  // 群链接 token
  linkToken?: string;
  /** @deprecated */
  en_name?: string;
};
```

## createCell
```typescript
createCell: (val: IOpenGroupChat[]) => Promise<ICell>;
```
创建一个群组字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenGroupChat[]) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenGroupChat[]>;
```
通过 `Record` 来获取对应的值

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
设置是否可以多选

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
获取是否可以多选