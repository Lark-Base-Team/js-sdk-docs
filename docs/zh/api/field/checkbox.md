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
创建一个复选框字段的 `Cell`
```typescript
createCell: (val: boolean) => Promise<ICell>;
```
### 示例
```typescript
import { bitable, ICheckBoxField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const checkBoxField = await table.getField<ICheckBoxField >(fieldId);
const cell = await checkBoxField.createCell(false);
await table.addRecord(cell);
```

## getCell
通过对应的 `Record` 来获取对应的 `Cell`
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
### 示例
```typescript
import { bitable, ICheckBoxField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const checkBoxField = await table.getField<ICheckBoxField>(fieldId);
const cell = await checkBoxField.getCell(recordId);
```

## setValue
通过 `Record` 来设置对应的值
```typescript
setValue: (recordOrId: IRecordType | string, val: boolean) => Promise<boolean>;
```
### 示例
```typescript
import { bitable, ICheckBoxField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const checkBoxField = await table.getField<ICheckBoxField>(fieldId);
await checkBoxField.setValue(recordId, false);
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenCheckbox>;
type IOpenCheckbox = boolean;
```
通过 `Record` 来获取对应的值
### 示例
```typescript
import { bitable, ICheckBoxField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const checkBoxField = await table.getField<ICheckBoxField>(fieldId);
await checkBoxField.getValue(recordId);
```