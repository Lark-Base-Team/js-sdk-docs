# 表格视图

## getType
获取视图类型，在当前的表格视图下返回 `ViewType.Grid`
```typescript
getType(): Promise<ViewType>;
```
## getMeta
## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
获取字段信息的列表，因为 `View` 层涉及到了 `UI` 的展示，所以此时获取的字段信息是有序的

## getVisibleRecordIdList
```typescript
getVisibleRecordIdList(filterInfo?: IFilterInfo, sortInfo?: ISortInfo[]): Promise<(string | undefined)[]>;
```
获取当前可见的 RecordId，可以传入过滤条件以及排序条件以获取根据条件筛选后的 recordId ([IFilterInfo 类型定义](./guide.md#ifilterinfo) 以及 [ISortInfo 类型定义](./guide.md#isortinfo))

## getVisibleFieldIdList
```typescript
getVisibleFieldIdList(): Promise<string[]>;
```
获取当前可见的字段 ID 列表

## getChildRecordIdList
```typescript
getChildRecordIdList(parentRecordId: string): Promise<RecordId[] | undefined>;
```
获取指定记录的子记录 id 列表, undefined 则表示该记录无子记录

## getFilterInfo
```typescript
getFilterInfo(): Promise<IFilterInfo | null>;
```
获取当前的筛选信息([IFilterInfo 定义](./guide.md#ifilterinfo))

## addFilterCondition
```typescript
addFilterCondition: (param: IAddFilterConditionParams) => Promise<boolean>;
```
新增筛选条件，如果新增失败，则会返回 false (调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`)

## deleteFilterCondition
```typescript
deleteFilterCondition: (conditionId: string) => Promise<boolean>;
```
删除筛选条件，如果删除失败，则会返回 false (调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`)

## updateFilterCondition
```typescript
updateFilterCondition: (param: IUpdateFilterConditionParams) => Promise<boolean>;
```
更新筛选条件，如果更新失败，则会返回 false (调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`)

## setFilterConjunction
```typescript
setFilterConjunction: (conjunction: FilterConjunction) => Promise<boolean>;
```
设置筛选条件之间的关系，其中 FilterConjunction 类型定义为:
```typescript
enum FilterConjunction {
    And = "and",
    Or = "or"
}
```
可以选择满足所有筛选条件或者其中某条件 (调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`)

## getSortInfo
```typescript
getSortInfo(): Promise<ISortInfo[]>;
```
获取当前的排序条件([sortInfo定义](./guide.md#isortinfo))

## setAutoSort
```typescript
setAutoSort(param: boolean): Promise<boolean>;
```
设置是否自动进行排序（在设置了排序条件之后，会自动设置为 true, 调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`)

## addSort
```typescript
addSort: (param: ISortInfo | ISortInfo[]) => Promise<boolean>;
```
新增排序条件（调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## deleteSort
```typescript
deleteSort: (param: ISortInfo | string) => Promise<boolean>;
```
删除排序条件 （调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## updateSort
```typescript
updateSort: (param: ISortInfo) => Promise<boolean>;
```
更新排序条件 （调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## getGroupInfo
```typescript
getGroupInfo(): Promise<IGroupInfo[]>;
```
获取分组信息([IGroupInfo定义](./guide.md#igroupinfo))

## addGroup
```typescript
addGroup: (param: IGroupInfo | IGroupInfo[]) => Promise<boolean>;
```
新增分组 （调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## deleteGroup
```typescript
deleteGroup: (param: string | IGroupInfo) => Promise<boolean>;
```
删除分组 （调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## updateGroup
```typescript
updateGroup: (param: IGroupInfo) => Promise<boolean>;
```
更新分组（调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）

## hideField
```typescript
hideField: (fieldId: string | string[]) => Promise<boolean>;
```
隐藏字段

## showField
```typescript
showField: (fieldId: string | string[]) => Promise<boolean>;
```
 显示字段

## setFieldWidth
```typescript
setFieldWidth(fieldId: string, width: number): Promise<boolean>;
```
设置字段宽度

## setRowHeight
```typescript
setRowHeight(rowHeight: RowHeightLevel): Promise<boolean>;
```
设置行高，目前行高按照从矮到高有以下几种 （调用该 API 时，并不会保存修改的设置，如果需要保存则需要额外调用 `view.applySetting()`）
```typescript
enum RowHeightLevel {
    Short = 1,
    Medium = 2,
    Tall = 3,
    ExtraTall = 4
}
```

## applySetting
```typescript
applySetting(): Promise<void>;
```
将设置的分组/筛选/排序 等提交，同步给其他用户