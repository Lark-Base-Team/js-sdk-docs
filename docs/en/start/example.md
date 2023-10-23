# Currency Conversion Plugin

On the basis of the prepared development environment, let's develop a currency conversion plugin. First, the user needs to insert a currency field and fill in some data.

1. After the installation is completed, create a new ts file named `exchange-api.ts` in the src directory and copy the following content into it.
```typescript
import axios from 'axios';

interface ExchangeRatesResponse {
  rates: {
    [key: string]: number;
  };
  base: string;
  date: string;
}

export async function getExchangeRate(base: string, target: string): Promise<number | undefined> {
  try {
    const response = await axios.get<ExchangeRatesResponse>(`https://api.exchangerate-api.com/v4/latest/${base}`);
    const rate = response.data.rates[target];

    if (!rate) {
      throw new Error(`Exchange rate not found for target currency: ${target}`);
    }

    return rate;
  } catch (error) {
    console.info(`Error fetching exchange rate: ${(error as any).message}`);
  }
}
```
The logic of this part of the code is to obtain the real-time exchange rate. `base` refers to the current currency type, and `target` refers to the currency type to be converted. This API can obtain the exchange rate with two decimal places.

2. Create a new ts file named `const.ts` in the src directory, and copy the following content into it.
```typescript
import { CurrencyCode } from '@lark-base-open/js-sdk';

export const CURRENCY = [
  { label: 'CNY', value: CurrencyCode.CNY },
  { label: 'USD', value: CurrencyCode.USD },
  { label: 'EUR', value: CurrencyCode.EUR },
  { label: 'AED', value: CurrencyCode.AED },
  { label: 'BRL', value: CurrencyCode.BRL },
  { label: 'CAD', value: CurrencyCode.CAD },
  { label: 'CHF', value: CurrencyCode.CHF },
  { label: 'HKD', value: CurrencyCode.HKD },
  { label: 'INR', value: CurrencyCode.INR },
  { label: 'JPY', value: CurrencyCode.JPY },
  { label: 'MXN', value: CurrencyCode.MXN },
];
```
This file enumerates the currency types that can be converted. Since this is just a demo, the number of enumerations is limited.

3. Provide the user with the ability to select the currency field for conversion.

First, currency conversion is performed on the original field for currency value conversion, so we need to filter the currency type fields in the current `table` to allow users to select them. Here, we use the `Select` component to implement this action. Each option is a currency field that can be selected in the current `table`.

We modify the `LoadApp` function in `index.tsx`:

Define the `currencyFieldMetaList` to store the currency field information, as well as the `selectFieldId` to store the selected field ID for conversion and the `currency` to store the selected currency type for conversion.

```typescript
import { bitable, CurrencyCode, FieldType, ICurrencyField, ICurrencyFieldMeta } from '@lark-base-open/js-sdk';
import { CURRENCY } from './const';

