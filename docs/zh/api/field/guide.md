# 字段模块引导
:::tip
字段即多维表格中的`列`，字段类型决定了这一列的数据类型。
:::

通常我们通过 [Table 模块](../table) 创建或获取字段，如下所示：
```typescript
const singleSelectField = await table.getField<ISingleSelectField>(fieldNameOrId);
```
这里有一个很重要的地方，我们在调用 `getField` 方法时，传入了指定的类型 `<ISingleSelectField>`，我们非常推荐这样的用法，通过这样的方法获取的 `Field`，会有足够的类型提示,
例如我们可以很方便地为这个单选字段新增选项：
```typescript
await singleSelectField.addOption('Option1');
```
除了设置字段的属性之外，我们也推荐开发者从字段角度来对值进行增删改查操作例如：
```typescript
await singleSelectField.setValue(recordOrId, 'Option2');
```
基于列的角度对数据进行增删改查时非常简单和便利，我们为很多字段提供了便于开发者使用的方法
，这里展示一个通过 [附件字段](./attachment.md) 来创建一条记录的例子：
```typescript
const attachmentCell = await attachmentField.createCell(imageFile);
await table.addRecord(attachmentCell);
```

目前我们已支持了多种字段类型，详细用法可以点击具体类型的字段模块中查看。