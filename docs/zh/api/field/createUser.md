# CreateUser 创建人字段
::: danger
CreateUser 创建人字段无法设置值
:::
类型定义 `ICreateUserField`，使用方法示例：
```typescript
const createUserField = await table.getField<ICreateUserField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenUser = {
  id: string;
  name?: string;
  enName?: string;
  email?: string;
};
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUser[]>;
```
获取创建人的值

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`