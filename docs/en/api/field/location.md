# Location Field
The location field is used to store and retrieve geographic location information. It can be used to store addresses, coordinates, and other location-related data.

## Interface
The `ILocationField` interface represents a location field in the database schema. You can use the following code to get a location field from a table:

```typescript
const locationField = await table.getField<ILocationField>(fieldId);
```

The corresponding data structure for a location is defined as follows:

```typescript
type IOpenLocation = {
  address: string;
  adname: string;
  cityname: string;
  name: string;
  pname: string;
  fullAddress: string;
  location: string;
  full_address: string; // Deprecated
};
```

## Methods

### createCell
The `createCell` method creates a new cell with a location value.

```typescript
createCell: (val: IOpenLocation) => Promise<ICell>;
```

### getCell
The `getCell` method retrieves the cell with the location value for a specific record.

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

### setValue
The `setValue` method sets the location value for a specific record.

```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenLocation) => Promise<boolean>;
```

### getValue
The `getValue` method retrieves the location value for a specific record.

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenLocation>;
```

### setInputType
The `setInputType` method sets the input type for the location field.

```typescript
setInputType: (inputType: ELocationInputType) => Promise<IFieldRes>;
```

The `ELocationInputType` enum defines the available input types for location fields:

```typescript
enum ELocationInputType {
  ONLY_MOBILE = 'ONLY_MOBILE',
  NOT_LIMIT = 'NOT_LIMIT',
}
```

### getInputType
The `getInputType` method retrieves the input type for the location field.

```typescript
getInputType: () => Promise<ELocationInputType>;
```

The `ELocationInputType` enum defines the available input types for location fields:

```typescript
enum ELocationInputType {
  ONLY_MOBILE = 'ONLY_MOBILE',
  NOT_LIMIT = 'NOT_LIMIT',
}
```