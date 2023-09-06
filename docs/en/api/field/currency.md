# Currency Field

The Currency Field interface `ICurrencyField` is used to perform operations on currency fields. You can retrieve a currency field using the `getField` method on a table.

```typescript
const currencyField = await table.getField<ICurrencyField>(fieldId);
```

## createCell

Creates a new cell with the specified currency value.

```typescript
createCell: (val: number) => Promise<ICell>;
```

## getCell

Retrieves the cell with the specified currency value for a given record.

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

## setValue

Sets the currency value for a given record.

```typescript
setValue: (recordOrId: IRecordType | string, val: number) => Promise<boolean>;
```

## getValue

Retrieves the currency value for a given record.

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<number>;
```

## setDecimalDigits

Sets the number of decimal digits for the currency field.

```typescript
setDecimalDigits: (decimalDigits: number) => Promise<IFieldRes>;
```

## getDecimalDigits

Retrieves the number of decimal digits for the currency field.

```typescript
getDecimalDigits: () => Promise<number>;
```

## setCurrencyCode

Sets the currency code for the currency field.

```typescript
setCurrencyCode: (currencyCode: CurrencyCode) => Promise<IFieldRes>;
```

The `CurrencyCode` enum defines the available currency codes.

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

Retrieves the currency code for the currency field.

```typescript
getCurrencyCode: () => Promise<CurrencyCode>;
```