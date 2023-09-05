# Checkbox 复选框字段
类型定义 `ICheckBoxField`，使用方法示例：
```typescript
const checkboxField = await table.getField<ICheckBoxField>(fieldId);
```
其中对应的数据类型为：
```typescript
export type IOpenCheckbox = boolean;
```

## createCell
```typescript
createCell: (val: boolean) => Promise<ICell>;
```
创建一个复选框字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: boolean) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenCheckbox>;
```
通过 `Record` 来获取对应的值