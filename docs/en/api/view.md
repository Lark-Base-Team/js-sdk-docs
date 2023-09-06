# View Module

The `View` module determines how the `Table` module (which can be understood as a database) is displayed in the UI layer, such as the order of fields displayed/visibility of records, etc. Therefore, the fields obtained in the View module are ordered.

The `View` module can be obtained in the `Table` module by using the `getViewById` method:
```typescript
const view = await table.getViewById(viewId);
```

## getName
```typescript
getName(): Promise<string>;
```
Get the name of the view.

## getType
Get the type of the view.
```typescript
getType(): Promise<ViewType>;
```
The definition of the view type is as follows:
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
Get the metadata of the view. The type definition of `IViewMeta` is as follows:
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: Property;
}
```
Here, `property` is determined by different view types.

## getFieldMetaList
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
Get a list of field information. Since the View module is related to UI display, the field information obtained at this time is ordered.

## getVisibleRecordIdList
```typescript
getVisibleRecordIdList(): Promise<(string | undefined)[]>;
```
Get the list of visible record IDs.

## getVisibleFieldIdList
```typescript
getVisibleFieldIdList(): Promise<string[]>;
```
Get the list of visible field IDs.

## getChildRecordIdList
```typescript
getChildRecordIdList(parentRecordId: string): Promise<RecordId[] | undefined>;
```
Get the list of child record IDs for the specified record. Undefined indicates that the record has no child records.