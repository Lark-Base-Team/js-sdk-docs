# Autonumber 自动编号字段
::: danger
AutoNumber 自动编号字段无法设置值
:::
类型定义 `IAutonumberField`，使用方法示例：
```typescript
const autonumberField = await table.getField<IAutonumberField>(fieldId);
```
其中对应的数据类型为：
```typescript
export type IOpenAutoNumber = string;
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAutoNumber>;
```
获取自动编号的值

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`


