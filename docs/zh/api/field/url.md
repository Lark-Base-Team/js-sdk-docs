# UrlField 文本字段
类型定义 `IUrlField`，使用方法示例：
```typescript
const urlField = await table.getField<IUrlField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenUrlSegment = {
  type: IOpenSegmentType.Url;
  text: string;
  link: string;
};

export type UrlTransformVal = string | IOpenUrlSegment | IOpenUrlSegment[];
```

## createCell
```typescript
createCell: (val: UrlTransformVal) => Promise<ICell>;
```
创建一个链接字段的 `Cell`，开发者只需要输入文本就可以指定转化为指定格式，其中 URL 链接会转化为对应的超链接

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: UrlTransformVal) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUrlSegment[]>;
```
通过 `Record` 来获取对应的值
