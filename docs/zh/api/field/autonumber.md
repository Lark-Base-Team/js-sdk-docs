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
获取自动编号的值
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAutoNumber>;
```
### 示例
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const autonumberField = await table.getField<IAutonumberField>(fieldId);
const val = await autonumberField.getValue(recordId);
```

## getCell
通过对应的 记录(`Record`) 来获取对应的 `Cell`
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
### 示例
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const autonumberField = await table.getField<IAutonumberField>(fieldId);
const cell = await autonumberField.getCell(recordId);
```


