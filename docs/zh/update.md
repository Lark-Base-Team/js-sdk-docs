# 旧版本升级指南
目前很多开发者的 JS SDK 版本为 0.2.x，目前有较大改动的 API 版本为 0.3.x，开发者可以直接升级到 0.3.x 版本，无 Break Change，目前 JS
SDK 的 [npm 地址](https://www.npmjs.com/package/@lark-base-open/js-sdk)
对比新版，最大的不同就是通过细化了字段的一些操作，我们推荐开发者先获取字段，然后实现对应的能力，在获取字段的时候，也强烈推荐通过传入对应的字段类型来获取完善的语法提示，例如
下面例子中涉及到的 `IAttachmentField`
```typescript
const attachmentField = await table.getField<IAttachmentField>(attachmentFieldId);
```
用户可以通过更新对应 npm 中 `@lark-base-open/js-sdk` 的包版本为 0.3.x 来进行升级

# 新版本对比旧版本便利性提升
## 获取 Table 方式优化
在旧版本获取 Table 的 API 中：
```typescript
const { tableId } = await bitable.base.getSelection();
const table = await bitable.base.getTableById(tableId);
```
很多开发者都写了很多类似的摸板化代码，在新的 API 中，我们优化了这个过程，可以通过调用：
```typescript
const table = await bitable.base.getActiveTable()
```
一步获取对应的 Table

## 优化开发者对数据进行增删改查的操作
在旧版本中，想要实现对数据的增删改查是非常麻烦的，在新版中我们做了一个非常大的优化，以附件字段举例，我们可以这样添加一个附件数据
```typescript
const attachmentField = await table.getField<IAttachmentField>(attachmentFieldId);
const attachmentCell = await attachmentField.createCell(File);
const recordId = await table.addRecord(attachmentCell);
```
这是一种全新的新增记录的方式，我们首先获取对应的附件字段(`table.getField<IAttachmentField>(attachmentFieldId)`)，然后通过这个字段的 `createCell` 方法来创建一个附件单元格（调用这个方法时，可以直接传入文件，不需要先进行文件上传等操作），然后将这个单元格
通过 `table` 下的 `addRecord` 方法插入到 `table` 中，从而实现插入一个带有附件数据的一条记录。对于其他类型的字段，我们也做了类似的优化，详情可以看 [API](api/guide.md) 部分。

## 细化字段，优化字段的属性设置
在旧版本中，对于字段属性的设置非常复杂，而且往往无法获取很好的语法提示，在新版本中我们优化了这个过程，可以让用户更加方便的设置字段的属性，例如在新版中可以这样新增一个单选字段的选项：
```typescript
const singleSelectField = await table.getField<ISingleSelectField>(singleSelectFieldId);
await singleSelectField.addOption('option1');
```
与优化数据增删改查的操作类似，首先获取对应字段，然后调用这个字段特有的方法

## 总结
在新版的 API 中，我们从字段的角度优化了数据结构，更多的相关内容可以查看 [API](api/guide.md) 部分,欢迎用户体验 👏。
