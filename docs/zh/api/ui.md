# UI 模块
`UI` 模块主要涉及到插件层面的 UI 相关，获取方式为
```typescript
const ui = bitable.ui;
```

## switchBlock
```typescript
switchBlock(blockId: string): Promise<boolean>;
```
切换当前的数据表，（可以切换到 `Dashboard仪表盘` 等）

## switchToView
```typescript
switchToView(tableId: string, viewId: string): Promise<boolean>;
```
切换到对应 `table(数据表)` 下对应的 `View(视图)`

## selectRecordIdList
```typescript
selectRecordIdList(tableId: string, viewId: string): Promise<string[]>;
```
交互式选择记录，调用这个 API 时会在全局唤起选择记录的 Model 框，方便当前用户选择对应的记录，当前用户选择完记录之后，会返回对应的记录 ID，下面展示一个使用案例：
```typescript
const { tableId, viewId } = await bitable.base.getSelection();
const recordIdList = await bitable.ui.selectRecordIdList(tableId, viewId);
const table = await bitable.base.getActiveTable();
const recordValList = [];
for (const recordId of recordIdList) {
  recordValList.push(await table.getRecord(recordId));
}
```

## showToast
```typescript
showToast(options: ShowToastOptions): Promise<boolean>;
enum ToastType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
  loading = 'loading',
}
type ShowToastOptions = {
  toastType?: ToastType,
  message: string,
};
```
全局式消息提示，调用这个 API 时会在全局提示一条消息，内容由 message 来决定（目前仅支持字符串）

##  getSelectOptionColorInfoList
```typescript
getSelectOptionColorInfoList(): Promise<ISelectOptionColor[]>;
```
获取当前选项字段的颜色信息，其中 `ISelectOptionColor` 类型定义如下：
```typescript
interface ISelectOptionColor {
    /** 颜色方案id，可用范围为0 - 54 */
    id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54;
    /** 同css 16进制颜色值，选项的背景色
     * @example '#ff0000' 纯红色
     */
    bgColor: string;
    /** 同css 16进制颜色值，文字的颜色
     * @example '#ff0000' 纯红色
     */
    textColor: string;
    /** 同css 16进制颜色值，表格中删除选项时的x图标的颜色
     * @example '#ff0000' 纯红色
     */
    iconColor: string;
    /** 同css 16进制颜色值，表格中删除选项时的x图标hover时候的颜色
     * @example '#ff0000' 纯红色
     */
    iconAltColor: string;
}
```