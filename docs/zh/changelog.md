# ChangeLog

## 0.3.8

### Feat

- 支持**表格视图**获取当前选中的所有记录 id 
- 新增 `Bridge.navigateToExtension` 实现插件间跳转能力
- 新增 `Bridge.onDataChange` 事件，用于监听插件数据存储变更

### Fix
- 插件相关权限将受文档权限管控

## 0.3.6

### Feat

- 支持插件自定义存储能力，详细用法参考 `Bridge.getData/setData`
- 支持配置公式字段 `Formula` 表达式
- UI 模块新增 `UI.showRecordDetailDialog` 用于在全局弹出记录详情弹窗，支持更丰富的业务场景联动

### Fix

- 修复部分用户刷新页面接口偶现变慢问题

## 0.3.5

### Feat

#### UI 模块
- 新增 `UI.selectRecordIdList` 方法，该方法会在全局唤起指定数据表选择记录 Modal框，方便当前用户选择对应的记录并返回记录 id 列表
- 新增 `UI.showToast` 方法用于在全局弹出消息提示
- 新增 `UI.switchToTable/switchToView` 方法用于切换当前选中的数据表/视图

#### Table 模块
- TableMeta 添加`同步表`标识

#### View 模块
- 支持视图`筛选/排序/分组`能力
- 支持开启/关闭`视图分享`并获取记录分享链接
- 新增`多种类型视图模块能力`，如支持获取表格视图的列宽等

#### Field 模块
- 支持`邮箱`字段
- `查找引用字段`支持获取引用的 TableId 和 FieldId

### Fix:
- 修复 `CellValue Checkers`断言过宽问题


## 0.3.0
### Feat

- 发布高阶 API，抽象不同类型字段，新增 `Record`、`Cell` 模块

## 0.2.4

### Feat

- 新增 `Table.getRecordShareLink` 用于获取指定记录的分享链接
- 自动编号字段返回值新增是否处于计算中状态 
- 优化部分接口调用出错的错误提示 

### Fix 

- 修复 `Table.addRecords` 批量调用耗时过长问题


## 0.2.2

### Feat 

- 批量操作记录接口上限提升至 5000
- 新增 `Base.addTable/setTable/deleteTable` 方法用于新增/设置/删除数据表 
- 新增 `Table.addView/setView/deleteView` 方法用于新增/设置/删除视图 

### Fix

- 修复创建/修改人，创建/修改时间计算延迟问题 
- 修复字段类型转换失败问题


## 0.2.1

### Feat
- 新增 `Table.getRecords` 方法用于批量获取记录 
- 字段 Meta 新增 `isPrimary` 标识当前字段是否索引字段 
- 字段 `Meta` 支持字段描述读写能力 
- 新增 `Bridge.getInstanceId` 用于获取当前插件的唯一标识 
  
### Fix
- 修复 `View.getVisibleRecordIdList` 跨表场景 id 为空问题 
- 修复 `Table.getRecordById` 获取记录数据部分字段缺失问题 
- 修复 `Table.getCellAttachmentUrls` 接口 QPS 过低问题

## 0.2.0 

首次发布至 NPM 
