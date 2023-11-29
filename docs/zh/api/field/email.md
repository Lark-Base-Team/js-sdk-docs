# EmailField 邮箱字段
类型定义 `IEmailField`，使用方法示例：
```typescript
const emailField = await table.getField<IEmailField>(fieldId);
```

## createCell
```typescript
createCell: (val: string) => Promise<ICell>;
```
创建一个邮箱字段的 `Cell`，开发者只需要输入邮箱字符串即可，字符串需要满足邮箱格式。

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`。

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: string) => Promise<boolean>;
```
设置指定单元格的值，第二个参数需要满足邮箱格式。

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<string>;
```
通过 `Record` 来获取对应的值。
