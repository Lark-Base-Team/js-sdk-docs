# Progress 进度字段
类型定义 `IProgressField`，使用方法示例：
```typescript
const progressField = await table.getField<IProgressField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenNumber = number;
```

## createCell
```typescript
createCell: (val: IOpenNumber) => Promise<ICell>;
```
创建一个进度字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenNumber) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```
通过 `Record` 来获取对应的值
