# Lookup 查找引用字段
类型定义 `ILookupField`，使用方法示例：
```typescript
const lookupField = await table.getField<ILookupField>(fieldId);
```

## createCell
```typescript
createCell: (val: IOpenFormulaCellValue) => Promise<ICell>;
```
创建一个查找引用字段的 `Cell`

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenFormulaCellValue) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenFormulaCellValue>;
```
通过 `Record` 来获取对应的值
