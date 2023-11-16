# Attachment 附件字段
类型定义 `IAttachmentField`，使用方法示例：
```typescript
const attachmentField = await table.getField<IAttachmentField>(fieldId);
```
其中对应的数据类型为
```typescript
type IOpenAttachment = {
  name: string;
  size: number;
  type: string; // mime
  token: string;
  timeStamp: number;
};
```

[//]: # (## getAttachmentThumbnailUrls)

[//]: # (::: danger)

[//]: # (当前该 API 暂不支持所有多维表格使用)

[//]: # (:::)

[//]: # (```typescript)

[//]: # (getAttachmentThumbnailUrls: &#40;recordOrId: IRecordType | string&#41; => Promise<string[]>;)

[//]: # (```)

[//]: # (通过 `Record` 获取附件的缩略图 URL 地址 &#40;获取速度较快，可以用于预览展示&#41;)

## getAttachmentUrls
::: warning
该接口返回的临时链接的有效时间是 **10 分钟**。
:::
```typescript
getAttachmentUrls: (recordOrId: IRecordType | string) => Promise<string[]>;
```
通过 `Record` 信息，获取附件的 URL 地址

## setOnlyMobile
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<IFieldRes>;
```
设置是否只允许手机填写

## getOnlyMobile
```typescript
getOnlyMobile: () => Promise<boolean>;
```
获取是否只允许手机填写

## createCell
```typescript
createCell: (val: File | File[] | FileList | IOpenAttachment | IOpenAttachment[]) => Promise<ICell>;
```
创建一个附件单元格，可以直接传入文件等

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: AttachmentTransformVal ) => Promise<boolean>;
```
通过 `Record` 设置 Value，可以传入 `File` 等, 具体定义如下：
```typescript
type AttachmentTransformVal = File | File[] | FileList | IOpenAttachment | IOpenAttachment[];
```

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAttachment[]>;
```
通过 `Record` 获取对应的附件值