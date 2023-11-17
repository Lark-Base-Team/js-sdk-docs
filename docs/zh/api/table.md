# Table 模块
Table 可以理解为当前数据表的一个数据库，其中并不涉及到各个视图的 UI 展示(例如在 table 下获取字段的顺序是无序的，在 View(视图) 下获取的字段是有序的)。

在通过 `Base` 获取到 `Table` 之后，就可以调用 `Table` 中的 API，获取 `Table` 比较常见的方法就是 `getActiveTable`：
```typescript
const table = await bitable.base.getActiveTable()
```

# Table 相关方法
### getName
```typescript
getName: () => Promise<string>;
```
获取表名

# 字段相关
## 新增字段
### addField
```typescript
addField: (fieldConfig: IAddFieldConfig) => Promise<IFieldRes>;
```
新增字段，并返回对对应的字段 id
```typescript
type IAddFieldConfig = {
  type: FieldType;
  property?: FieldProperty;
}

type IFieldRes = string;
```
推荐只传入类型参数，属性设置在新建字段之后通过对应的字段特化方法新增
```typescript
const singleSelectField = await table.addField({ type: FieldType.SingleSelect });
const singleField = await table.getField<ISingleSelectField>(singleSelectField);
await singleField.addOption('Option1');
```
如上所示的例子，我们先新增了一个单选字段，然后再在这个字段上新增了一个选项（推荐在获取字段的时候，指定对应的类型`<ISingleSelectField>` 等，以获得更好的语法提示）
### onFieldAdd
```typescript
onFieldAdd(callback: (ev: IEventCbCtx) => void): () => void;
```
监听 Field 添加事件

## 设置字段
### setField
修改字段属性
```typescript
setField(fieldId: string, fieldConfig: ISetFieldConfig): Promise<IFieldRes>;
```
### onFieldModify
```typescript
onFieldModify(callback: (ev: IEventCbCtx) => void): () => void;
```
监听 Field 修改事件

## 获取字段信息
### getFieldIdList
通过该方法获取的 `fieldIdList` 是无序的，因为 `table` 仅仅是数据库层面的，并不是视图（UI展示）层面的，因此是无序的，如果需要获取有序的，需要在 `View` 调用 `view.getFieldIdList` 来获取有序的字段 `Id`
```typescript
getFieldIdList(): Promise<string[]>;
```
获取字段 id 数组
### getFieldMetaById
```typescript
getFieldMetaById(fieldId: string): Promise<IFieldMeta>;
```
通过 id 获取对应的字段信息，字段信息的数据结构定义
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

