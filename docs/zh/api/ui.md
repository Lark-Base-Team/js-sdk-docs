# UI 模块
`UI` 模块主要涉及到插件层面的 UI 相关，获取方式为
```typescript
const ui = bitable.ui;
```

[//]: # (## closeHostContainer)

[//]: # (```typescript)

[//]: # (closeHostContainer&#40;&#41;: Promise<boolean>;)

[//]: # (```)

[//]: # (关闭当前插件的宿主容器)

[//]: # ()
[//]: # (## setHostContainerSize)

[//]: # (```typescript)

[//]: # (setHostContainerSize&#40;size: HostContainerSize&#41;: Promise<boolean>;)

[//]: # (```)

[//]: # (设置当前插件宿主容器大小)

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