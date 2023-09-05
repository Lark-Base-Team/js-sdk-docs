# MultipleSelect 多选字段
类型定义 `IMultiSelectField`，使用方法示例：
```typescript
const multiSelectField = await table.getField<IMultiSelectField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenSingleSelect = {
  id: string;
  text: string;
};

/** 「多选」字段单元格类型 */
type IOpenMultiSelect = IOpenSingleSelect[];

type MultiSelectTransformVal = string[] | string | IOpenMultiSelect | IOpenSingleSelect;

interface ISelectFieldOption {
  id: string;
  name: string;
  color: number;
}
```

## createCell
```typescript
createCell: (val: MultiSelectTransformVal) => Promise<ICell>;
```
创建一个进度字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: MultiSelectTransformVal) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenMultiSelect>;
```
通过 `Record` 来获取对应的值

## addOption 
```typescript
addOption: (name: string, color?: number) => Promise<IFieldRes>;
```
新增选项

## addOptions
```typescript
addOptions: (optionList: { name: string, color?: number }[]) => Promise<IFieldRes>;
```
新增选项

## getOptions
```typescript
getOptions: () => Promise<ISelectFieldOption[]>;
```
获取所有的选项，其中 `ISelectFieldOption` 的类型定义为：
```typescript
interface ISelectFieldOption {
  id: string;
  name: string;
  color: number;
}
```

## deleteOption
```typescript
deleteOption: (idOrName: string) => Promise<IFieldRes>;
```
通过 `id` 或者 `name` 删除选项

## setOption
```typescript
setOption: (nameOrId: string, config: OptionConfig) => Promise<IFieldRes>;
```
通过 `id` 或者 `name` 设置选项，其中 `OptionConfig` 的类型定义为：
```typescript
export type OptionConfig = {
  name?: string;
  color?: number;
};
```

## setOptionsType
```typescript
setOptionsType: (type: SelectOptionsType) => Promise<IFieldRes>;
```
设置选项类型，其中 `SelectOptionsType` 的类型定义为:
```typescript
enum SelectOptionsType {
  STATIC, // 自定义选项
  DYNAMIC, // 引用选项
}
```

## getOptionsType
```typescript
getOptionsType: () => Promise<SelectOptionsType>;
```
获取选项类型，其中 `SelectOptionsType` 的类型定义为:
```typescript
enum SelectOptionsType {
  STATIC, // 自定义选项
  DYNAMIC, // 引用选项
}
```