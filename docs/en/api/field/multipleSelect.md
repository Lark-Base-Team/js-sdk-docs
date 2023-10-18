# MultipleSelect Field
Definition of `IMultiSelectField`, the usage example is as follows:
```typescript
const multiSelectField = await table.getField<IMultiSelectField>(fieldId);
```
The corresponding data types are:
```typescript
type IOpenSingleSelect = {
  id: string;
  text: string;
};

/** "Multiple Select" field cell type */
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
Creates a cell for the Multiple Select field.

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Gets the cell value of the Multiple Select field for a given record.

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: MultiSelectTransformVal) => Promise<boolean>;
```
Sets the value of the Multiple Select field for a given record.

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenMultiSelect>;
```
Gets the value of the Multiple Select field for a given record.

## addOption
```typescript
addOption: (name: string, color?: number) => Promise<IFieldRes>;
```
Adds a new option for the field.

## addOptions
```typescript
addOptions: (optionList: { name: string, color?: number }[]) => Promise<IFieldRes>;
```
Adds multiple new options for the field.

## getOptions
```typescript
getOptions: () => Promise<ISelectFieldOption[]>;
```
Gets all the options for the field. The type definition of `ISelectFieldOption` is:
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
Deletes an option by its ID or name.

## setOption
```typescript
setOption: (nameOrId: string, config: OptionConfig) => Promise<IFieldRes>;
```
Sets the configuration of an option by its ID or name. The type definition of `OptionConfig` is:
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
Sets the options type for the field. The type definition of `SelectOptionsType` is:
```typescript
enum SelectOptionsType {
  STATIC, // Custom options
  DYNAMIC, // Reference options
}
```

## getOptionsType
```typescript
getOptionsType: () => Promise<SelectOptionsType>;
```
Gets the options type for the field. The type definition of `SelectOptionsType` is:
```typescript
enum SelectOptionsType {
  STATIC, // Custom options
  DYNAMIC, // Reference options
}
```