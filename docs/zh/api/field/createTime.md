# CreateTime 创建时间字段
::: danger
CreateTime 创建时间字段无法设置值
:::
类型定义 `ICreateTimeField`，使用方法示例：
```typescript
const createTimeField = await table.getField<ICreateTimeField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenTimestamp = number;
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenTimestamp>;
```
获取创建时间

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setDateFormat
```typescript
setDateFormat: (format: DateFormatter) => Promise<IFieldRes>;
```
设置日期格式，其中 `DateFormatter` 的数据格式为：
```typescript
enum DateFormatter {
  DATE_YMD_WITH_SLASH = 'yyyy/MM/dd', // 2021/01/30
  DATE_TIME = 'yyyy/MM/dd HH:mm', // 2021/01/30 14:00
  DATE_TIME_WITH_HYPHEN = 'yyyy-MM-dd HH:mm', // 2021-01-30 14:00
  DATE_YMD_WITH_HYPHEN = 'yyyy-MM-dd', // 2021-01-30
  DATE_MD_WITH_HYPHEN = 'MM-dd', // 01-30
  DATE_MMDD_WITH_SLASH = 'MM/dd/yyyy', // 01/30/2021
  DATE_DDMM_WITH_SLASH = 'dd/MM/yyyy', // 30/01/2021
}
```

## getDateFormat
```typescript
getDateFormat: () => Promise<DateFormatter>;
```
获取日期格式，其中 `DateFormatter` 的数据格式为：
```typescript
enum DateFormatter {
  DATE_YMD_WITH_SLASH = 'yyyy/MM/dd', // 2021/01/30
  DATE_TIME = 'yyyy/MM/dd HH:mm', // 2021/01/30 14:00
  DATE_TIME_WITH_HYPHEN = 'yyyy-MM-dd HH:mm', // 2021-01-30 14:00
  DATE_YMD_WITH_HYPHEN = 'yyyy-MM-dd', // 2021-01-30
  DATE_MD_WITH_HYPHEN = 'MM-dd', // 01-30
  DATE_MMDD_WITH_SLASH = 'MM/dd/yyyy', // 01/30/2021
  DATE_DDMM_WITH_SLASH = 'dd/MM/yyyy', // 30/01/2021
}
```