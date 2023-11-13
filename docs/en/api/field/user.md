# User Field
Definition of `IUserField`, usage example:
```typescript
const userField = await table.getField<IUserField>(fieldId);
```
The corresponding data type is:
```typescript
export type IOpenUser = {
  id: string;
  name?: string;
  enName?: string;
  email?: string;
  /** @deprecated */
  en_name?: string;
};

type UserFieldTransformVal = IOpenUser | IOpenUser[];
```

## createCell
```typescript
createCell: (val: UserFieldTransformVal) => Promise<ICell>;
```
Create a `Cell` for a user field

## getCell
```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```
Get the corresponding `Cell` for the given `Record`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: UrlTransformVal) => Promise<boolean>;
```
Set the value for the corresponding `Record`

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenUser[]>;
```
Get the value for the corresponding `Record`

## setMultiple
```typescript
setMultiple: (multiple: boolean) => Promise<IFieldRes>;
```
Set whether multiple users can be set

## getMultiple
```typescript
getMultiple: () => Promise<boolean>;
```
Get whether multiple users can be set