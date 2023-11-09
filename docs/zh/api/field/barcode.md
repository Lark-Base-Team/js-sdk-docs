# Barcode 条码字段
类型定义 `IBarcodeField`，使用方法示例：
```typescript
const barcodeField = await table.getField<IBarcodeField>(fieldId);
```
其中对应的数据类型为：
```typescript
export type IOpenTextSegment = { type: IOpenSegmentType.Text; text: string };
```

## createCell
创建一个条码字段的 `Cell`
```typescript
createCell: (val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<ICell>;
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
const cell = await barcodeField.createCell('barcode');
await table.addRecord(cell);
```


## getCell
通过对应的记录(`Record`) 来获取对应的 `Cell`
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
const cell = await barcodeField.getCell(recordId);
```

## setValue
通过对应的记录(`Record`) 来设置对应的值
```typescript
setValue: (recordOrId: IRecordType | string, val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<boolean>;
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
await barcodeField.setValue('barcode');
```

## getValue
通过 `Record` 来获取对应的值
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTextSegment[]>;

type IOpenTextSegment = {
  type: IOpenSegmentType.Text;
  text: string;
};
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
const val = await barcodeField.getValue(recordId);
```

## setOnlyMobile
设置是否只有手机才可以输入, 为 true 时表示只允许手机输入
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<boolean>;
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
await barcodeField.setOnlyMobile(true);
```

## getOnlyMobile
获取是否只有手机才可以输入, 为 true 时表示只允许手机输入
```typescript
getOnlyMobile: () => Promise<boolean>;
```
### 示例
```typescript
import { bitable, IBarcodeField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const barcodeField = await table.getField<IBarcodeField>(fieldId);
await barcodeField.getOnlyMobile();
```


