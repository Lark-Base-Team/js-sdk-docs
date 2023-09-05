# View 模块

`View` 模块决定 `Table` 模块（可以理解为数据库），在 UI 层的展示方式(例如字段的展示顺序/记录的显隐) 等，因此在 View 模块获取字段的顺序都是有序的

`View` 模块可以在 `Table` 层通过 `getViewById` 的方式获取
```typescript
const view = await table.getViewById(viewId);
```

## getName
```typescript
getName(): Promise<string>;
```
获取视图名

## getType
获取视图类型
```typescript
getType(): Promise<ViewType>;
```
其中视图类型的定义如下
```typescript
declare enum ViewType {
  NotSupport = 0,
  Grid = 1,
  Kanban = 2,
  Form = 3,
  Gallery = 4,
  Gantt = 5,
  Hierarchy = 6,
  Calendar = 7,
  WidgetView = 100
}
```

## getMeta
```typescript
getMeta(): Promise<IViewMeta>;
```
获取视图元数据，其中 `IViewMeta` 的类型定义为：
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: Property;
}
```
其中，`property` 会由不同的视图类型来决定

## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
获取字段信息的列表，因为 `View` 层涉及到了 `UI` 的展示，所以此时获取的字段信息是有序的

## getVisibleRecordIdList
```typescript
getVisibleRecordIdList(): Promise<(string | undefined)[]>;
```
获取可见记录的 ID 列表

## getVisibleFieldIdList
```typescript
getVisibleFieldIdList(): Promise<string[]>;
```
获取可见字段的 ID 列表

## getChildRecordIdList
```typescript
getChildRecordIdList(parentRecordId: string): Promise<RecordId[] | undefined>;
```
获取指定记录的子记录 id 列表, undefined 则表示该记录无子记录

