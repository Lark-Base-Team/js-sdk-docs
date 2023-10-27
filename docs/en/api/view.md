# View Module

A `View` is a presentation of a data `Table` (such as the display order of fields/records, visibility, etc.), a data table has at least one view, possibly multiple views, each view has a unique identifier viewId, viewId is unique in a multi-dimensional table.

::: tip
Note the difference here with the Table module. In the View module, the order of fields/records is **ordered**.
:::

The `View` module can be obtained in the `Table` layer via the `getActiveView` method:

```typescript
const view = await table.getActiveView();
```

View can be seen through the following figure as responsible for the UI display on the page, so many APIs related to the UI display format exist in the View layer, such as filtering/grouping/sorting, etc.
![](../../../image/module-name.png)

::: warning
In the View layer, many interfaces, such as grouping/filtering/sorting, etc., need to call the `view.applySetting` method if you need to save or synchronize with other users after calling the API.
:::

## Different types of views
Currently, 6 different types of views are supported, and the available capabilities of different types of views vary:

- [GridView](./view/grid.md): Table view
- [KanbanView](./view/kanban.md): Kanban view
- [FormView](./view/form.md): Form view
- [GalleryView](./view/gallery.md): Gallery view
- [GanttView](./view/gantt.md): Gantt view
- [CalendarView](./view/calendar.md): Calendar view


## View Module Related Type Definitions

> The following are some basic capabilities definitions, which can be skipped. There will be guidance in the APIs involved later.

### IFilterInfo

```typescript
interface IFilterInfo {
  conjunction: FilterConjunction;
  conditions: FilterInfoCondition[];
}
```

The type definition of FilterConjunction is as follows:

```typescript
enum FilterConjunction {
  And = 'and',
  Or = 'or'
}
```

`FilterInfoCondition` will have different definitions for different fields, with specific types as follows:

| IFilterAttachmentCondition                                      | IFilterCheckboxCondition         | IFilterAutoNumberCondition                                                                                                                                                                                                        | IFilterDateTimeCondition                                                                                                                  | IFilterCreatedTimeCondition                                                                                                               | IFilterModifiedTimeCondition                                                                                                               | IFilterUserCondition           | IFilterCreatedUserCondition         | IFilterModifiedUserCondition         | IFilterDuplexLinkCondition         | IFilterSingleLinkCondition         | IFilterFormulaCondition         | IFilterGroupChatCondition         | IFilterLocationCondition         | IFilterLookupCondition         | IFilterMultiSelectCondition         | IFilterSingleSelectCondition                                                                                                                                             | IFilterPhoneCondition          | IFilterTextCondition           | IFilterNumberCondition                                                                                                                                                                                                           | IFilterUrlCondition            | IFilterCurrencyCondition                                                                                                                                                                                                         | IFilterBarcodeCondition         | IFilterProgressCondition                                                                                                                                                                                                         | IFilterRatingCondition                                                                                                                                                                                                           |
| --------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ----------------------------------- | ------------------------------------ | ---------------------------------- | ---------------------------------- | ------------------------------- | --------------------------------- | -------------------------------- | ------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fieldId: string`                                               | `fieldId: string`                | `fieldId: string`                                                                                                                                                                                                                 | `fieldId: string`                                                                                                                         | `fieldId: string`                                                                                                                         | `fieldId: string`                                                                                                                          | `fieldId: string`              | `fieldId: string`                   | `fieldId: string`                    | `fieldId: string`                  | `fieldId: string`                  | `fieldId: string`               | `fieldId: string`                 | `fieldId: string`                | `fieldId: string`              | `fieldId: string`                   | `fieldId: string`                                                                                                                                                        | `fieldId: string`              | `fieldId: string`              | `fieldId: string`                                                                                                                                                                                                                | `fieldId: string`              | `fieldId: string`                                                                                                                                                                                                                | `fieldId: string`               | `fieldId: string`                                                                                                                                                                                                                | `fieldId: string`                                                                                                                                                                                                                |
| `operator: FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: FilterOperator.Is`    | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.IsGreater \| FilterOperator.IsGreaterEqual \| FilterOperator.IsLess \| FilterOperator.IsLessEqual \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty;` | `operator: FilterOperator.Is \| FilterOperator.IsGreater \| FilterOperator.IsLess \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: FilterOperator.Is \| FilterOperator.IsGreater \| FilterOperator.IsLess \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: FilterOperator.Is  \| FilterOperator.IsGreater \| FilterOperator.IsLess \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: BaseFilterOperator` | `operator: BaseFilterOperator`      | `operator: BaseFilterOperator`       | `operator: BaseFilterOperator`     | `operator: BaseFilterOperator`     | `operator: FilterOperator`      | `operator: BaseFilterOperator`    | `operator: BaseFilterOperator`   | `operator: FilterOperator`     | `operator: BaseFilterOperator`      | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.Contains \| FilterOperator.DoesNotContain \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: BaseFilterOperator` | `operator: BaseFilterOperator` | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.IsGreater \| FilterOperator.IsGreaterEqual \| FilterOperator.IsLess \| FilterOperator.IsLessEqual \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: BaseFilterOperator` | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.IsGreater \| FilterOperator.IsGreaterEqual \| FilterOperator.IsLess \| FilterOperator.IsLessEqual \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: BaseFilterOperator`  | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.IsGreater \| FilterOperator.IsGreaterEqual \| FilterOperator.IsLess \| FilterOperator.IsLessEqual \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` | `operator: FilterOperator.Is \| FilterOperator.IsNot \| FilterOperator.IsGreater \| FilterOperator.IsGreaterEqual \| FilterOperator.IsLess \| FilterOperator.IsLessEqual \| FilterOperator.IsEmpty \| FilterOperator.IsNotEmpty` |
| `value?: null `                                                 | `value: boolean \| null`         | `value: number \| null`                                                                                                                                                                                                           | `value: IFilterDateTimeValue = number \| FilterDuration  \| null`                                                                         | `value: number \| FilterDuration \| null`                                                                                                 | `value: number \| FilterDuration \| null`                                                                                                  | `value: string[] \| null`      | `value: string[] \| null`           | `value: string[] \| null`            | `value: string[] \| null`          | `value: string[] \| null`          | `value: IFilterAll`             | `value: string[] \| null`         | `value: string \| null`          | `value: IFilterAll`            | `value: string[] \| null \| string` | `value: string[] \| string`                                                                                                                                              | `value: string \| null`        | `value: string \| null`        | `value: number \| null`                                                                                                                                                                                                          | `value: string \| null`        | `value: number \| null`                                                                                                                                                                                                          | `value: string \| null`         | `value: number \| null`                                                                                                                                                                                                          | `value: number \| null`                                                                                                                                                                                                          |
| `fieldType?: FieldType.Attachment`                              | `fieldType?: FieldType.Checkbox` | `fieldType?: FieldType.AutoNumber`                                                                                                                                                                                                | `fieldType?: FieldType.DateTime`                                                                                                          | `fieldType?: FieldType.CreatedTime`                                                                                                       | `fieldType?: FieldType.ModifiedTime`                                                                                                       | `fieldType?: FieldType.User`   | `fieldType?: FieldType.CreatedUser` | `fieldType?: FieldType.ModifiedUser` | `fieldType?: FieldType.DuplexLink` | `fieldType?: FieldType.SingleLink` | `fieldType?: FieldType.Formula` | `fieldType?: FieldType.GroupChat` | `fieldType?: FieldType.Location` | `fieldType?: FieldType.Lookup` | `fieldType?: FieldType.MultiSelect` | `fieldType?: FieldType.SingleSelect`                                                                                                                                     | `fieldType?: FieldType.Phone`  | `fieldType?: FieldType.Text`   | `fieldType?: FieldType.Number`                                                                                                                                                                                                   | `fieldType?: FieldType.Url`    | `fieldType?: FieldType.Currency`                                                                                                                                                                                                 | `fieldType?: FieldType.Barcode` | `fieldType?: FieldType.Progress`                                                                                                                                                                                                 | `fieldType?: FieldType.Rating`                                                                                                                                                                                                   |
| `conditionId?: string`                                          | `conditionId?: string`           | `conditionId?: string`                                                                                                                                                                                                            | `conditionId?: string`                                                                                                                    | `conditionId?: string`                                                                                                                    | `conditionId?: string`                                                                                                                     | `conditionId?: string`         | `conditionId?: string`              | `conditionId?: string`               | `conditionId?: string`             | `conditionId?: string`             | `conditionId?: string`          | `conditionId?: string`            | `conditionId?: string`           | `conditionId?: string`         | `conditionId?: string`              | `conditionId?: string`                                                                                                                                                   | `conditionId?: string`         | `conditionId?: string`         | `conditionId?: string`                                                                                                                                                                                                           | `conditionId?: string`         | `conditionId?: string`                                                                                                                                                                                                           | `conditionId?: string`          | `conditionId?: string`                                                                                                                                                                                                           | `conditionId?: string`                                                                                                                                                                                                           |

