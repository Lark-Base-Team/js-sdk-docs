# UserField 文本字段
类型定义 `IUserField`，使用方法示例：
```typescript
const userField = await table.getField<IUserField>(fieldId);
```
其中对应的数据类型为：
```typescript
export type IOpenUser = {
  id: string;
  name?: string;
  enName?: string;
  email?: string;
  /** @deprecated */
  en_name?: string;
};

type UserFieldTransformVal = IOpenUser | IOpenUser[];
```

## createCell
```typescript
createCell: (val: UserFieldTransformVal) => Promise<ICell>;
```
创建一个人员字段的 `Cell`

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: UrlTransformVal) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUser[]>;
```
通过 `Record` 来获取对应的值

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
设置是否允许设置多个人员

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
获取是否允许设置多个人员