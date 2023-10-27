# Form View

:::warning
This module is under testing, please use the 0.3.5-alpha.2 version package for test
:::

## id
Get the view id

## tableId
Get the id of current view belongs to

## getType
Get the type of the view. Returns `ViewType.Form` for table view.
```typescript
getType(): Promise<ViewType.Form>;
```

## getMeta
```typescript
getMeta(): Promise<IFormViewMeta>;
```
Get FormView meta information, where the `IFormViewMeta` type is defined as:

```typescript
interface IFormViewMeta {
    id: string;
    name: string;
    type: ViewType.Form;
    property: null
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
