# ChangeLog

## 0.3.0
### Feat:

- 发布高阶 API，抽象不同类型字段，新增 `Record`、`Cell` 模块

## 0.2.4

### Feat:  

- 新增 `Table.getRecordShareLink` 用于获取指定记录的分享链接
- 自动编号字段返回值新增是否处于计算中状态 
- 优化部分接口调用出错的错误提示 

### Fix: 

- 修复 `Table.addRecords` 批量调用耗时过长问题


## 0.2.2

### Feat： 

- 批量操作记录接口上限提升至 5000
- 新增 `Base.addTable/setTable/deleteTable` 方法用于新增/设置/删除数据表 
- 新增 `Table.addView/setView/deleteView` 方法用于新增/设置/删除视图 

### Fix: 

- 修复创建/修改人，创建/修改时间计算延迟问题 
- 修复字段类型转换失败问题


## 0.2.1

### Feat： 
- 新增 `Table.getRecords` 方法用于批量获取记录 
- 字段 Meta 新增 `isPrimary` 标识当前字段是否索引字段 
- 字段 `Meta` 支持字段描述读写能力 
- 新增 `Bridge.getInstanceId` 用于获取当前插件的唯一标识 
  
### Fix： 
- 修复 `View.getVisibleRecordIdList` 跨表场景 id 为空问题 
- 修复 `Table.getRecordById` 获取记录数据部分字段缺失问题 
- 修复 `Table.getCellAttachmentUrls` 接口 QPS 过低问题

## 0.2.0 

首次发布至 NPM 