The `FilterOperator` is defined as follows:

```typescript
enum FilterOperator {
  /** Equal */
  Is = 'is',
  /** Not equal */
  IsNot = 'isNot',
  /** Contains */
  Contains = 'contains',
  /** Does not contain */
  DoesNotContain = 'doesNotContain',
  /** Is empty */
  IsEmpty = 'isEmpty',
  /** Is not empty */
  IsNotEmpty = 'isNotEmpty',
  /** Greater than */
  IsGreater = 'isGreater',
  /** Greater than or equal to */
  IsGreaterEqual = 'isGreaterEqual',
  /** Less than */
  IsLess = 'isLess',
  /** Less than or equal to */
  IsLessEqual = 'isLessEqual'
}
```

`FilterDuration` is defined as follows:

```typescript
enum FilterDuration {
  /** Today */
  Today = "Today",
  /** Tomorrow */
  Tomorrow = "Tomorrow",
  /** Yesterday */
  Yesterday = "Yesterday",
  /** Past 7 days */
  TheLastWeek = "TheLastWeek",
  /** Next 7 days */
  TheNextWeek = "TheNextWeek",
  /** Past 30 days */
  TheLastMonth = "TheLastMonth",
  /** Next 30 days */
  TheNextMonth = "TheNextMonth",
  /** Current week */
  CurrentWeek = "CurrentWeek",
  /** Last week */
  LastWeek = "LastWeek",
  /** Current month */
  CurrentMonth = "CurrentMonth",
  /** Last month */
  LastMonth = "LastMonth"
}
```

`BaseFilterOperator` is defined as follows:

```typescript
type BaseFilterOperator =
  FilterOperator.Is
  | FilterOperator.IsNot
  | FilterOperator.Contains
  | FilterOperator.DoesNotContain
  | FilterOperator.IsEmpty
  | FilterOperator.IsNotEmpty;
```

### ISortInfo

```typescript
interface ISortInfo {
  fieldId: string;
  /** false: Ascending A -> Z;  true: Descending Z -> A */
  desc: boolean;
}
```

### IGroupInfo

```typescript
interface IGroupInfo {
  fieldId: string;
  /** false: Ascending A -> Z;  true: Descending Z -> A */
  desc: boolean;
}
```