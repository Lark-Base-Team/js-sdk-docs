# Location 地理位置字段
类型定义 `ILocationField`，使用方法示例：
```typescript
const locationField = await table.getField<ILocationField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenLocation = {
  address: string;
  adname: string;
  cityname: string;
  /** 简短地址 */
  name: string;
  /** 省 */
  pname: string;
  /** 完整地址 */
  fullAddress: string;
  /** "number,number" */
  location: string;
  /** @deprecated */
  full_address: string;
};
```

## createCell
```typescript
createCell: (val: IOpenLocation) => Promise<ICell>;
```
创建一个地理位置字段的 `Cell`

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenLocation) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenLocation>;
```
通过 `Record` 来获取对应的值

## setInputType
```typescript
setInputType: (inputType: ELocationInputType) => Promise<IFieldRes>;
```
设置输入地址的方式，其中 `ELocationInputType` 的类型定义如下 
```typescript
enum ELocationInputType {
  ONLY_MOBILE = 'ONLY_MOBILE', // 只允许手机定位
  NOT_LIMIT = 'NOT_LIMIT', // 可获取任意位置
}
```

## getInputType
```typescript
getInputType: () => Promise<ELocationInputType>;
```
获取输入地址的方式，其中 `ELocationInputType` 的类型定义如下
```typescript
enum ELocationInputType {
  ONLY_MOBILE = 'ONLY_MOBILE', // 只允许手机定位
  NOT_LIMIT = 'NOT_LIMIT', // 可获取任意位置
}
```