# FAQ
## 1. Relationship Between Table and View
- **Table**: You can think of a table as a data source responsible for maintaining the connections between data, without involving UI presentation (such as field order, record order, etc.).
- **View**: Different views (e.g., table view GridView, kanban view KanbanView, etc.) all consume this data source in some form of UI presentation.

## 2. Why are the record lists and field lists obtained from the getRecordIdList and getFieldIdList methods in the Table module unordered? How can I get ordered record and field lists?
The explanation for this can be found in the answer to the previous question. In various types of View modules, there are getVisibleRecordIdList and getVisibleFieldIdList methods. If you want to obtain ordered record and field lists, please use these two methods.

## 3. Why does the permission check API return false for Table permissions under advanced permissions?
When assigning edit and management permissions for a Table through advanced permissions, calling the `getPermission` API to check Table permissions returns false, which is the intended design.

- **Reason**: The Table entity itself does not have a `manageable` permission flag, and `editable` returns false in advanced permission scenarios.
- **Solution**: To check permissions for specific rows, columns, or views, use `Record`, `Field`, or `View` entity types instead of `Table`.