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