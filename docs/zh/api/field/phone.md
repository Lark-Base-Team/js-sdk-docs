# Phone 电话字段
类型定义 `IPhoneField`，使用方法示例：
```typescript
const phoneField = await table.getField<IPhoneField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenPhone = string;
```

## createCell
```typescript
createCell: (val: number | IOpenPhone) => Promise<ICell>;
```
创建一个数字字段的 `Cell`

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: number | IOpenPhone) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```
通过 `Record` 来获取对应的值
