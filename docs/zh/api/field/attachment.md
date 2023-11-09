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

## getAttachmentUrls
通过 记录 Record (`id` 或者 `Record` 对象) 信息，获取附件的 URL 地址(URL 有效期为 24小时)
```typescript
getAttachmentUrls: (recordOrId: IRecordType | string) => Promise<string[]>;
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const attachmentUrls = await attachmentField.getAttachmentUrls(recordId);
```

## setOnlyMobile
设置是否只允许手机填写，传入为 `true` 的时候设置为仅允许手机上传文件
```typescript
setOnlyMobile: (onlyMobile: boolean) => Promise<IFieldRes>;
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
await attachmentField.setOnlyMobile(true);
```

## getOnlyMobile
获取是否只允许手机填写的信息
```typescript
getOnlyMobile: () => Promise<boolean>;
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const isOnlyMobile = await attachmentField.getOnlyMobile();
```

## createCell
创建一个附件单元格，可以直接传入文件来实现构造一个单元格，
```typescript
createCell: (val: File | File[] | FileList | IOpenAttachment | IOpenAttachment[]) => Promise<ICell>;
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const attachmentCell = await attachmentField.createCell(File);
const recordId = await table.addRecord(attachmentCell);
```

## getCell
获取一个附件单元格，可以传入记录(`record`)的 `id` 或者实例
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const attachmentCell = await attachmentField.getCell(recordId);
```

## setValue
通过 `Record` 设置 `Value`，可以传入 `File` 等, 具体定义如下：
```typescript
setValue: (recordOrId: IRecordType | string, val: AttachmentTransformVal ) => Promise<boolean>;
```
其中类型定义
```typescript
type AttachmentTransformVal = File | File[] | FileList | IOpenAttachment | IOpenAttachment[];
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
await attachmentField.setValue(recordId, File);
```

## getValue
通过 `Record` 获取对应的附件值, 附件值会根据内部的数据结构返回
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenAttachment[]>;
```
类型定义如下：
```typescript
type IOpenAttachment = {
    name: string;
    size: number;
    type: string;
    token: string;
    timeStamp: number;
};
```
### 示例代码
```typescript
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';

const table = await bitable.base.getActiveTable();
const attachmentField = await table.getField<IAttachmentField>(fieldId);
const val = await attachmentField.getValue(recordId);
```