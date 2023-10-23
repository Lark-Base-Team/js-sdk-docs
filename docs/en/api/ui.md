# UI Module
The `UI` module mainly involves UI-related operations at the plugin level, and can be obtained using the following code:
```typescript
const ui = bitable.ui;
```

[//]: # (## closeHostContainer)

[//]: # (```typescript)

[//]: # (closeHostContainer&#40;&#41;: Promise<boolean>;)

[//]: # (```)

[//]: # (Closes the host container of the current plugin.)

[//]: # ()
[//]: # (## setHostContainerSize)

[//]: # (```typescript)

[//]: # (setHostContainerSize&#40;size: HostContainerSize&#41;: Promise<boolean>;)

[//]: # (```)

[//]: # (Sets the size of the host container for the current plugin.)


## switchBlock
```typescript
switchBlock(blockId: string): Promise<boolean>;
```
Switches to a different block, such as a Dashboard.

## switchToView
```typescript
switchToView(tableId: string, viewId: string): Promise<boolean>;
```
Switches to a specific view within a table.

## selectRecordIdList
```typescript
selectRecordIdList(tableId: string, viewId: string): Promise<string[]>;
```
Allows the user to interactively select records. This API will open a modal dialog for the user to choose records. Once the user has made their selection, the corresponding record IDs will be returned. Here's an example usage:
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
Displays a global toast message. This API will show a message in the global toast area, with the content determined by the `message` property (currently only supports strings).
## getSelectOptionColorInfoList
```typescript
getSelectOptionColorInfoList(): Promise<ISelectOptionColor[]>;
```
Gets the color information of the current option field. The `ISelectOptionColor` type is defined as follows:
```typescript
interface ISelectOptionColor {
  /** Color scheme ID, with a range of 0 - 54 */
  id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54;
  /** The background color of the option, in the same CSS hexadecimal color value, e.g., '#ff0000' for pure red */
  bgColor: string;
  /** The text color of the option, in the same CSS hexadecimal color value, e.g., '#ff0000' for pure red */
  textColor: string;
  /** The color of the 'x' icon when deleting the option in the table, in the same CSS hexadecimal color value, e.g., '#ff0000' for pure red */
  iconColor: string;
  /** The color of the 'x' icon when hovering over it in the table, in the same CSS hexadecimal color value, e.g., '#ff0000' for pure red */
  iconAltColor: string;
}
```