function LoadApp() {
  const [info, setInfo] = useState('get table name, please waiting ....');
  const [infoType, setInfoType] = useState('info');
  const [currencyFieldMetaList, setMetaList] = useState<ICurrencyFieldMeta[]>([])
  const [selectFieldId, setSelectFieldId] = useState<string>();
  const [currency, setCurrency] = useState<CurrencyCode>();
```

Modify the `useEffect` function to get the currency field information in the current `table` when the page is rendered.

```typescript
useEffect(() => {
  const fn = async () => {
    const table = await bitable.base.getActiveTable();
    const tableName = await table.getName();
    setInfo(`The table Name is ${tableName}`);
    setInfoType('success');
    const fieldMetaList = await table.getFieldMetaListByType<ICurrencyFieldMeta>(FieldType.Currency);
    setMetaList(fieldMetaList);
  };
  fn();
}, []);
```

In order, I will explain the relevant APIs used here:
+ `bitable.base.getActiveTable`: Get the current `table`. After obtaining the `table`, you can perform operations on the data.
+ `table.getFieldMetaListByType<ICurrencyFieldMeta>(FieldType.Currency)`: Get the corresponding field information by field type.

Then we modify the rendered component to meet the user's interactive requirements.

```typescript
const formatFieldMetaList = (metaList: ICurrencyFieldMeta[]) => {
  return metaList.map(meta => ({ label: meta.name, value: meta.id }));
};

return <div>
  <Alert message={info} type={alertType}/>
  <div style={{ margin: 10 }}>
    <div>Select Field</div>
    <Select style={{ width: 120 }} onSelect={setSelectFieldId} options={formatFieldMetaList(currencyFieldMetaList)}/>
  </div>
  <div style={{ margin: 10 }}>
    <div>Select Currency</div>
    <Select options={CURRENCY} style={{ width: 120 }} onSelect={setCurrency}/>
  </div>
</div>
```

Now, users can select the field and the currency type they want to convert. Next, we will implement the logic to convert the currency value.

4. Implementing Currency Conversion Logic

First, we import the API for getting exchange rates:
```typescript
import { CURRENCY } from './const';
import { getExchangeRate } from './exchange-api'; // [!code ++]
```
Next, we prepare a conversion button and the conversion function:
```typescript
const transform = async () => { // [!code ++]
}// [!code ++]

return <div>
  <div style={{ margin: 10 }}>
    <div>Select Field</div>
    <Select style={{ width: 120 }} onSelect={setSelectFieldId} options={formatFieldMetaList(currencyFieldMetaList)}/>
  </div>
  <div style={{ margin: 10 }}>
    <div>Select Currency</div>
    <Select options={CURRENCY} style={{ width: 120 }} onSelect={setCurrency}/>
    <Button style={{ marginLeft: 10 }} onClick={transform}>transform</Button>// [!code ++]
  </div>
```
Next, we implement the most important step: the currency conversion and value conversion for currency fields in the `transform` function:
```typescript
const transform = async () => {
  // If the user hasn't selected a currency or conversion field, do nothing
  if (!selectFieldId || !currency) return;
  const table = await bitable.base.getActiveTable();
  // Get the currency field, using the ICurrencyField interface to indicate that we are getting a currency field
  // With TypeScript, we get a lot of type hints to help with development when we restrict the type of the field
  const currencyField = await table.getField<ICurrencyField>(selectFieldId);
  const currentCurrency = await currencyField.getCurrencyCode();
  // Set the currency code
  await currencyField.setCurrencyCode(currency);
  // Get the exchange rate for the currency
  const ratio = await getExchangeRate(currentCurrency, currency);
  if (!ratio) return;
  // First, get the recordId
  const recordIdList = await table.getRecordIdList();
  // Iterate through the records
  for (const recordId of recordIdList) {
    // Get the current currency value
    const currentVal = await currencyField.getValue(recordId);
    // Calculate the new value using the exchange rate
    await currencyField.setValue(recordId, currentVal * ratio);
  }
}
```
In the above example, we pass in a restriction on the field type when getting the field, which provides us with enough type hints in the subsequent logic. This step is crucial, and we highly recommend developers to use a similar approach when getting fields to improve development experience.

When changing the currency type, we can use `CurrencyField.setCurrencyCode` to change the corresponding currency type. This is made possible by providing the type when getting the field (on this basis, it is also possible to make similar modifications to the options of single-select/multi-select fields).

When setting the currency value, we use `CurrencyField.getValue` to get the corresponding data, perform the calculation, and then use `CurrencyField.setValue` to fill in the result. We highly recommend developers to start with fields when performing CRUD operations on values. We have fine-tuned many field types to optimize the developer experience (for example, for attachment fields, you can directly pass in a file when calling `setValue` to set the corresponding value).

[Complete code for the Currency Conversion plugin](https://github.com/Lark-Base-Team/js-sdk-learn-demo/tree/feat-currency-plugin)