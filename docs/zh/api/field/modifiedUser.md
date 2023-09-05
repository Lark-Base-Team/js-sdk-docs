# ModifiedUser 更新人字段
::: danger
ModifiedUser 更新人字段无法设置值
:::
类型定义 `IModifiedUserField`，使用方法示例：
```typescript
const modifiedUserField = await table.getField<IModifiedUserField>(fieldId);
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
获取更新人员的值

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`