### getFieldMetaList
通过该方法获取的 `fieldMetaList` 是无序的，因为 `table` 仅仅是数据库层面的，并不是视图（UI展示）层面的，因此是无序的，如果需要获取有序的，需要在 `View` 调用 `view.getFieldMetaList` 来获取对应有序的字段 `meta`
```typescript
getFieldMetaList(): Promise<IFieldMeta[]>;
```
获取所有的字段信息，字段信息的数据结构定义
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
}
```

### isFieldExist
```typescript
isFieldExist(fieldId: string): Promise<boolean>;
```
通过传入字段 id 判断字段是否存在


### getFieldListByType
```typescript
getFieldListByType: <T extends IField>(type: FieldType) => Promise<T[]>;
```
通过 FieldType(字段类型枚举) 来获取对应的字段，在调用的时候可以传入预期的字段类型，以便获得后续开发过程中的语法提示，下面是一个例子

```typescript
const attachmentFieldList = await table.getFieldListByType<IAttachmentField>(FieldType.Attachment);
```
在这个例子中，我在获取字段的时候同时定义了预期的 `IAttachmentField` 类型，从而在后续开发中，我们就可以得到对于 `IAttachmentField` 字段类型的语法提示

### getFieldMetaListByType
```typescript
getFieldMetaListByType: <T extends IFieldMeta>(type: FieldType) => Promise<T[]>;
```
通过 `FieldType(字段类型枚举)` 来获取对应的字段的 `meta` 数据，`meta` 数据的类型定义：
```typescript
interface IFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean;
  description: IBaseFieldDescription;
  // 根据字段类型来决定
  property: T
}
```
在获取对应的 `Meta` 数据时，可以通过传入对应的类型来获取确切的类型(主要是决定 `property` 类型)，下面展示一个例子：
```typescript
const attachmentMetaList = await table.getFieldMetaListByType<IAttachmentFieldMeta>(FieldType.Attachment)
```
### getField
```typescript
getField: <T extends IField>(idOrName: string) => Promise<T>;
```
通过 `id` 或者 `name` 来获取对应的 `Field(字段)`，建议传入 `Field` 类型(例如示例中的 `<IAttachmentField>`)，来获得更好的语法提示
```typescript
const Field = await table.getField<IAttachmentField>(idOrName);
```

### getFieldByName
```typescript
getFieldByName: <T extends IField>(name: string) => Promise<T>;
```
通过 `name` 来获取对应的 `Field(字段)`，建议传入 `Field` 类型(例如示例中的 `<IAttachmentField>`)，来获得更好的语法提示
```typescript
const Field = await table.getFieldByName<IAttachmentField>(idOrName);
```

### getFieldById
```typescript
getFieldById: <T extends IField>(id: string) => Promise<T>;
```
通过 `id` 来获取对应的 `Field(字段)`，建议传入 `Field` 类型(例如示例中的 `<IAttachmentField>`)，来获得更好的语法提示
```typescript
const Field = await table.getFieldById<IAttachmentField>(idOrName);
```

### getFieldByList
```typescript
getFieldList: <T extends IField>() => Promise<T[]>;
```

获取当前 table 下 FieldList
```typescript
const fieldList = await table.getFieldList();
```

## 删除字段
### deleteField
```typescript
deleteField: (fieldOrId: string | IField) => Promise<boolean>;
```
删除一个字段(Field)
```typescript
await table.deleteField(attachmentField);
```
其中 attachmentField 可以通过 `table.getField` 方法获取到
### onFieldDelete
```typescript
onFieldDelete(callback: (ev: IEventCbCtx) => void): () => void;
```
监听 Field 删除事件

# 记录(Record)相关
## 新增记录
### addRecord
```typescript
addRecord: (recordVale?: IRecordValue | ICell | ICell[]) => Promise<IRecordRes>;
```
新增一条记录(如果新增多条记录，建议使用 addRecords，否则会遇到性能问题)，ICell 可以通过各个字段 (Field) 的 createCell 方法来创建([具体实现方法](cell.md))，如果使用 RecordValue 来创建，数据结构如下所示：
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
返回值 `IRecordRes` 的类型定义，会返回插入记录的 recordId
```typescript
type IRecordRes = string;
```
更推荐使用 Field.createCell 的方法来创建 Cell，然后通过组合 cell 来插入一条记录，下面是一个例子:
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
其中 attachmentField 可以通过 `table.getField` 方法获取到

### addRecords
```typescript
addRecords: (record?: IRecordValue[] | ICell[] | Array<ICell[]>) => Promise<IRecordRes[]>;
```
新增多条记录，ICell 可以通过各个字段(Field)的 createCell 方法来创建([具体实现方法](cell.md))，如果使用 RecordValue 来创建，数据结构如下所示：
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
返回值 `IRecordRes` 的类型定义，会返回插入记录的 recordId 数组
```typescript
type IRecordRes = string;
```
更推荐使用 Field.createCell 的方法来创建 Cell，然后通过组合 cell 来插入一条记录，下面是一个例子:
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
其中 attachmentField 可以通过 `table.getField` 方法获取到

### addRecordByCell
```typescript
addRecordByCell: (cells: ICell[]) => Promise<IRecordRes>;
```
通过 Cell 来新增一条记录(Record)，并返回对应的 RecordId
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
const recordId = await table.addRecord(attachmentCell);
```
其中 attachmentField 可以通过 `table.getField` 方法获取到

### addRecordsByCell
```typescript
addRecordsByCell: (cells: Array<ICell[]>) => Promise<IRecordRes[]>;
```
通过 Cell 来新增多条记录(Record)，并返回对应的 RecordId 数组
```typescript
const attachmentCell1 = await attachmentField.createCell(imageFile);
const attachmentCell2 = await attachmentField.createCell(textFile);
const recordIds = await table.addRecords([[attachmentCell1],[attachmentCell2]]);
```
其中 attachmentField 可以通过 `table.getField` 方法获取到

### onRecordAdd
```typescript
onRecordAdd(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```
监听 Record 添加事件

