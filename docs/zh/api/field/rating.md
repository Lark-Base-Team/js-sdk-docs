# Rating 评分字段
类型定义 `IRatingField`，使用方法示例：
```typescript
const ratingField = await table.getField<IRatingField>(fieldId);
```
其中对应的数据类型为：
```typescript
type IOpenNumber = number;
```

## createCell
```typescript
createCell: (val: IOpenNumber) => Promise<ICell>;
```
创建一个评分字段的 `Cell`

## getCell
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<ICell>;
```
通过对应的 `Record` 来获取对应的 `Cell`

## setValue
```typescript
setValue: (recordOrId: IRecordType | string, val: IOpenNumber) => Promise<boolean>;
```
通过 `Record` 来设置对应的值

## getValue
```typescript
getValue: (recordOrId: IRecordType | string) => Promise<IOpenNumber>;
```
通过 `Record` 来获取对应的值

## getMin
```typescript
getMin: () => Promise<IRatingMinVal>;
```
获取设置的最小值，其中 `IRatingMinVal` 的类型定义为：
```typescript
type IRatingMinVal = 0 | 1;
```

## setMin
```typescript
setMin: (min: IRatingMinVal) => Promise<IFieldRes>;
```
设置最小值，其中 `IRatingMinVal` 的类型定义为：
```typescript
type IRatingMinVal = 0 | 1;
```

## getMax
```typescript
getMax: () => Promise<number>;
```
获取设置的最大值

## setMax
```typescript
setMax: (max: number) => Promise<IFieldRes>;
```
设置最大值

## getRatingIcon
```typescript
getRatingIcon: () => Promise<RatingIconType>;
```
获取评分字段的 ICON，其中 `RatingIconType` 的值为：
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

## setRatingIcon
```typescript
setRatingIcon: (icon: RatingIconType) => Promise<IFieldRes>;
```
设置评分字段的 ICON，其中 `RatingIconType` 的值为:
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
