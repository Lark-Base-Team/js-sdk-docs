# Gantt View


## id
Get the view id

## tableId
Get the id of current view belongs to

## getType
Get the type of the view. Returns `ViewType.Gantt` for table view.
```typescript
getType(): Promise<ViewType.Gantt>;
```

## getMeta
```typescript
getMeta(): Promise<IGanttViewMeta>;
```
Get GanttView meta information, where the `IGanttViewMeta` type is defined as:

```typescript
interface IGanttViewMeta {
    id: string;
    name: string;
    type: ViewType.Gantt;
    property: {
        filterInfo: IFilterInfo | null;
        sortInfo: ISortInfo[];
        groupInfo: IGroupInfo[];
    }
}
```

## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
Get the list of field metadata. The field metadata is ordered as it appears in the UI.

## getVisibleRecordIdList
```typescript
getVisibleRecordIdList(filterInfo?: IFilterInfo, sortInfo?: ISortInfo[]): Promise<(string | undefined)[]>;
```
Get the list of visible record IDs based on the filter and sort criteria. You can pass filter and sort information to get the filtered and sorted record IDs. ([IFilterInfo definition](../view.md#ifilterinfo) and [ISortInfo definition](../view.md#isortinfo))

## getVisibleFieldIdList
```typescript
getVisibleFieldIdList(): Promise<string[]>;
```
Get the list of visible field IDs.

## getChildRecordIdList
```typescript
getChildRecordIdList(parentRecordId: string): Promise<RecordId[] | undefined>;
```
Get the list of child record IDs for a given parent record ID. Returns undefined if the record has no child records.

## getFilterInfo
```typescript
getFilterInfo(): Promise<IFilterInfo | null>;
```
Get the current filter information. ([IFilterInfo definition](../view.md#ifilterinfo))

## addFilterCondition
```typescript
addFilterCondition: (param: IAddFilterConditionParams) => Promise<boolean>;
```
Add a filter condition. Returns false if the addition fails. (Calling this API does not save the modified settings. To save the modifications, you need to call `view.applySetting()` separately.)

## deleteFilterCondition
```typescript
deleteFilterCondition: (conditionId: string) => Promise<boolean>;
```
Delete a filter condition. Returns false if the deletion fails. (Calling this API does not save the modified settings. To save the modifications, you need to call `view.applySetting()` separately.)

## updateFilterCondition
```typescript
updateFilterCondition: (param: IUpdateFilterConditionParams) => Promise<boolean>;
```
Update a filter condition. Returns false if the update fails. (Calling this API does not save the modified settings. To save the modifications, you need to call `view.applySetting()` separately.)

## setFilterConjunction
```typescript
setFilterConjunction: (conjunction: FilterConjunction) => Promise<boolean>;
```
Set the conjunction between filter conditions. The FilterConjunction type is defined as:
```typescript
enum FilterConjunction {
    And = "and",
    Or = "or"
}
```
You can choose to satisfy all filter conditions or any of the conditions. (Calling this API does not save the modified settings. To save the modifications, you need to call `view.applySetting()` separately.)

## getSortInfo
```typescript
getSortInfo(): Promise<ISortInfo[]>;
```
Get the current sort information. ([ISortInfo definition](../view.md#isortinfo))

## setAutoSort
```typescript
setAutoSort(param: boolean): Promise<boolean>;
```
Set whether to automatically sort the table. After setting the sort criteria, it will automatically be set to true. (Calling this API does not save the modified settings. To save the modifications, you need to call `view.applySetting()` separately.)
## addSort
```typescript
addSort: (param: ISortInfo | ISortInfo[]) => Promise<boolean>;
```
Add a new sorting condition (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## deleteSort
```typescript
deleteSort: (param: ISortInfo | string) => Promise<boolean>;
```
Delete sorting condition (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## updateSort
```typescript
updateSort: (param: ISortInfo) => Promise<boolean>;
```
Update sorting condition (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## getGroupInfo
```typescript
getGroupInfo(): Promise<IGroupInfo[]>;
```
Get group information ([IGroupInfo definition](../view.md#igroupinfo))

## addGroup
```typescript
addGroup: (param: IGroupInfo | IGroupInfo[]) => Promise<boolean>;
```
Add a new group (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## deleteGroup
```typescript
deleteGroup: (param: string | IGroupInfo) => Promise<boolean>;
```
Delete group (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## updateGroup
```typescript
updateGroup: (param: IGroupInfo) => Promise<boolean>;
```
Update group (when calling this API, the modified settings will not be saved. If you need to save, you need to call `view.applySetting()` separately)

## hideField
```typescript
hideField: (fieldId: string | string[]) => Promise<boolean>;
```
Hide field

## showField
```typescript
showField: (fieldId: string | string[]) => Promise<boolean>;
```
Show field

## applySetting
```typescript
applySetting(): Promise<void>;
```
Submit the set grouping/filtering/sorting and synchronize with other users