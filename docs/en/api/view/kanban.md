# Kanban View

::: warning
This module is in testing, please use version 0.3.5-alpha.1 package
:::

## id
Get the view id

## tableId
Get the id of current view belongs to

## getType
Get the view type
```typescript
getType(): Promise<ViewType.Kanban>;
```

## getName
```typescript
getName(): Promise<string>;
```
Get the view name

## getType
Get the view type
```typescript
getType(): Promise<ViewType.Kanban>;
```

## getMeta
```typescript
getMeta(): Promise<IKanbanViewMeta>;
```

Get view metadata, where `IKanbanViewMeta` is defined as:

```typescript
interface IKanbanViewMeta {
  id: string;
  name: string;
  type: ViewType.Kanban;
  property: {
    filterInfo: IFilterInfo | null;
    sortInfo: ISortInfo[];
  };
}
```

## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
Get the list of field information, because the `View` layer involves the display of `UI`, the field information obtained at this time is ordered

## getVisibleRecordIdList
```typescript
getVisibleRecordIdList(): Promise<(string | undefined)[]>;
```
Get the ID list of visible records

## getVisibleFieldIdList
```typescript
getVisibleFieldIdList(): Promise<string[]>;
```
Get the ID list of visible fields

## applySetting
```typescript
applySetting(): Promise<void>;
```
Submit the view configuration of the set grouping/filtering/sorting, etc., and synchronize it with other users

## getFilterInfo
```typescript
getFilterInfo(): Promise<IFilterInfo | null>;
```
Get the current filter information ([IFilterInfo definition](./guide.md#ifilterinfo))

## addFilterCondition
```typescript
addFilterCondition: (param: IAddFilterConditionParams) => Promise<boolean>;
```
Add a filter condition, if the addition fails, it will return false (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## deleteFilterCondition
```typescript
deleteFilterCondition: (conditionId: string) => Promise<boolean>;
```
Delete the filter condition, if the deletion fails, it will return false (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## updateFilterCondition
```typescript
updateFilterCondition: (param: IUpdateFilterConditionParams) => Promise<boolean>;
```
Update the filter condition, if the update fails, it will return false (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## setFilterConjunction
```typescript
setFilterConjunction: (conjunction: FilterConjunction) => Promise<boolean>;
```
Set the relationship between filter conditions, where the FilterConjunction type is defined as:
```typescript
enum FilterConjunction {
    And = "and",
    Or = "or"
}
```
You can choose to meet all filter conditions or any one condition (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)
## getSortInfo
```typescript
getSortInfo(): Promise<ISortInfo[]>;
```
Get the current sorting conditions ([sortInfo definition](./guide.md#isortinfo))

## setAutoSort
```typescript
setAutoSort(param: boolean): Promise<boolean>;
```
Set whether to automatically sort (after setting the sort condition, it will automatically be set to true, when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## addSort
```typescript
addSort: (param: ISortInfo | ISortInfo[]) => Promise<boolean>;
```
Add sorting conditions (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## deleteSort
```typescript
deleteSort: (param: ISortInfo | string) => Promise<boolean>;
```
Delete the sorting conditions (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)

## updateSort
```typescript
updateSort: (param: ISortInfo) => Promise<boolean>;
```
Update the sorting conditions (when calling this API, the modified settings will not be saved, if you need to save, you need to call `view.applySetting()` separately)