# Number 数字字段
类型定义 `INumberField`，使用方法示例：
```typescript
const numberField = await table.getField<INumberField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenNumber = number;
```

## createCell
```typescript
createCell: (val: number) => Promise<ICell>;
```
创建一个数字字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: number) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```
通过 `Record` 来获取对应的值

## setFormatter
```typescript
setFormatter: (formatter: NumberFormatter) => Promise<IFieldRes>;
```
设置数字的格式,其中 `NumberFormatter` 的类型定义如下：
```typescript
enum NumberFormatter {
  INTEGER = '0',
  DIGITAL_ROUNDED_1 = '0.0',
  DIGITAL_ROUNDED_2 = '0.00',
  DIGITAL_ROUNDED_3 = '0.000',
  DIGITAL_ROUNDED_4 = '0.0000',
  DIGITAL_THOUSANDS = '1,000',
  DIGITAL_THOUSANDS_DECIMALS = '1,000.00',
  PERCENTAGE_ROUNDED = '0%',
  PERCENTAGE = '0.00%',
}
```

## getFormatter
```typescript
getFormatter: () => Promise<NumberFormatter>;
```
获取当前的数字格式,其中 `NumberFormatter` 的类型定义如下：
```typescript
enum NumberFormatter {
  INTEGER = '0',
  DIGITAL_ROUNDED_1 = '0.0',
  DIGITAL_ROUNDED_2 = '0.00',
  DIGITAL_ROUNDED_3 = '0.000',
  DIGITAL_ROUNDED_4 = '0.0000',
  DIGITAL_THOUSANDS = '1,000',
  DIGITAL_THOUSANDS_DECIMALS = '1,000.00',
  PERCENTAGE_ROUNDED = '0%',
  PERCENTAGE = '0.00%',
}
```