## 获取记录
### getRecordById
```typescript
getRecordById(recordId: string): Promise<IRecordValue>;
```
通过 id 去获取对应的 record (记录)，其中 IRecordValue 的类型定义如下：
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```

### getRecords
```typescript
getRecords(param: IGetRecordsParams): Promise<IGetRecordsResponse>;
```
批量获取 record，单次上限 500 条，其中参数类型定义如下：
```typescript
interface IGetRecordsParams {
  pageSize?: number; // 获取数量，默认 500，最大不得超过 500
  pageToken?: string; // 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 pageToken，下次遍历可采用该 pageToken 获取查询结果
  viewId?: string;  // 获取指定视图的 record，当传入 filter/sort 时，该属性会被忽略
}
```
返回值定义如下:
```typescript
interface IGetRecordsResponse {
  total: number;
  hasMore: boolean;
  records: IRecord[];
  pageToken?: string;
}
```
其中 IRecord 的类型定义如下:
```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```

### getRecordList
```typescript
getRecordsList(filter?: Formula, sort?: Sort): Promise<IRecordList>;
```
调用 `getRecordList` 可以获取当前的记录数组，然后使用封装方法对数据执行一些操作，例如：
```typescript
const recordList = await table.getRecordList();
for (const record of recordList) {
  const cell = await record.getCellByField(fieldId);
  const val = await cell.getValue();
}
```
可以通过查看 [Record 模块](./record.md) 获取更多的用法

### getRecordIdList
```typescript
getRecordIdList(filter?: string, sort?: string): Promise<string[]>;
```
获取表中记录的 id

### getCellValue
```typescript
getCellValue(fieldId: string, recordId: string): Promise<IOpenCellValue>;
```
获取单元格值 (更推荐通过 Field 来获取)
### getAttachmentUrl
```typescript
getAttachmentUrl(token: string, fieldId?: string, recordId?: string): Promise<string>;
```
获取当前附件单元格中附件的 URL (推荐通过 AttachmentField 去获取, AttachmentField 可以通过传入 Record/RecordId, 参数获取附件 URL)

### getCellAttachmentUrls
::: warning
接口返回的临时链接的有效时间是 10分钟
:::
```typescript
getCellAttachmentUrls(tokens: string[], fieldId: string, recordId: string): Promise<string[]>;
```
获取当前附件单元格中附件的 URL (推荐通过 AttachmentField 去获取, AttachmentField 可以通过传入 Record/RecordId, 参数获取附件 URL)

[//]: # (### getCellThumbnailUrls)

[//]: # (```typescript)

[//]: # (getCellThumbnailUrls&#40;tokens: string[], fieldId: string, recordId: string&#41;: Promise<string[]>;)

[//]: # (```)

[//]: # (获取当前附件单元格中附件的预览 URL &#40;推荐通过 AttachmentField 去获取, AttachmentField 可以通过传入 Record/RecordId, 参数获取附件 URL&#41;)

### getRecordShareLink
```typescript
getRecordShareLink(recordId: string)
```
获取指定记录的分享链接

## 设置记录
### setCellValue
```typescript
setCellValue<T extends IOpenCellValue = IOpenCellValue>(fieldId: string, recordId: string, cellValue: T): Promise<boolean>;
```
设置单元格的值 (推荐通过 Field 来设置)
### setRecord
```typescript
setRecord(recordId: string, recordValue?: IRecordValue): Promise<IRecordRes>;
```
设置 Record 数据，并返回对应的 RecordId，其中 IRecordValue 的数据格式为：
```typescript
type IRecordValue = {
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
};
```
更推荐通过 Field 来设置 Value(Field.setValue)

### setRecords
```typescript
setRecords(records?: IRecord[]): Promise<IRecordRes[]>;
```
设置 Record 数据，并返回对应的 RecordId，其中 IRecord 的数据格式为：
```typescript
interface IRecord {
  recordId: string;
  fields: {
    [fieldId: string]: IOpenCellValue;
  };
}
```
### getCellString
```typescript
getCellString(fieldId: string, recordId: string): Promise<string>;
```
获取 cellValue 并转化为 string 格式
### onRecordModify
```typescript
onRecordModify(callback: (ev: IEventCbCtx<{
  recordId: string;
  fieldIds: string[];
}>) => void): () => void;
```
监听 Record 修改事件

## 删除记录
### deleteRecord
```typescript
deleteRecord(recordId: string): Promise<boolean>;
```
通过 RecordId 删除对应的记录

### deleteRecords
```typescript
deleteRecords(recordIdList: string[]): Promise<boolean>;
```
通过 RecordId 数组，批量删除对应的记录
### onRecordDelete
```typescript
onRecordDelete(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
```
监听 Record 删除事件

# 视图(View)相关
## 获取视图
### getActiveView
```typescript
getActiveView: () => Promise<IView>;
```
获取当前选择的视图

### getViewById
```typescript
getViewById: (id: string) => Promise<IView>;
```
通过 id 来获取 view 视图
```typescript
const view = await table.getViewById(id);
```

### getViewList
```typescript
getViewList: () => Promise<IView[]>;
```
获取 ViewList
```typescript
const viewList = await table.getViewList();
```

### getViewMetaById
```typescript
getViewMetaById(viewId: string): Promise<IViewMeta>;
```
通过 id 去获取视图的信息，其中 IViewMeta 的类型定义如下所示：
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

### getViewMetaList
```typescript
getViewMetaList(): Promise<IViewMeta[]>;
```
获取所有的视图信息，并以数组返回，其中 IViewMeta 的类型定义如下所示：
```typescript
interface IViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: IBaseViewProperty;
}
```

### isViewExist
```typescript
isViewExist(viewId: string): Promise<boolean>;
```
通过 viewId 判断视图是否存在