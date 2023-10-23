# 实现一个货币转换的插件
在准备好开发环境的基础上，我们来开发一个货币转换插件，首先需要用户先插入一个货币字段，并填充一定的数据

1. 安装完成之后，在 src 目录下新建 ts 文件取名为 ``exchange-api.ts`` 并复制以下内容
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
这部分的代码逻辑是获取实时汇率，``base`` 指的是当前的货币类型 ``target`` 指的是兑换的货币类型，通过这个 API 可以获取保留两位小数的汇率

2. 在 src 目录下新建一个 ts 文件，取名为 ``const.ts``，并将以下内容复制进去
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
这个文件是用来枚举可以进行转换的货币类型，因为只做 Demo 展示，所以枚举的数量有限

3. 提供用户选择转换的货币字段能力

首先，货币转换是在原本的字段进行货币值的转换，所以我们需要筛选当前 ``table`` 中的货币类型字段，来让用户进行选择，这里我们在交互上使用 ``Select`` 组件来实现选择这个动作，其中每一个选项都是当前 ``table`` 可以选择的货币字段

我们修改 ``index.tsx`` 中的 ``LoadApp`` 函数：

定义货币字段信息的 `currencyFieldMetaList` 以及选择进行转换的字段 `selectFieldId` 和选择转换的货币类型 `currency`

```typescript
import { bitable } from '@lark-base-open/js-sdk'; //[!code --]
import { bitable, CurrencyCode, FieldType, ICurrencyField, ICurrencyFieldMeta } from '@lark-base-open/js-sdk'; //[!code ++]
import { CURRENCY } from './const'; //[!code ++]

function LoadApp() {
  const [info, setInfo] = useState('get table name, please waiting ....'); // [!code --]
  const [infoType, setInfoType] = useState('info'); // [!code --]
  const [currencyFieldMetaList, setMetaList] = useState<ICurrencyFieldMeta[]>([]) // [!code ++]
  const [selectFieldId, setSelectFieldId] = useState<string>(); // [!code ++]
  const [currency, setCurrency] = useState<CurrencyCode>(); // [!code ++]
```

修改 `useEffect` 函数，在页面完成渲染时获取当前 `table` 内的货币类型字段信息
```typescript
useEffect(() => {
  const fn = async () => {
    const table = await bitable.base.getActiveTable();
    const tableName = await table.getName(); // [!code --]
    setInfo(`The table Name is ${tableName}`); // [!code --]
    setInfoType('success'); // [!code --]
    const fieldMetaList = await table.getFieldMetaListByType<ICurrencyFieldMeta>(FieldType.Currency); // [!code ++]
    setMetaList(fieldMetaList); // [!code ++]
  };
  fn();
}, []);
```
按照顺序，我这里讲解一下用到的相关 API
+ `bitable.base.getActiveTable`: 获取当前的 `table`，获取到了 `table` 之后就可以对数据进行操作
+ `table.getFieldMetaListByType<ICurrencyFieldMeta>(FieldType.Currency)`: 通过字段类型去获取对应的字段信息

然后我们修改渲染的组件，满足用户交互上的需求
```typescript
const formatFieldMetaList = (metaList: ICurrencyFieldMeta[]) => { // [!code ++]
  return metaList.map(meta => ({ label: meta.name, value: meta.id })); // [!code ++]
}; // [!code ++]

return <div>
  <Alert message={info} type={alertType}/> // [!code --]
  <div style={{ margin: 10 }}> // [!code ++]
    <div>Select Field</div> // [!code ++]
    <Select style={{ width: 120 }} onSelect={setSelectFieldId} options={formatFieldMetaList(currencyFieldMetaList)}/> // [!code ++]
  </div> // [!code ++]
  <div style={{ margin: 10 }}>// [!code ++]
    <div>Select Currency</div>// [!code ++]
    <Select options={CURRENCY} style={{ width: 120 }} onSelect={setCurrency}/>// [!code ++]
  </div>// [!code ++]
</div>
```
这个时候，用户已经可以选择字段和想要转换的货币类型了，我们接下来实现转换货币值的逻辑

4. 实现货币转换的逻辑

我们先将获取汇率的 API 引入
```typescript
import { CURRENCY } from './const';
import { getExchangeRate } from './exchange-api'; // [!code ++]
```
然后准备一个转换交互按钮以及转换函数
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
接下来实现我们最重要的一步：在 ``transform`` 函数中实现货币字段的货币类型转换以及数值转换
```typescript
const transform = async () => {
  // 如果用户没有选择货币或者转换的字段，则不进行转换操作
  if (!selectFieldId || !currency) return;
  const table = await bitable.base.getActiveTable();
  // 获取货币字段，这里我们传入了一个 ICurrencyField // [!code focus]
  // 来表明我们获取的是一个货币类型的字段  // [!code focus]
  // 在使用 ts 的情况下，我们限制了这个字段的类型之后 // [!code focus]
  // 在开发时就会获得很多类型提示，来帮我们进行开发  // [!code focus]
  const currencyField = await table.getField<ICurrencyField>(selectFieldId); // [!code focus]
  const currentCurrency = await currencyField.getCurrencyCode();
  // 设置货币类型
  await currencyField.setCurrencyCode(currency);
  // 获取货币的汇率
  const ratio = await getExchangeRate(currentCurrency, currency);
  if (!ratio) return;
  // 首先我们获取 recordId 
  const recordIdList = await table.getRecordIdList();
  // 对 record 进行遍历
  for (const recordId of recordIdList) {
    // 获取当前的货币值// [!code focus]
    const currentVal = await currencyField.getValue(recordId);// [!code focus]
    // 通过汇率进行新值的运算// [!code focus]
    await currencyField.setValue(recordId, currentVal * ratio);// [!code focus]
  }
}
```
在上面的例子中，我们在获取字段时传入了对其类型的限制，从而在后续的逻辑中得到了足够的类型提示，这一步非常重要，我们非常推荐开发者用类似的方法来获取字段，
从而提高开发体验。

在修改货币类型时，可以直接调用`CurrencyField.setCurrencyCode`来改变对应的货币类型，这也是得益于在获取对应的字段时我们提供了类型（在这个基础上，需要修改单选/多选字段的选项时，也可以做到类似的效果）
。

在设置货币值的时候，我们用 `CurrencyField.getValue` 来获取对应的数据，然后进行运算，回填的时候，也是调用了 `CurrencyField.setValue`，我们非常推荐
开发者在对值进行增删改查的时候从字段入手，我们细化了非常多的字段类型，从而优化开发者的使用体验（例如附件字段，在 setValue 时支持直接传入文件，来达到设置对应值的目的）。

[货币转换插件完整代码地址](https://github.com/Lark-Base-Team/js-sdk-learn-demo/tree/feat-currency-plugin)