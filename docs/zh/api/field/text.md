# TextField 文本字段
类型定义 `ITextField`，使用方法示例：
```typescript
const textField = await table.getField<ITextField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenTextSegment = { type: IOpenSegmentType.Text; text: string };

type IOpenUrlSegment = {
  type: IOpenSegmentType.Url;
  text: string;
  link: string;
};

type IOpenSegment = IOpenTextSegment | IOpenUrlSegment | IOpenUserMentionSegment | IOpenDocumentMentionSegment;

type TextFieldTransformVal = string | IOpenSegment | IOpenSegment[];
```

## createCell
```typescript
createCell: (val: TextFieldTransformVal) => Promise<ICell>;
```
创建一个文本字段的 `Cell`，开发者只需要输入文本就可以指定转化为指定格式，其中 URL 链接会转化为对应的超链接

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: TextFieldTransformVal) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenSegment[]>;
```
通过 `Record` 来获取对应的值
