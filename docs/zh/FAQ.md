# FAQ

## 1. 数据表 (Table) 和视图 (View) 的关系

- **数据表**：可以将数据表理解成一个`数据源`，它负责维护数据与数据之间的联系，并不涉及 UI 展示(如字段顺序、记录顺序等)
- **视图**：不同的视图（如表格视图 `GridView`、看板视图 `KanbanView` 等）均是以某种 `UI 的呈现形式`来消费这个`数据源`

## 2. 为什么 `Table` 模块中 `getRecordIdList` 和 `getFieldIdList` 方法拿到的记录列表和字段列表均是无序的？如何拿到有序的记录列表和字段列表？
原因解释可以参考上面问题的答案，不同类型的 `View` 模块中均存在 [getVisibleRecordIdList](./api/view/grid.md#getvisiblerecordidlist) 和 [getVisibleFieldIdList](./api/view/grid.md#getvisiblefieldidlist) 方法，如果希望拿到`有序`的记录和字段列表，请通过这两个方法获取。

## 3. [Bridge.getUserId](../zh/api/bridge.md#getuserid) 方法获取到的 userId 能直接在飞书开放平台消费使用吗？
**不可以**，该接口获取到的 `userId` 和飞书开放平台中的 `userId` 并非一一对应的关系，**两者相互独立，请勿混用**。

## 4. 为什么在高级权限下分配了 Table 权限，调用权限检查 API 却返回 false？
当通过高级权限给用户分配了 Table 的编辑和管理权限后，调用 `getPermission` API 检查 Table 权限时返回 false，这是符合预期的设计。

- **原因**：Table 实体本身没有 `manageable` 权限点位，且 `editable` 在高级权限场景下会返回 false
- **解决方案**：如需检查具体的行、列或视图权限，请将实体类型从 `Table` 改为具体的实体类型，如 `Record`、`Field` 或 `View`