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
```typescript
createCell: (val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<ICell>;
```
创建一个条码字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: string | IOpenTextSegment[] | IOpenTextSegment) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTextSegment[]>;
```
通过 `Record` 来获取对应的值

## setOnlyMobile
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<IFieldRes>;
```
设置是否只有手机才可以输入

## getOnlyMobile
```typescript
getOnlyMobile: () => Promise<boolean>;
```
获取是否只有手机才可以输入

