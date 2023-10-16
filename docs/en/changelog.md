# ChangeLog

## 0.3.0
### Feat:
Released advanced API, abstracting different types of fields, added Record and Cell modules

## 0.2.4
### Feat:
- Added `Table.getRecordShareLink` for obtaining the sharing link of a specific record
- Auto-number field now returns whether it is in the calculation state
- Optimized error messages for some interface calls

### Fix:
- Resolved the issue of excessive time consumption in batch calls of `Table.addRecords`

## 0.2.2
### Feat:
- Increased the upper limit of batch record operations to 5000
- Added `Base.addTable/setTable/deleteTable` methods for adding, setting, and deleting data tables
- Added `Table.addView/setView/deleteView` methods for adding, setting, and deleting views

### Fix:
- Resolved delays in the calculation of creation/modification personnel and times
- Resolved issues with field type conversions

## 0.2.1
### Feat:
- Added `Table.getRecords` method for batch record retrieval
- Field Meta added the isPrimary flag to indicate whether the current field is an indexed field
- Field Meta supports read/write capabilities for field descriptions
- Added `Bridge.getInstanceId` for obtaining the unique identifier of the current plugin
### Fix:
- Resolved the issue of empty IDs in the cross-table scenario for `View.getVisibleRecordIdList`
- Resolved the issue of missing fields in data retrieval for `Table.getRecordById`
- Resolved the issue of low QPS for `Table.getCellAttachmentUrls` interface

## 0.2.0
First release to NPM