# Duplex 双向关联字段

类型定义 `IDuplexLinkField`，使用方法示例：
```typescript
const duplexLinkField = await table.getField<IDuplexLinkField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenLink = {
  text: string;
  /** 暂时只支持 "text" */
  type: string;
  recordIds: string[];
  tableId: string;
};
```
## createCell
```typescript
createCell: (val: IOpenLink) => Promise<ICell>;
```
创建一个双向关联字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenLink) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenLink>;
```
通过 `Record` 来获取对应的值

## setTableId
```typescript
setTableId: (tableId: string) => Promise<IFieldRes>;
```
设置关联的 `table`

## getTableId
```typescript
getTableId: () => Promise<string>;
```
获取关联的 `tableId`

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
设置是否允许关联多条记录

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
获取是否允许关联多条记录

