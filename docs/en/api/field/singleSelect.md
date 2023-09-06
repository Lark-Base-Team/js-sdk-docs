# SingleSelect 单选字段

The definition of the `ISingleSelectField` type is as follows. To use it, you can use the following method:
```typescript
const singleSelectField = await table.getField<ISingleSelectField>(fieldId);
```
The corresponding data types are:
```typescript
type IOpenSingleSelect = {
  id: string;
  text: string;
};

type SingleSelectTransformVal = string | IOpenSingleSelect;

interface ISelectFieldOption {
  id: string;
  name: string;
  color: number;
}
```

## createCell
```typescript
createCell: (val: SingleSelectTransformVal) => Promise<ICell>;
```
Creates a cell for the single select field.

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell of the single select field for a given record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: SingleSelectTransformVal) => Promise<boolean>;
```
Sets the value of the single select field for a given record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenSingleSelect>;
```
Gets the value of the single select field for a given record.

## addOption
```typescript
addOption: (name: string, color?: number) => Promise<IFieldRes>;
```
Adds a new option to the single select field.

## addOptions
```typescript
addOptions: (optionList: { name: string, color?: number }[]) => Promise<IFieldRes>;
```
Adds multiple new options to the single select field.

## getOptions
```typescript
getOptions: () => Promise<ISelectFieldOption[]>;
```
Gets all the options of the single select field. The type definition of `ISelectFieldOption` is as follows:
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
Deletes an option from the single select field by its ID or name.

## setOption
```typescript
setOption: (nameOrId: string, config: OptionConfig) => Promise<IFieldRes>;
```
Updates an option of the single select field by its ID or name. The type definition of `OptionConfig` is as follows:
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
Sets the option type of the single select field. The type definition of `SelectOptionsType` is as follows:
```typescript
enum SelectOptionsType {
  STATIC, // Custom options
  DYNAMIC, // Referenced options
}
```

## getOptionsType
```typescript
getOptionsType: () => Promise<SelectOptionsType>;
```
Gets the option type of the single select field. The type definition of `SelectOptionsType` is as follows:
```typescript
enum SelectOptionsType {
  STATIC, // Custom options
  DYNAMIC, // Referenced options
}
```