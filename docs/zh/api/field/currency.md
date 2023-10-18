# Currency 货币字段
类型定义 `ICurrencyField`，使用方法示例：
```typescript
const currencyField = await table.getField<ICurrencyField>(fieldId);
```

## createCell
```typescript
createCell: (val: number) => Promise<ICell>;
```
通过传入数值来创建对应的 `Cell`

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: number) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<number>;
```
通过 `Record` 来获取对应的值

## setDecimalDigits
```typescript
setDecimalDigits: (decimalDigits: number) => Promise<IFieldRes>;
```
设置货币精度

## getDecimalDigits
```typescript
getDecimalDigits: () => Promise<number>;
```
获取货币精度

## setCurrencyCode
```typescript
setCurrencyCode: (currencyCode: CurrencyCode) => Promise<IFieldRes>;
```
设置货币类型，其中 ` CurrencyCode` 的类型定义如下：
```typescript
export enum CurrencyCode {
  CNY = 'CNY',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  AED = 'AED',
  AUD = 'AUD',
  BRL = 'BRL',
  CAD = 'CAD',
  CHF = 'CHF',
  HKD = 'HKD',
  INR = 'INR',
  IDR = 'IDR',
  JPY = 'JPY',
  KRW = 'KRW',
  MOP = 'MOP',
  MXN = 'MXN',
  MYR = 'MYR',
  PHP = 'PHP',
  PLN = 'PLN',
  RUB = 'RUB',
  SGD = 'SGD',
  THB = 'THB',
  TRY = 'TRY',
  TWD = 'TWD',
  VND = 'VND',
}
```

## getCurrencyCode
```typescript
getCurrencyCode: () => Promise<CurrencyCode>;
```
获取货币类型