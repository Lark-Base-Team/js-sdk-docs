# Rating Field

The Rating field represents a field that allows users to rate a value on a scale. It can be used to collect ratings from users, such as product ratings or user satisfaction ratings.

## Interface Definition

The interface `IRatingField` represents the Rating field type. You can use it to define a variable that represents a Rating field.

```typescript
const ratingField = await table.getField<IRatingField>(fieldId);
```

The corresponding data type for the Rating field is:

```typescript
type IOpenNumber = number;
```

## Methods

The Rating field interface provides the following methods:

### createCell

This method creates a new cell for the Rating field, with the specified value.

```typescript
createCell: (val: IOpenNumber) => Promise<ICell>;
```

### getCell

This method retrieves the cell for the Rating field in the specified record.

```typescript
getCell: (recordOrId: IRecordType | string) => Promise<ICell>;
```

### setValue

This method sets the value of the Rating field in the specified record.

```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenNumber) => Promise<boolean>;
```

### getValue

This method retrieves the value of the Rating field in the specified record.

```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```

### getMin

This method retrieves the minimum value allowed for the Rating field.

```typescript
getMin: () => Promise<IRatingMinVal>;
```

The `IRatingMinVal` type is defined as follows:

```typescript
type IRatingMinVal = 0 | 1;
```

### setMin

This method sets the minimum value allowed for the Rating field.

```typescript
setMin: (min: IRatingMinVal) => Promise<IFieldRes>;
```

The `IRatingMinVal` type is defined as follows:

```typescript
type IRatingMinVal = 0 | 1;
```

### getMax

This method retrieves the maximum value allowed for the Rating field.

```typescript
getMax: () => Promise<number>;
```

### setMax

This method sets the maximum value allowed for the Rating field.

```typescript
setMax: (max: number) => Promise<IFieldRes>;
```

### getRatingIcon

This method retrieves the icon used for the Rating field.

```typescript
getRatingIcon: () => Promise<RatingIconType>;
```

The `RatingIconType` enum represents the possible values for the icon:

```typescript
enum RatingIconType {
  STAR = 'star',
  HEART = 'heart',
  THUMBSUP = 'thumbsup',
  FIRE = 'fire',
  SMILE = 'smile',
  LIGHTNING = 'lightning',
  FLOWER = 'flower',
  NUMBER = 'number',
}
```

### setRatingIcon

This method sets the icon used for the Rating field.

```typescript
setRatingIcon: (icon: RatingIconType) => Promise<IFieldRes>;
```

The `RatingIconType` enum represents the possible values for the icon:

```typescript
enum RatingIconType {
  STAR = 'star',
  HEART = 'heart',
  THUMBSUP = 'thumbsup',
  FIRE = 'fire',
  SMILE = 'smile',
  LIGHTNING = 'lightning',
  FLOWER = 'flower',
  NUMBER = 'number',
}
```