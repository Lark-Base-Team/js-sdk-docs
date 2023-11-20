# FormView 表单视图

::: warning
该模块测试中，提前体验请使用 **0.3.5-alpha.2** 版本包并在 URL 查询参数中添加 **vb=1.0.3.6087**
:::

## id
当前视图的 id

## tableId
当前视图所属的数据表 id

## getName
```typescript
getName(): Promise<string>;
```
获取视图名

## getType
获取视图类型
```typescript
getType(): Promise<ViewType.Form>;
```

## getMeta
```typescript
getMeta(): Promise<IFormViewMeta>;
```
获取视图元数据，其中 `IFormViewMeta` 的类型定义为：
```typescript
interface IFormViewMeta {
  id: string;
  name: string;
  type: ViewType;
  property: null;
}
```