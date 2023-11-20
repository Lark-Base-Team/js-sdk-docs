# Calendar View

:::warning
This module is under testing, please use the 0.3.5-alpha.2 version package with vb=1.0.3.6087 for test 
:::

## id
Get the view id

## tableId
Get the id of current view belongs to

## getType
Get the type of the view. Returns `ViewType.Calendar` for table view.
```typescript
getType(): Promise<ViewType.Calendar>;
```

## getMeta
```typescript
getMeta(): Promise<ICalendarViewMeta>;
```
Get CalendarView meta information, where the `ICalendarViewMeta` type is defined as:

```typescript
interface ICalendarViewMeta {
    id: string;
    name: string;
    type: ViewType.Calendar;
    property: {
      filterInfo: IFilterInfo | null;
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

## showField
```typescript
showField: (fieldId: string | string[]) => Promise<boolean>;
```
Show field

## hideField
```typescript
hideField: (fieldId: string | string[]) => Promise<boolean>;
```
Hide field

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

## applySetting
```typescript
applySetting(): Promise<void>;
```
Submit the set grouping/filtering/sorting and synchronize with other users